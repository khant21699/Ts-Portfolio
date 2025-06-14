import { useEffect, useState } from "react";

function Background() {
  const [grid, setGrid] = useState<{ rows: number; cols: number }>({
    rows: 0,
    cols: 0,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateGrid = () => {
      const rows = Math.ceil((window.innerHeight * 5) / 50);
      const cols = Math.ceil((window.innerWidth * 5) / 50);
      setGrid({ rows, cols });
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);
    setIsMobile(window.innerWidth < 768);
    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  const colors = ["hover:bg-secondary", "hover:bg-tertiary", "hover:bg-accent"];
  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="fixed inset-0 bg-primary overflow-hidden perspective-[1000px]">
      <div
        className="grid w-[500%] h-[500%] absolute -left-1/2 -top-1/2 transform-gpu"
        style={{
          gridTemplateRows: `repeat(${grid.rows}, 50px)`,
          gridTemplateColumns: `repeat(${grid.cols}, 50px)`,
          transform: isMobile
            ? "rotateX(45deg) rotateZ(45deg) scale(3) translate(-40%, -0%)"
            : "rotateX(45deg) rotateZ(45deg) scale(3) translate(-0%, -0%)",
          transformStyle: "preserve-3d",
        }}
      >
        {Array.from({ length: grid.rows * grid.cols }).map((_, index) => (
          <div
            key={index}
            className={`border border-gray-700/20 transition-[background-color] hover:duration-[50ms] duration-[1000ms] ${getRandomColor()}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Background;
