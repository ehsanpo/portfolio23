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
  const buttonLabel = "EPX130"; // You can update this value

  if (type === "button") {
    return (
      <button onClick={onClick} type={type} className={"btn " + className}>
        <span className="btn__content">{children ? children : ""}</span>
        <span className="btn__glitch"></span>
        <span className="btn__label">{buttonLabel}</span>
      </button>
    );
  }
  if (type === "link") {
    return (
      <Link href={to} className={"btn " + className}>
        <span className="btn__content">{children ? children : ""}</span>
        <span className="btn__glitch"></span>
        <span className="btn__label">{buttonLabel}</span>
      </Link>
    );
  }

  return null;
};

export default Button;
