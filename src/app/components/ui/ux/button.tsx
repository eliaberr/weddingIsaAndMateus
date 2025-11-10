import { ButtonProps } from "../../../../types/buttonProps";

export default function Button({
  onClick,
  classNameAdd,
  children,
  color,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`mt-4 w-full px-4 py-2  text-white rounded  transition cursor-pointer ${
        color ? color : "bg-blue-500 hover:bg-blue-600"
      } ${classNameAdd}`}
    >
      {children}
    </button>
  );
}
