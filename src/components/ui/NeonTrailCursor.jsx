import useMouseTrail from "@/hooks/useMouseTrail";

export default function NeonTrailCursor() {
  const canvasRef = useMouseTrail({
    maxTrailDist: 120, // max trail length in pixels — always this short
    trailColor: "53, 164, 185",
    headRadius: 6,
    maxLineWidth: 8,
  });

  return <canvas ref={canvasRef} className="neon-trail-canvas" />;
}
