import type { InputProps } from "../../@types/types";

const Input = ({ label, placeholder, ...inputProps }: InputProps) => {
  return (
    <div className="mb-6 w-full">
      <label className="block text-sm font-medium mb-2" htmlFor={label}>
        {label}
      </label>
      <input
        type="text"
        id={label}
        className="w-full border bg-gray-200 border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:shadow"
        placeholder={placeholder}
        {...inputProps}
      />
    </div>
  );
};

export default Input;
