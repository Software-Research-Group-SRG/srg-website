import { useRef, useEffect } from "react";

/**
 * useMouseTrail — drives a full-viewport <canvas> that draws
 * a tapering neon laser trail with a glowing cursor dot.
 *
 * @param {Object}  options
 * @param {number}  options.maxTrailDist – max trail length in pixels
 * @param {string}  options.trailColor  – RGB string, e.g. "53,164,185"
 * @param {number}  options.headRadius  – radius of the cursor dot
 * @param {number}  options.maxLineWidth – line width at the cursor (head)
 * @returns {React.RefObject<HTMLCanvasElement>}  attach this to a <canvas>
 */
export default function useMouseTrail({
  maxTrailDist = 120,
  trailColor = "0, 69, 245",
  headRadius = 6,
  maxLineWidth = 8,
} = {}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const trail = []; // array of {x, y} points
    let animationId;
    let mouseX = -100;
    let mouseY = -100;

    // ── Sizing ──────────────────────────────────────────
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // ── Mouse tracking ──────────────────────────────────
    let idleFrames = 0;
    let isHovering = false;
    let hoverScale = 1; // smoothly lerps toward target

    // Interactive element selectors
    const INTERACTIVE = 'a, button, input, select, textarea, [role="button"], [data-hoverable]';

    function onMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      trail.push({ x: mouseX, y: mouseY });

      // Detect if hovering an interactive element
      isHovering = !!e.target.closest(INTERACTIVE);

      // Trim trail by total pixel distance
      while (trail.length > 2) {
        let totalDist = 0;
        for (let i = 1; i < trail.length; i++) {
          const dx = trail[i].x - trail[i - 1].x;
          const dy = trail[i].y - trail[i - 1].y;
          totalDist += Math.sqrt(dx * dx + dy * dy);
        }
        if (totalDist > maxTrailDist) {
          trail.shift();
        } else {
          break;
        }
      }

      idleFrames = 0;
    }
    window.addEventListener("mousemove", onMouseMove);

    // ── Draw tapering trail segment by segment ──────────
    function drawTaperingTrail() {
      if (trail.length < 2) return;

      for (let i = 1; i < trail.length; i++) {
        const t = i / (trail.length - 1);
        const alpha = t;
        const width = maxLineWidth * t;

        const prev = trail[i - 1];
        const curr = trail[i];

        // Thin bright neon laser line with glow
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(curr.x, curr.y);
        ctx.strokeStyle = `rgba(${trailColor}, ${alpha})`;
        ctx.lineWidth = Math.max(width * 0.35, 1);
        ctx.lineCap = "round";
        ctx.shadowColor = `rgba(${trailColor}, ${alpha * 0.6})`;
        ctx.shadowBlur = 10;
        ctx.stroke();
        ctx.restore();
      }
    }

    // ── Draw the always-visible glowing cursor dot ──────
    function drawCursorDot() {
      if (mouseX < 0 && mouseY < 0) return;

      // Smooth lerp toward target scale
      const targetScale = isHovering ? 2.5 : 1;
      hoverScale += (targetScale - hoverScale) * 0.15;

      const s = hoverScale;

      // Outer glow — stays same size, just brighter on hover
      ctx.save();
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, headRadius * 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${trailColor}, ${0.1 * s})`;
      ctx.shadowColor = `rgba(${trailColor}, ${0.3 * s})`;
      ctx.shadowBlur = 25;
      ctx.fill();
      ctx.restore();

      // Mid ring — scales up on hover
      ctx.save();
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, headRadius * 1.2 * s, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${trailColor}, ${0.4 * Math.min(s, 1.2)})`;
      ctx.shadowColor = `rgba(${trailColor}, 0.5)`;
      ctx.shadowBlur = 12 * s;
      ctx.fill();
      ctx.restore();

      // Core dot — this is "the cursor", scales up clearly on hover
      ctx.save();
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, headRadius * 0.6 * s, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${trailColor}, 1)`;
      ctx.shadowColor = `rgba(${trailColor}, 0.9)`;
      ctx.shadowBlur = 8 * s;
      ctx.fill();
      ctx.restore();
    }

    // ── Draw loop ───────────────────────────────────────
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // When the mouse stops, drain the trail quickly
      idleFrames++;
      if (idleFrames > 1 && trail.length > 0) {
        trail.splice(0, 3); // remove 3 points at once for fast fade
      }

      drawTaperingTrail();
      drawCursorDot(); // always visible, even when idle

      animationId = window.requestAnimationFrame(draw);
    }
    animationId = window.requestAnimationFrame(draw);

    // ── Cleanup ─────────────────────────────────────────
    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [maxTrailDist, trailColor, headRadius, maxLineWidth]);

  return canvasRef;
}
