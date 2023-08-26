import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  paddingTop?: "s" | "m" | "l";
  maxWidth?: "s" | "m" | "l";
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  paddingTop = "m",
  maxWidth = "l",
  className = "",
  primary = false,
  secondary = false,
  reverse = false,
}) => {
  // Define padding top classes based on prop
  let paddingTopClass = "";
  if (paddingTop === "s") {
    paddingTopClass = "px-1 py-2";
  } else if (paddingTop === "m") {
    paddingTopClass = "px-1 py-4";
  } else if (paddingTop === "l") {
    paddingTopClass = "px-1 py-6";
  }

  // Define max width classes based on prop
  let maxWidthClass = "";
  if (maxWidth === "s") {
    maxWidthClass = "max-w-2xl";
  } else if (maxWidth === "m") {
    maxWidthClass = "max-w-4xl";
  } else if (maxWidth === "l") {
    maxWidthClass = "";
  }

  if (primary) {
    paddingTopClass += " bg-primary text-primary-content";
  }

  if (secondary) {
    paddingTopClass += " bg-secondary text-secondary-content";
  }
  if (reverse) {
    paddingTopClass += " flex-row-reverse";
  }

  // Combine all classes
  const combinedClasses = ` ${className} ${paddingTopClass} `;

  return (
    <section className={combinedClasses}>
      <div
        className={`mx-auto container lg:justify-center  flex flex-col  ${maxWidthClass}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
