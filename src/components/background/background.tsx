import { useEffect, useState, useMemo, useCallback } from "react";

function Background() {
  const [grid, setGrid] = useState<{ rows: number; cols: number }>({
    rows: 0,
    cols: 0,
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Memoize the update function to prevent recreation
  const updateGrid = useCallback(() => {
    const rows = Math.ceil((window.innerHeight * 1.5) / 70);
    const cols = Math.ceil((window.innerWidth * 1.5) / 70);
    setGrid({ rows, cols });
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    // Initial update
    updateGrid();

    // Add resize listener
    window.addEventListener("resize", updateGrid);

    // Show grid after a small delay to prevent initial lag
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      window.removeEventListener("resize", updateGrid);
      clearTimeout(timer);
    };
  }, [updateGrid]);

  // Memoize colors array
  const colors = useMemo(
    () => ["hover:bg-secondary", "hover:bg-tertiary", "hover:bg-accent"],
    []
  );

  // Memoize the grid cells with chunked rendering
  const gridCells = useMemo(() => {
    const totalCells = grid.rows * grid.cols;
    const chunkSize = 100; // Process cells in chunks
    const chunks = Math.ceil(totalCells / chunkSize);

    return Array.from({ length: chunks }).map((_, chunkIndex) => {
      const start = chunkIndex * chunkSize;
      const end = Math.min(start + chunkSize, totalCells);

      return Array.from({ length: end - start }).map((_, index) => {
        const cellIndex = start + index;
        return (
          <div
            key={cellIndex}
            className={`border border-gray-700/5 transition-[background-color] hover:duration-[50ms] duration-[1000ms] ${
              colors[Math.floor(Math.random() * colors.length)]
            }`}
          />
        );
      });
    });
  }, [grid.rows, grid.cols, colors]);

  return (
    <div className="fixed inset-0 bg-primary overflow-hidden perspective-[1000px]">
      <div
        className={`grid w-[150%] h-[150%] absolute -left-1/2 -top-1/2 transform-gpu transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          gridTemplateRows: `repeat(${grid.rows}, 70px)`,
          gridTemplateColumns: `repeat(${grid.cols}, 70px)`,
          transform: isMobile
            ? "rotateX(45deg) rotateZ(45deg) scale(2) translate(-0%, -0%)"
            : "rotateX(45deg) rotateZ(45deg) scale(2) translate(-0%, -0%)",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {gridCells}
      </div>
    </div>
  );
}

export default Background;
