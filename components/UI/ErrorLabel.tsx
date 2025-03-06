interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  error?: string;
}
/**
 * ErrorLabel component displays an error message inside a label element.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.error - The error message to display. If no error message is provided, nothing will be displayed.
 * @param {React.LabelHTMLAttributes<HTMLLabelElement>} props - Additional props to be spread onto the label element.
 *
 * @returns {JSX.Element} The rendered ErrorLabel component.
 */
export default function ErrorLabel({ error, ...props }: Props) {
  return (
    <label {...props}>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </label>
  );
}
