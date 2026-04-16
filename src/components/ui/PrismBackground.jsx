import { useEffect, useRef } from "react";

export default function PrismBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let W, H;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resize);
    resize();

    const colors = [
      "rgba(0,212,255,",
      "rgba(0,119,255,",
      "rgba(0,255,200,",
      "rgba(100,180,255,",
    ];

    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.5 + 0.3,
      a: Math.random(),
      da: (Math.random() - 0.5) * 0.008,
    }));

    class Shape {
      constructor() {
        this.reset(true);
      }

      reset(init) {
        this.type = Math.floor(Math.random() * 3);
        this.x = Math.random() * W;
        this.y = init ? Math.random() * H : H + 80;
        this.size = Math.random() * 60 + 20;
        this.rot = Math.random() * Math.PI * 2;
        this.drot = (Math.random() - 0.5) * 0.008;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = -(Math.random() * 0.4 + 0.1);
        this.colorIdx = Math.floor(Math.random() * colors.length);
        this.alpha = Math.random() * 0.12 + 0.03;
        this.strokeAlpha = Math.random() * 0.3 + 0.1;
      }

      getPoints() {
        const pts = [];
        const s = this.size;

        if (this.type === 0) {
          pts.push([0, -s], [s * 0.866, s * 0.5], [-s * 0.866, s * 0.5]);
        } else if (this.type === 1) {
          pts.push([0, -s], [s * 0.6, 0], [0, s], [-s * 0.6, 0]);
        } else {
          for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2;
            pts.push([Math.cos(a) * s, Math.sin(a) * s]);
          }
        }

        return pts;
      }

      draw() {
        const pts = this.getPoints();

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rot);

        ctx.beginPath();
        ctx.moveTo(pts[0][0], pts[0][1]);
        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i][0], pts[i][1]);
        }
        ctx.closePath();

        const c = colors[this.colorIdx];

        ctx.fillStyle = c + this.alpha + ")";
        ctx.fill();

        ctx.strokeStyle = c + this.strokeAlpha + ")";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rot += this.drot;

        if (this.y < -120) this.reset(false);
      }
    }

    // Floating grid lines
    class GridLine {
        constructor() { this.reset(); }
        reset() {
        this.horiz = Math.random() > 0.5;
        this.pos = Math.random();
        this.speed = (Math.random() * 0.0003 + 0.0001) * (Math.random() > 0.5 ? 1 : -1);
        this.alpha = Math.random() * 0.06 + 0.01;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        }
        draw() {
        ctx.save();
        ctx.strokeStyle = this.color + this.alpha + ')';
        ctx.lineWidth = 0.5;
        ctx.setLineDash([4, 12]);
        ctx.beginPath();
        if (this.horiz) {
            const y = this.pos * H;
            ctx.moveTo(0, y); ctx.lineTo(W, y);
        } else {
            const x = this.pos * W;
            ctx.moveTo(x, 0); ctx.lineTo(x, H);
        }
        ctx.stroke();
        ctx.restore();
        this.pos += this.speed;
        if (this.pos < 0 || this.pos > 1) this.reset();
        }
    }
    
    const shapes = Array.from({ length: 18 }, () => new Shape());
    const gridLines = Array.from({length: 12}, () => new GridLine());

    function drawBg() {
      const grad = ctx.createLinearGradient(0, 0, W, H);
      grad.addColorStop(0, "#020b18");
      grad.addColorStop(0.4, "#041223");
      grad.addColorStop(1, "#020b18");

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
    }

    function animate() {
      drawBg();

      // grid lines
      gridLines.forEach(l => l.draw());

			stars.forEach(s => {
				s.a += s.da;
				if (s.a < 0) { s.a = 0; s.da *= -1; }
				if (s.a > 1) { s.a = 1; s.da *= -1; }
				ctx.beginPath();
				ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI*2);
				const isCyan = Math.random() > 0.95;
				ctx.fillStyle = isCyan ? `rgba(0,212,255,${s.a * 0.8})` : `rgba(255,255,255,${s.a * 0.6})`;
				ctx.fill();
			});

      shapes.forEach((s) => {
        s.update();
        s.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}