'use client';

import { useEffect, useRef, useCallback } from 'react';

/**
 * VenturiFluid — Clean particle flow through geometric Venturi tube.
 * 
 * Aesthetic: White tube outline, discrete particles flowing L→R,
 * converging at throat, expanding after. Blue/cyan palette.
 * Canvas 2D, 60fps, GPU-friendly.
 */

interface Particle {
  t: number;        // parametric position 0→1 along tube
  lane: number;     // -1 to 1, vertical position within tube
  size: number;     // base radius
  brightness: number; // 0-1
}

interface Speckle {
  x: number;  // normalized 0-1
  y: number;  // normalized -1 to 1 (within tube)
  alpha: number;
  size: number;
}

export default function VenturiFluid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const stateRef = useRef<{
    particles: Particle[];
    speckles: Speckle[];
    time: number;
    isMobile: boolean;
  } | null>(null);

  // Tube geometry: returns half-height at normalized x position (0-1)
  const tubeRadius = useCallback((nx: number): number => {
    // Smooth Venturi: wide → narrow throat → wide
    // Using cos^4 for smooth pinch
    const throatRatio = 0.22; // throat is 22% of max radius
    const pinch = Math.pow(Math.cos(Math.PI * (nx - 0.5)), 4);
    return throatRatio + (1 - throatRatio) * (1 - pinch);
  }, []);

  // Flow speed multiplier (continuity: faster at throat)
  const flowSpeed = useCallback((nx: number): number => {
    const r = tubeRadius(nx);
    return 1 / Math.max(r, 0.15);
  }, [tubeRadius]);

  // Initialize particles and speckles
  const initState = useCallback((isMobile: boolean) => {
    const particleCount = isMobile ? 36 : 56;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        t: Math.random(),
        lane: (Math.random() * 2 - 1) * 0.85,
        size: 1.5 + Math.random() * 1.5,
        brightness: 0.6 + Math.random() * 0.4,
      });
    }

    // Static speckle field (background texture inside tube)
    const speckleCount = isMobile ? 120 : 250;
    const speckles: Speckle[] = [];
    for (let i = 0; i < speckleCount; i++) {
      speckles.push({
        x: Math.random(),
        y: (Math.random() * 2 - 1) * 0.9,
        alpha: 0.10 + Math.random() * 0.10,
        size: 0.5 + Math.random() * 1.2,
      });
    }

    stateRef.current = { particles, speckles, time: 0, isMobile };
  }, []);

  const draw = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, dpr: number) => {
    const state = stateRef.current;
    if (!state) return;

    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    const cx = w / 2;
    const cy = h / 2;
    const maxR = h * 0.44; // max tube half-height
    const t = state.time;

    ctx.clearRect(0, 0, w, h);
    ctx.save();

    // Helper: get tube Y bounds at normalized x
    const tubeY = (nx: number) => tubeRadius(nx) * maxR;

    // --- LAYER 1: Background fill inside tube (deep blue) ---
    ctx.beginPath();
    const seg = 80;
    // Top edge
    for (let i = 0; i <= seg; i++) {
      const nx = i / seg;
      const x = nx * w;
      const r = tubeY(nx);
      if (i === 0) ctx.moveTo(x, cy - r);
      else ctx.lineTo(x, cy - r);
    }
    // Bottom edge (reverse)
    for (let i = seg; i >= 0; i--) {
      const nx = i / seg;
      const x = nx * w;
      const r = tubeY(nx);
      ctx.lineTo(x, cy + r);
    }
    ctx.closePath();
    
    // Fill with deep blue gradient
    const bgGrad = ctx.createLinearGradient(0, cy - maxR, 0, cy + maxR);
    bgGrad.addColorStop(0, '#1a3a6e');
    bgGrad.addColorStop(0.5, '#2A5298');
    bgGrad.addColorStop(1, '#1a3a6e');
    ctx.fillStyle = bgGrad;
    ctx.fill();

    // Clip to tube interior for all inner layers
    ctx.save();
    ctx.clip();

    // --- LAYER 2: Speckle field (static texture) ---
    for (const sp of state.speckles) {
      const r = tubeY(sp.x);
      const x = sp.x * w;
      const y = cy + sp.y * r;
      ctx.beginPath();
      ctx.arc(x, y, sp.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,217,255,${sp.alpha})`;
      ctx.fill();
    }

    // --- LAYER 3: Flowing particles ---
    const dt = 1 / 60; // approximate
    for (const p of state.particles) {
      // Advance particle
      const speed = flowSpeed(p.t);
      const baseSpeed = 0.12; // base traversal speed per second (2x faster)
      p.t += baseSpeed * speed * dt;

      // Wrap around
      if (p.t > 1) {
        p.t -= 1;
        p.lane = (Math.random() * 2 - 1) * 0.85;
        p.brightness = 0.6 + Math.random() * 0.4;
      }

      const r = tubeY(p.t);
      const x = p.t * w;
      const y = cy + p.lane * r;

      // Brightness: higher at throat
      const distFromThroat = Math.abs(p.t - 0.5) * 2;
      const throatBoost = 1 - distFromThroat;
      const alpha = Math.min(p.brightness * (0.35 + throatBoost * 0.4), 0.78);

      // Size: slightly larger at throat for emphasis
      const sizeBoost = 1 + throatBoost * 0.5;
      const radius = p.size * sizeBoost;

      // Draw particle with glow
      const grd = ctx.createRadialGradient(x, y, 0, x, y, radius * 3);
      grd.addColorStop(0, `rgba(200,230,255,${alpha * 0.7})`);
      grd.addColorStop(0.3, `rgba(0,217,255,${alpha * 0.4})`);
      grd.addColorStop(1, 'rgba(0,217,255,0)');
      ctx.beginPath();
      ctx.arc(x, y, radius * 3, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      // Core dot
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,230,255,${alpha * 0.8})`;
      ctx.fill();
    }

    // --- LAYER 4: Center throat glow ---
    const glowPulse = 0.7 + 0.3 * Math.sin(t * 1.5);
    const throatR = tubeY(0.5);
    const glowR = throatR * 2.5;
    const glowGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
    const glowAlpha = 0.14 * glowPulse;
    glowGrad.addColorStop(0, `rgba(180,220,255,${glowAlpha})`);
    glowGrad.addColorStop(0.2, `rgba(0,217,255,${glowAlpha * 0.5})`);
    glowGrad.addColorStop(0.6, `rgba(0,217,255,${glowAlpha * 0.15})`);
    glowGrad.addColorStop(1, 'rgba(0,217,255,0)');
    ctx.fillStyle = glowGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore(); // unclip

    // --- LAYER 5: Tube outline (white boundary) ---
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Horizontal gradient for edge fade
    const strokeGrad = ctx.createLinearGradient(0, 0, w, 0);
    strokeGrad.addColorStop(0, 'rgba(240,240,240,0)');
    strokeGrad.addColorStop(0.08, 'rgba(240,240,240,0.6)');
    strokeGrad.addColorStop(0.3, 'rgba(240,240,240,0.85)');
    strokeGrad.addColorStop(0.5, 'rgba(240,240,240,1)');
    strokeGrad.addColorStop(0.7, 'rgba(240,240,240,0.85)');
    strokeGrad.addColorStop(0.92, 'rgba(240,240,240,0.6)');
    strokeGrad.addColorStop(1, 'rgba(240,240,240,0)');
    ctx.strokeStyle = strokeGrad;

    for (const side of [-1, 1]) {
      ctx.beginPath();
      for (let i = 0; i <= seg; i++) {
        const nx = i / seg;
        const x = nx * w;
        const r = tubeY(nx);
        const y = cy + side * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    ctx.restore();
  }, [tubeRadius, flowSpeed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    initState(isMobile);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      canvas!.width = rect.width * dpr;
      canvas!.height = rect.height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener('resize', resize);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let lastTime = 0;
    function animate(timestamp: number) {
      if (!lastTime) lastTime = timestamp;
      const dt = (timestamp - lastTime) / 1000;
      lastTime = timestamp;

      if (stateRef.current) {
        if (prefersReducedMotion) {
          stateRef.current.time = 0;
        } else {
          stateRef.current.time += dt;
        }
      }

      draw(canvas!, ctx!, dpr);

      if (!prefersReducedMotion) {
        animRef.current = requestAnimationFrame(animate);
      }
    }

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [draw, initState]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.85 }}
      aria-hidden="true"
    />
  );
}
