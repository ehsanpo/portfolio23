import React, { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
  element: "h1" | "h2" | "h3" | "h4" | "h5";
  size?: "s" | "m" | "l" | "xl"; // Use s/m/l/xl values for size
  center?: boolean;
  padding?: "s" | "m" | "l" | "xl";
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  children,
  element = "h1",
  size = "m", // Default to medium size if not provided
  center,
  padding,
  className,
}) => {
  const sizeMapping = {
    s: "text-base",
    m: "text-xl",
    l: "text-2xl",
    xl: "text-4xl",
  };

  const sizeClass = sizeMapping[size] || "text-base";

  const paddingMapping = {
    s: "p-1",
    m: "p-2",
    l: "p-4",
    xl: "p-6",
  };

  const paddingClass = paddingMapping[padding || "s"] || "p-1";

  const headingClasses = `font-bold ${sizeClass} ${
    center ? "text-center" : ""
  } ${paddingClass} ${className}`;

  return React.createElement(element, { className: headingClasses }, children);
};

export default Header;
