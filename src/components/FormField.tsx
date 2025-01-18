
import * as React from "react";

export const FormField: React.FC<FormFieldProps> = ({
  label,
  type = "text",
  id,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="self-start">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="flex shrink-0 mt-3.5 h-11 bg-white rounded-xl border border-gray-500 border-solid w-full"
        aria-label={label}
      />
    </div>
  );
};
