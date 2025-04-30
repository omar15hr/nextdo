import { ChevronDownIcon } from "./Icons";

interface SelectFieldProps {
  id: string;
  label: string;
  options: string[];
  value: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function SelectField({
  id,
  label,
  options,
  value,
  className,
  onChange,
}: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id} className="text-sm text-gray-700">
        {label}
      </label>
      <div className="relative w-full max-w-xs">
        <select
          id={id}
          className={`appearance-none w-full bg-white text-sm text-gray-700 px-4 py-2 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-0 border border-gray-300 hover:border-gray-400 transition-colors duration-200 ${className}`}
          value={value}
          onChange={onChange}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
          <ChevronDownIcon />
        </div>
      </div>
    </div>
  );
}
