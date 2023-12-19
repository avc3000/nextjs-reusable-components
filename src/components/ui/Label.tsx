interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ children, ...props }: Props) {
  return (
    <label
      {...props}
      className="block text-sm text-green-400 font-medium leading-6"
    >
      {children}
    </label>
  );
}
