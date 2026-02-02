import { forwardRef } from "react";
import type { ButtonProps } from "../../@types/types";
import { cn } from "../../utils/cn";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, size = "md", ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex justify-center items-center bg-linear-to-r  from-gradient-primary to-gradient-secondary text-white px-4 py-2 rounded hover:bg-gradient-secondary cursor-pointer transition-all mt-4",
          {
            "text-xs": size === "sm",
            "text-base": size === "md",
            "text-lg": size === "lg",
          },
        )}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

export default Button;
