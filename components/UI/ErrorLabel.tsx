interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  error?: string;
}

export default function ErrorLabel({ error, ...props }: Props) {
  return (
    <label {...props}>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </label>
  );
}
