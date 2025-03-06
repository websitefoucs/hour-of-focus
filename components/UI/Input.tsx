interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  divStyle?: string;
  children?: React.ReactNode;
}
/**
 * Input component that renders an input element with optional children.
 * The order of the input and children elements is determined by the `hidden` prop.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.divStyle] - The CSS class for the outer div element.
 * @param {React.ReactNode} [props.children] - The children elements to be rendered.
 * @param {boolean} [props.hidden] - If true, the input element is rendered before the children.
 * @param {string} [props.className] - Additional CSS classes for the input element.
 * @param {Object} [props.rest] - Any other props to be passed to the input element.
 *
 * @returns {JSX.Element} The rendered Input component.
 */
export default function Input({ divStyle, children, ...props }: Props) {
  const style = props.className
    ? props.className
    : ` w-full px-3 py-2 h-10
          border  
          rounded-base bg-inherit
          focus:outline-hidden focus:ring-2 
          transition-all duration-200
          disabled:opacity-50 disabled:cursor-not-allowed flex `;

  //If Hidden, then input comes first, else children comes first for custom inputs using tailwind peer
  const isHidden = props.hidden;
  return (
    <div className={divStyle}>
      {isHidden ? (
        <>
          <input {...props} className={style} />
          {children}
        </>
      ) : (
        <>
          {children}
          <input {...props} className={style} />
        </>
      )}
    </div>
  );
}
