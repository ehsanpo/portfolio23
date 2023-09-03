import React, { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
  element: "h1" | "h2" | "h3" | "h4" | "h5";
  size?: "s" | "m" | "l" | "lg" | "xl"; // Use s/m/l/xl values for size
  center?: boolean;
  padding?: "none" | "s" | "m" | "l" | "xl";
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  children,
  element = "h1",
  size = "m", // Default to medium size if not provided
  center,
  padding = "none",
  className,
}) => {
  const sizeMapping = {
    s: "text-base",
    m: "text-m md:text-l lg:text-xl",
    l: "text-l md:text-xl lg:text-2xl",
    lg: "text-xl md:text-2xl lg:text-3xl",
    xl: "text-2xl md:text-3xl lg:text-4xl",
  };

  const sizeClass = sizeMapping[size] || "text-base";

  const paddingMapping = {
    none: "",
    s: "p-1",
    m: "p-2",
    l: "p-4",
    xl: "p-2 md:p-4 lg:p-6 ",
  };

  const paddingClass = paddingMapping[padding || "s"] || "";

  const headingClasses = `font-bold ${sizeClass} ${
    center ? "text-center" : ""
  } ${paddingClass} ${className}`;

  return React.createElement(element, { className: headingClasses }, children);
};

export default Header;
