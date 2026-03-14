'use client';

import { useEffect, useRef, useCallback } from 'react';

/**
 * VenturiFluid — Premium fluid animation clearly showing Venturi flow physics.
 * 
 * Visual story: fluid enters wide & slow on left → converges & accelerates at throat →
 * expands & decelerates on right. Premium caustic aesthetic with unmistakable flow direction.
 */

function createNoise() {
  const perm = new Uint8Array(512);
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];

  function fade(t: number) { return t * t * t * (t * (t * 6 - 15) + 10); }
  function lerp(a: number, b: number, t: number) { return a + t * (b - a); }
  function grad(hash: number, x: number, y: number) {
    const h = hash & 3;
    const u = h < 2 ? x : y;
    const v = h < 2 ? y : x;
    return ((h & 1) ? -u : u) + ((h & 2) ? -v : v);
  }

  return function noise2D(x: number, y: number): number {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);
    const u = fade(xf);
    const v = fade(yf);
    const aa = perm[perm[X] + Y];
    const ab = perm[perm[X] + Y + 1];
    const ba = perm[perm[X + 1] + Y];
    const bb = perm[perm[X + 1] + Y + 1];
    return lerp(
      lerp(grad(aa, xf, yf), grad(ba, xf - 1, yf), u),
      lerp(grad(ab, xf, yf - 1), grad(bb, xf - 1, yf - 1), u),
      v
    );
  };
}

interface StreamConfig {
  yBase: number;       // normalized y position (0-1) relative to tube radius
  speed: number;       // base flow speed
  width: number;       // max stroke width
  opacity: number;     // base opacity
  noiseScale: number;  // organic displacement amount
  noiseFreq: number;   // noise frequency
  hueShift: number;    // color variation
  phase: number;       // phase offset for staggered animation
}

export default function VenturiFluid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const noiseRef = useRef<ReturnType<typeof createNoise> | null>(null);
  const timeRef = useRef(0);
  const dprRef = useRef(1);

  const draw = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const dpr = dprRef.current;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    const noise = noiseRef.current!;
    const t = timeRef.current;
    const cx = w / 2;
    const cy = h / 2;

    ctx.clearRect(0, 0, w, h);
    ctx.save();

    // Venturi tube shape: wide at edges, narrow at center
    const throatWidth = 0.16;
    const maxRadius = h * 0.48;
    function tubeRadius(nx: number): number {
      const shape = 1 - (1 - throatWidth) * Math.pow(Math.cos(Math.PI * (nx - 0.5)), 6);
      return maxRadius * shape;
    }

    // Flow speed at position nx: faster at throat (continuity equation: A*v = const)
    // Returns speed multiplier (1 at edges, higher at throat)
    function flowSpeed(nx: number): number {
      const r = tubeRadius(nx);
      // Speed inversely proportional to cross-section area
      // Clamp to avoid infinity
      return Math.min(maxRadius / Math.max(r, maxRadius * 0.1), 6);
    }

    // --- LAYER 1: Ambient caustic glow ---
    const causticsCount = 5;
    for (let c = 0; c < causticsCount; c++) {
      const phase = c * 1.7 + t * 0.15;
      // Caustics drift left-to-right slowly
      const drift = (t * 0.03 + c * 0.2) % 1.4 - 0.2;
      const nx = Math.max(0, Math.min(1, drift));
      const ny = 0.5 + 0.12 * noise(c * 3.7, t * 0.08);
      const radius = tubeRadius(nx) * 0.5;
      const x = nx * w;
      const y = cy + (ny - 0.5) * radius * 2;
      const r = 50 + 30 * Math.sin(phase);

      const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
      const alpha = 0.02 + 0.015 * Math.sin(phase * 1.3);
      grad.addColorStop(0, `rgba(201,169,97,${alpha})`);
      grad.addColorStop(0.5, `rgba(42,82,152,${alpha * 0.5})`);
      grad.addColorStop(1, 'rgba(42,82,152,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // --- LAYER 2: Flowing ribbon streams with directional flow ---
    const streams: StreamConfig[] = [
      // Upper streams
      { yBase: -0.88, speed: 0.8,  width: 2.2, opacity: 0.14, noiseScale: 22, noiseFreq: 0.7,  hueShift: 0,   phase: 0 },
      { yBase: -0.68, speed: 0.9,  width: 2.8, opacity: 0.18, noiseScale: 18, noiseFreq: 0.8,  hueShift: 8,   phase: 0.6 },
      { yBase: -0.48, speed: 1.0,  width: 3.4, opacity: 0.24, noiseScale: 16, noiseFreq: 0.9,  hueShift: 16,  phase: 1.2 },
      { yBase: -0.28, speed: 1.1,  width: 2.8, opacity: 0.20, noiseScale: 14, noiseFreq: 1.0,  hueShift: -8,  phase: 1.8 },
      { yBase: -0.12, speed: 1.2,  width: 2.0, opacity: 0.16, noiseScale: 12, noiseFreq: 1.1,  hueShift: 4,   phase: 2.4 },
      // Lower streams (mirror)
      { yBase: 0.88,  speed: 0.8,  width: 2.2, opacity: 0.14, noiseScale: 22, noiseFreq: 0.7,  hueShift: 0,   phase: 0.3 },
      { yBase: 0.68,  speed: 0.9,  width: 2.8, opacity: 0.18, noiseScale: 18, noiseFreq: 0.8,  hueShift: 8,   phase: 0.9 },
      { yBase: 0.48,  speed: 1.0,  width: 3.4, opacity: 0.24, noiseScale: 16, noiseFreq: 0.9,  hueShift: 16,  phase: 1.5 },
      { yBase: 0.28,  speed: 1.1,  width: 2.8, opacity: 0.20, noiseScale: 14, noiseFreq: 1.0,  hueShift: -8,  phase: 2.1 },
      { yBase: 0.12,  speed: 1.2,  width: 2.0, opacity: 0.16, noiseScale: 12, noiseFreq: 1.1,  hueShift: 4,   phase: 2.7 },
      // Center streams (most visible)
      { yBase: 0.0,   speed: 1.3,  width: 4.0, opacity: 0.30, noiseScale: 10, noiseFreq: 1.2,  hueShift: 25,  phase: 0.7 },
      { yBase: 0.06,  speed: 1.25, width: 3.2, opacity: 0.22, noiseScale: 11, noiseFreq: 1.15, hueShift: 12,  phase: 1.4 },
      { yBase: -0.06, speed: 1.25, width: 3.2, opacity: 0.22, noiseScale: 11, noiseFreq: 1.15, hueShift: -12, phase: 2.0 },
    ];

    const segments = 100;

    for (const stream of streams) {
      const points: { x: number; y: number; pressure: number; speed: number }[] = [];

      for (let i = 0; i <= segments; i++) {
        const nx = i / segments;
        const x = nx * w;

        // Venturi compression
        const radius = tubeRadius(nx);
        const compression = radius / maxRadius;

        // Stream y follows tube shape
        const baseY = cy + stream.yBase * radius;

        // Flowing noise: the noise coordinates scroll left-to-right at flow speed
        // This creates the illusion of fluid moving through the tube
        const localSpeed = flowSpeed(nx);
        const flowOffset = t * 0.15 * stream.speed * localSpeed;
        
        const noiseVal = noise(
          nx * stream.noiseFreq * 3 + stream.phase - flowOffset * 0.3,
          stream.phase * 10 + t * 0.04
        );
        const displacement = noiseVal * stream.noiseScale * compression;

        const microNoise = noise(
          nx * stream.noiseFreq * 8 + stream.phase + 100 - flowOffset * 0.5,
          stream.phase * 10 + 50 + t * 0.06
        ) * 4 * compression;

        const y = baseY + displacement + microNoise;

        const distFromCenter = Math.abs(nx - 0.5) * 2;
        const pressure = 1 - distFromCenter;

        points.push({ x, y, pressure, speed: localSpeed });
      }

      // Draw stream path with varying width, color, opacity
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const nx = i / segments;

        // Width: thinner at throat (fluid stretches when it accelerates)
        const throatFactor = tubeRadius(nx) / maxRadius;
        const widthMultiplier = 0.3 + 0.7 * throatFactor;
        const lineWidth = stream.width * widthMultiplier;

        // Opacity: brighter at throat + traveling pulse waves
        const pressureGlow = curr.pressure * 0.5;
        const edgeFade = Math.min(nx * 4, (1 - nx) * 4, 1);
        
        // Traveling opacity waves (move left to right, faster at throat)
        const wavePhase = nx * 12 - t * 1.8 * stream.speed + stream.phase * 3;
        const wave = 0.5 + 0.5 * Math.sin(wavePhase);
        const waveIntensity = 0.15 * wave;
        
        const alpha = Math.min((stream.opacity + pressureGlow + waveIntensity) * edgeFade, 0.9);

        // Color: cool blue at edges → warm gold at throat
        const blueR = 42, blueG = 82, blueB = 152;
        const goldR = 201, goldG = 169, goldB = 97;
        const colorMix = Math.pow(curr.pressure, 1.8);
        const r = Math.round(blueR + (goldR - blueR) * colorMix);
        const g = Math.round(blueG + (goldG - blueG) * colorMix);
        const b = Math.round(blueB + (goldB - blueB) * colorMix);

        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        const midX = (prev.x + curr.x) / 2;
        const midY = (prev.y + curr.y) / 2;
        ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);

        ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
    }

    // --- LAYER 3: Traveling flow pulses (speed lines that move L→R) ---
    // These are subtle bright pulses that travel through the streams, 
    // moving slowly at inlet, fast at throat, medium at outlet
    const pulseCount = 8;
    for (let p = 0; p < pulseCount; p++) {
      // Each pulse has a base position that advances over time
      const basePulseSpeed = 0.06 + p * 0.005;
      const pulsePhase = (t * basePulseSpeed + p / pulseCount) % 1.0;
      
      // Map pulse position through flow speed (non-linear: spends less time at throat)
      // Integrate flow speed to get actual position
      let nx = pulsePhase;
      
      if (nx < 0.02 || nx > 0.98) continue; // skip edges
      
      const localSpeed = flowSpeed(nx);
      const radius = tubeRadius(nx);
      const pulseWidth = 15 + 25 * (radius / maxRadius); // wider at inlet/outlet
      
      // Pulse brightness: brighter at throat
      const distFromCenter = Math.abs(nx - 0.5) * 2;
      const intensity = 0.04 + 0.06 * (1 - distFromCenter);
      
      const x = nx * w;
      const grad = ctx.createRadialGradient(x, cy, 0, x, cy, radius * 0.8);
      grad.addColorStop(0, `rgba(201,169,97,${intensity})`);
      grad.addColorStop(0.3, `rgba(201,169,97,${intensity * 0.6})`);
      grad.addColorStop(1, 'rgba(201,169,97,0)');
      
      // Draw as vertical ellipse matching tube shape
      ctx.save();
      ctx.translate(x, cy);
      ctx.scale(pulseWidth / (radius * 0.8), 1);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.8, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // --- LAYER 4: Throat glow (emphasize the acceleration zone) ---
    const throatGlowW = 100 + 20 * Math.sin(t * 0.3);
    const throatGlowH = tubeRadius(0.5) * 1.5;
    const throatAlpha = 0.10 + 0.05 * Math.sin(t * 0.25);
    const throatGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, throatGlowW);
    throatGrad.addColorStop(0, `rgba(201,169,97,${throatAlpha})`);
    throatGrad.addColorStop(0.5, `rgba(201,169,97,${throatAlpha * 0.4})`);
    throatGrad.addColorStop(1, 'rgba(201,169,97,0)');
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(1, throatGlowH / throatGlowW);
    ctx.fillStyle = throatGrad;
    ctx.beginPath();
    ctx.arc(0, 0, throatGlowW, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // --- LAYER 5: Directional flow markers (subtle elongated glows that travel L→R) ---
    const markerCount = 12;
    for (let m = 0; m < markerCount; m++) {
      const markerSpeed = 0.04 + (m % 3) * 0.008;
      const nx = ((t * markerSpeed + m / markerCount + 0.1 * noise(m * 7, 0)) % 1.2) - 0.1;
      if (nx < 0 || nx > 1) continue;
      
      const localSpeed = flowSpeed(nx);
      const radius = tubeRadius(nx);
      
      // Position within the tube
      const yOffset = noise(m * 5.3, 0.5) * 0.7; // fixed y position per marker
      const x = nx * w;
      const y = cy + yOffset * radius;
      
      // Elongation increases with speed (stretched at throat)
      const elongation = 2 + localSpeed * 3;
      const markerH = 1.5 + 1.5 * (radius / maxRadius);
      
      const distFromCenter = Math.abs(nx - 0.5) * 2;
      const markerAlpha = 0.06 + 0.08 * (1 - distFromCenter);
      
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(elongation, 1);
      ctx.beginPath();
      ctx.arc(0, 0, markerH, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,169,97,${markerAlpha})`;
      ctx.fill();
      ctx.restore();
    }

    // --- LAYER 6: Tube boundary (subtle implied shape) ---
    ctx.globalCompositeOperation = 'screen';
    for (let side = -1; side <= 1; side += 2) {
      ctx.beginPath();
      for (let i = 0; i <= segments; i++) {
        const nx = i / segments;
        const x = nx * w;
        const radius = tubeRadius(nx);
        const y = cy + side * radius;
        const boundaryNoise = noise(nx * 2 + 10, t * 0.05 + side * 5) * 3;
        if (i === 0) ctx.moveTo(x, y + boundaryNoise);
        else ctx.lineTo(x, y + boundaryNoise);
      }
      const edgeFadeGrad = ctx.createLinearGradient(0, 0, w, 0);
      edgeFadeGrad.addColorStop(0, 'rgba(201,169,97,0)');
      edgeFadeGrad.addColorStop(0.1, 'rgba(201,169,97,0.04)');
      edgeFadeGrad.addColorStop(0.3, 'rgba(201,169,97,0.08)');
      edgeFadeGrad.addColorStop(0.5, 'rgba(201,169,97,0.14)');
      edgeFadeGrad.addColorStop(0.7, 'rgba(201,169,97,0.08)');
      edgeFadeGrad.addColorStop(0.9, 'rgba(201,169,97,0.04)');
      edgeFadeGrad.addColorStop(1, 'rgba(201,169,97,0)');
      ctx.strokeStyle = edgeFadeGrad;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }
    ctx.globalCompositeOperation = 'source-over';

    ctx.restore();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    noiseRef.current = createNoise();

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      dprRef.current = dpr;
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

      if (prefersReducedMotion) {
        timeRef.current = 0;
        draw(canvas!, ctx!);
        return;
      }

      timeRef.current += dt;
      draw(canvas!, ctx!);
      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.85 }}
      aria-hidden="true"
    />
  );
}
