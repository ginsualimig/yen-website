'use client';

import { useEffect, useRef, useCallback } from 'react';

/**
 * VenturiFluid — Premium fluid/caustic animation for the hero section.
 * 
 * Design philosophy: Light refraction + ribbon flow hybrid.
 * No discrete particles. Continuous, organic, GPU-accelerated Canvas 2D.
 * Feels like underwater caustics flowing through an invisible Venturi tube.
 */

// Simplex-like noise (fast, good enough for organic movement)
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
  yBase: number;       // normalized y position (0-1) relative to center
  speed: number;       // flow speed multiplier
  width: number;       // max stroke width
  opacity: number;     // base opacity
  noiseScale: number;  // how much noise affects the path
  noiseFreq: number;   // noise frequency
  hueShift: number;    // color variation
  phase: number;       // animation phase offset
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

    // Venturi tube shape function: returns the tube radius at position x (0-1)
    // Wide at edges, narrow at center (throat)
    function tubeRadius(nx: number): number {
      // Smooth hourglass shape using cosine
      const throatWidth = 0.18; // how narrow the throat is (fraction of max)
      const maxRadius = h * 0.48;
      // Smooth convergence using a shaped cosine
      const shape = 1 - (1 - throatWidth) * Math.pow(Math.cos(Math.PI * (nx - 0.5)), 6);
      return maxRadius * shape;
    }

    // --- LAYER 1: Ambient caustic glow (very subtle, background) ---
    const causticsCount = 4;
    for (let c = 0; c < causticsCount; c++) {
      const phase = c * 1.7 + t * 0.15;
      const nx = 0.3 + 0.4 * Math.sin(phase * 0.3 + c);
      const ny = 0.5 + 0.15 * noise(c * 3.7, t * 0.08);
      const radius = tubeRadius(nx) * 0.6;
      const x = nx * w;
      const y = cy + (ny - 0.5) * radius * 2;
      const r = 60 + 40 * Math.sin(phase);

      const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
      // Gold-tinted caustic
      const alpha = 0.025 + 0.015 * Math.sin(phase * 1.3);
      grad.addColorStop(0, `rgba(201,169,97,${alpha})`);
      grad.addColorStop(0.5, `rgba(42,82,152,${alpha * 0.5})`);
      grad.addColorStop(1, 'rgba(42,82,152,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // --- LAYER 2: Flowing ribbon streams ---
    const streams: StreamConfig[] = [
      // Upper streams (converge down toward center)
      { yBase: -0.85, speed: 1.0,  width: 2.8, opacity: 0.18, noiseScale: 25, noiseFreq: 0.8,  hueShift: 0,   phase: 0 },
      { yBase: -0.65, speed: 1.15, width: 3.2, opacity: 0.22, noiseScale: 20, noiseFreq: 0.9,  hueShift: 10,  phase: 0.5 },
      { yBase: -0.45, speed: 1.3,  width: 3.8, opacity: 0.28, noiseScale: 18, noiseFreq: 1.0,  hueShift: 20,  phase: 1.0 },
      { yBase: -0.25, speed: 1.4,  width: 2.5, opacity: 0.20, noiseScale: 15, noiseFreq: 1.1,  hueShift: -10, phase: 1.5 },
      { yBase: -0.10, speed: 1.5,  width: 2.0, opacity: 0.15, noiseScale: 12, noiseFreq: 1.2,  hueShift: 5,   phase: 2.0 },
      // Lower streams (converge up toward center)
      { yBase: 0.85,  speed: 1.0,  width: 2.8, opacity: 0.18, noiseScale: 25, noiseFreq: 0.8,  hueShift: 0,   phase: 0.3 },
      { yBase: 0.65,  speed: 1.15, width: 3.2, opacity: 0.22, noiseScale: 20, noiseFreq: 0.9,  hueShift: 10,  phase: 0.8 },
      { yBase: 0.45,  speed: 1.3,  width: 3.8, opacity: 0.28, noiseScale: 18, noiseFreq: 1.0,  hueShift: 20,  phase: 1.3 },
      { yBase: 0.25,  speed: 1.4,  width: 2.5, opacity: 0.20, noiseScale: 15, noiseFreq: 1.1,  hueShift: -10, phase: 1.8 },
      { yBase: 0.10,  speed: 1.5,  width: 2.0, opacity: 0.15, noiseScale: 12, noiseFreq: 1.2,  hueShift: 5,   phase: 2.3 },
      // Center streams (flow straight through, most visible)
      { yBase: 0.0,   speed: 1.6,  width: 4.0, opacity: 0.32, noiseScale: 10, noiseFreq: 1.3,  hueShift: 30,  phase: 0.7 },
      { yBase: 0.05,  speed: 1.55, width: 3.5, opacity: 0.25, noiseScale: 11, noiseFreq: 1.25, hueShift: 15,  phase: 1.2 },
      { yBase: -0.05, speed: 1.55, width: 3.5, opacity: 0.25, noiseScale: 11, noiseFreq: 1.25, hueShift: -15, phase: 1.7 },
    ];

    const segments = 80; // path resolution

    for (const stream of streams) {
      const points: { x: number; y: number; pressure: number }[] = [];

      for (let i = 0; i <= segments; i++) {
        const nx = i / segments; // 0 to 1
        const x = nx * w;

        // Venturi compression: stream y converges toward center at throat
        const radius = tubeRadius(nx);
        const maxRadius = h * 0.48;
        const compression = radius / maxRadius; // 1 at edges, small at throat

        // Base y position with Venturi compression
        const baseY = cy + stream.yBase * radius;

        // Noise displacement (organic wobble)
        const noiseVal = noise(
          nx * stream.noiseFreq * 3 + stream.phase,
          t * 0.12 * stream.speed + stream.phase
        );
        const displacement = noiseVal * stream.noiseScale * compression;

        // Secondary noise for micro-detail
        const microNoise = noise(
          nx * stream.noiseFreq * 8 + stream.phase + 100,
          t * 0.2 * stream.speed + stream.phase + 50
        ) * 5 * compression;

        const y = baseY + displacement + microNoise;

        // Pressure: higher at throat (center x), used for color/width
        const distFromCenter = Math.abs(nx - 0.5) * 2; // 0 at center, 1 at edges
        const pressure = 1 - distFromCenter;

        points.push({ x, y, pressure });
      }

      // Draw the stream as a smooth path with varying width and color
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const nx = i / segments;

        // Width: thins at throat (higher speed = thinner stream, like real fluid)
        const throatFactor = tubeRadius(nx) / (h * 0.48);
        const widthMultiplier = 0.4 + 0.6 * throatFactor;
        const lineWidth = stream.width * widthMultiplier;

        // Opacity: brighter at throat
        const pressureGlow = curr.pressure * 0.4;
        const edgeFade = Math.min(nx * 5, (1 - nx) * 5, 1); // fade at edges
        const alpha = (stream.opacity + pressureGlow) * edgeFade;

        // Color: blue at edges → gold at throat
        const blueR = 42, blueG = 82, blueB = 152;
        const goldR = 201, goldG = 169, goldB = 97;
        const colorMix = Math.pow(curr.pressure, 2); // sharper transition
        const r = Math.round(blueR + (goldR - blueR) * colorMix);
        const g = Math.round(blueG + (goldG - blueG) * colorMix);
        const b = Math.round(blueB + (goldB - blueB) * colorMix);

        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);

        // Smooth curve using midpoints
        const midX = (prev.x + curr.x) / 2;
        const midY = (prev.y + curr.y) / 2;
        ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);

        ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
    }

    // --- LAYER 3: Throat glow (radial gradient at center) ---
    const throatGlowRadius = 80 + 20 * Math.sin(t * 0.3);
    const throatAlpha = 0.08 + 0.04 * Math.sin(t * 0.25);
    const throatGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, throatGlowRadius);
    throatGrad.addColorStop(0, `rgba(201,169,97,${throatAlpha})`);
    throatGrad.addColorStop(0.4, `rgba(201,169,97,${throatAlpha * 0.5})`);
    throatGrad.addColorStop(1, 'rgba(201,169,97,0)');
    ctx.fillStyle = throatGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, throatGlowRadius, 0, Math.PI * 2);
    ctx.fill();

    // --- LAYER 4: Tube boundary (very subtle, implied shape) ---
    ctx.globalCompositeOperation = 'screen';
    for (let side = -1; side <= 1; side += 2) {
      ctx.beginPath();
      for (let i = 0; i <= segments; i++) {
        const nx = i / segments;
        const x = nx * w;
        const radius = tubeRadius(nx);
        const y = cy + side * radius;
        // Subtle noise on boundary
        const boundaryNoise = noise(nx * 2 + 10, t * 0.05 + side * 5) * 3;
        if (i === 0) ctx.moveTo(x, y + boundaryNoise);
        else ctx.lineTo(x, y + boundaryNoise);
      }
      const edgeFadeGrad = ctx.createLinearGradient(0, 0, w, 0);
      edgeFadeGrad.addColorStop(0, 'rgba(201,169,97,0)');
      edgeFadeGrad.addColorStop(0.15, 'rgba(201,169,97,0.06)');
      edgeFadeGrad.addColorStop(0.5, 'rgba(201,169,97,0.12)');
      edgeFadeGrad.addColorStop(0.85, 'rgba(201,169,97,0.06)');
      edgeFadeGrad.addColorStop(1, 'rgba(201,169,97,0)');
      ctx.strokeStyle = edgeFadeGrad;
      ctx.lineWidth = 1;
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

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let lastTime = 0;
    function animate(timestamp: number) {
      if (!lastTime) lastTime = timestamp;
      const dt = (timestamp - lastTime) / 1000;
      lastTime = timestamp;

      if (prefersReducedMotion) {
        // Draw once, static
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
