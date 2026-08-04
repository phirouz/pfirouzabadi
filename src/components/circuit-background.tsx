type Point = [number, number];

const traces: Point[][] = [
  [[60, 100], [260, 100], [260, 220], [460, 220], [460, 100], [700, 100], [700, 260]],
  [[940, 90], [700, 90], [700, 300], [500, 300]],
  [[60, 420], [220, 420], [220, 520], [440, 520], [440, 420], [660, 420]],
  [[960, 470], [780, 470], [780, 580], [600, 580]],
  [[120, 660], [340, 660], [340, 730], [600, 730]],
  [[860, 660], [860, 520], [700, 520]],
  [[420, 40], [420, 160], [260, 160]],
  [[600, 560], [780, 560], [780, 400], [900, 400]],
];

const traceDurations = [7, 9, 6, 10, 8, 7.5, 9.5, 6.5];

const nodes: Point[] = Array.from(
  new Map(traces.flat().map((p) => [`${p[0]},${p[1]}`, p])).values(),
);

function toPath(points: Point[]) {
  return points.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`).join(" ");
}

export function CircuitBackground() {
  return (
    <div
      aria-hidden="true"
      data-circuit
      className="pointer-events-none absolute inset-0 overflow-hidden text-accent"
      style={{
        maskImage:
          "linear-gradient(115deg, transparent 0%, transparent 15%, black 55%, black 100%)",
        WebkitMaskImage:
          "linear-gradient(115deg, transparent 0%, transparent 15%, black 55%, black 100%)",
      }}
    >
      <svg
        viewBox="0 0 1000 800"
        preserveAspectRatio="xMaxYMid slice"
        className="absolute inset-0 h-full w-full opacity-[0.14] dark:opacity-[0.22]"
        fill="none"
      >
        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {traces.map((points, i) => (
            <path
              key={i}
              d={toPath(points)}
              strokeDasharray="6 10"
              style={{
                animation: `circuit-flow ${traceDurations[i]}s linear infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </g>
        <g fill="currentColor">
          {nodes.map(([x, y], i) => (
            <circle
              key={`${x}-${y}`}
              cx={x}
              cy={y}
              r={4}
              style={{
                animation: "circuit-pulse 3s ease-in-out infinite",
                animationDelay: `${(i % 7) * 0.3}s`,
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
