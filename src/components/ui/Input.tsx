import { forwardRef } from "react";
import type { InputProps } from "../../@types/types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, ...rest }, ref) => {
    return (
      <div className="mb-6 w-full">
        <label className="block text-sm font-medium mb-2" htmlFor={label}>
          {label}
        </label>
        <input
          id={label}
          className="w-full border bg-gray-200 border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:shadow"
          ref={ref}
          {...rest}
        />
      </div>
    );
  },
);

export default Input;
