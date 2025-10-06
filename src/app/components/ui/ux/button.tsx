import { ButtonProps } from "../../../../types/buttonProps";

export default function Button({onClick, classNameAdd, children}:ButtonProps ) {
  return (
    <button onClick={onClick} className={`mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer ${classNameAdd}`}>
      {children}
    </button>
  )
}