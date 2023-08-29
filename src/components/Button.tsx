import React, { FC, MouseEvent } from "react";
import Link from "next/link";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "link";
  to?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({
  className = "",
  children,
  type = "button",
  to = "/",
  onClick,
}) => {
  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className="h-3 w-3 fill-accent "
    >
      <path
        viewBox="0 0 24 24"
        d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
      />
    </svg>
  );
  if (type === "button") {
    return (
      <button onClick={onClick} type={type} className={"btn " + className}>
        <span className="btn__content">{children ? children : ""}</span>
        {svg}
      </button>
    );
  }
  if (type === "link") {
    return (
      <Link href={to} className={"btn " + className}>
        <span className="btn__content">{children ? children : ""}</span>
        {svg}
      </Link>
    );
  }

  return null;
};

export default Button;
