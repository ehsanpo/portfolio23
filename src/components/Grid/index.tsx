import React from "react";

interface GridProps {
  columns: number;
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ columns, children }) => {
  return (
    <div
      className={`
    grid ${columns === 4 ? "md:grid-cols-4 gap-4 sm:grid-cols-2" : ""}
    ${columns === 3 ? "md:grid-cols-3 gap-4 sm:grid-cols-2" : ""}
    `}
    >
      {children}
    </div>
  );
};

export default Grid;
