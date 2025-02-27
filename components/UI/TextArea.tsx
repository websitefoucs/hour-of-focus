interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  children?: React.ReactNode;
  divStyle?: string;
}
export default function TextArea({ children, divStyle, ...props }: Props) {
  return (
    <div className={divStyle}>
      {children && children}
      <textarea {...props} />
    </div>
  );
}
