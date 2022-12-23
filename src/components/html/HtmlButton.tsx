import React from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
  children: string; // to add omit
} & Omit<React.ComponentProps<"button">, "children">;

const HtmlButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <div>
      <button className={`btn-${variant}`} {...rest}>
        {children}
      </button>
    </div>
  );
};

export default HtmlButton;
