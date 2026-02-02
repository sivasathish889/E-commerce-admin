import type { ButtonProps } from "../../@types/types";
import { cn } from "../../utils/cn";

const Button = ({ size, children, className = "" }: ButtonProps) => {
  return (
    <button
      className={cn(
        "flex justify-center items-center bg-linear-to-r  from-gradient-primary to-gradient-secondary text-white px-4 py-2 rounded hover:bg-gradient-secondary cursor-pointer transition-all mt-4",
        className,
        {
          "text-xs": size === "sm",
          "text-base": size === "md",
          "text-lg": size === "lg",
        },
      )}
    >
      {children}
    </button>
  );
};

export default Button;
