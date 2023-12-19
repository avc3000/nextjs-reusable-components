interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: Props) {
  return (
    <input
      {...props}
      className="block w-full mt-2 mb-2 rounded-md bg-transparent border-0 py-1.5 text-gray-400 shadow-sm p-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
    />
  );
}
