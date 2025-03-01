export default function ImageOverlay({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { children } = props;
  return (
    <div {...props}>
      {children}
      <div className="absolute inset-0 bg-imageOverlay"></div>
    </div>
  );
}
