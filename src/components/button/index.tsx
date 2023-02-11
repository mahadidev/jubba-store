import React from "react";

const Button = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <button
      className={`flex gap-3 items-center px-4 sm:px-7 py-2 rounded-full ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
