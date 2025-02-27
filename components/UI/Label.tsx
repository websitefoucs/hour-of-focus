interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
  error?: string;
}

export default function Label({ children, ...props }: Props) {
  return <label {...props}>{children && children}</label>;
}
