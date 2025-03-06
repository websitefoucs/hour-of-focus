interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
  error?: string;
}

/**
 * A functional component that renders a label element.
 *
 * @param {object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the label.
 * @returns {JSX.Element} The rendered label element.
 */
export default function Label({ children, ...props }: Props) {
  return <label {...props}>{children && children}</label>;
}
