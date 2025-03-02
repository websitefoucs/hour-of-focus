export default function ImageOverlay({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { children } = props;
  const style = `absolute inset-0 bg-imageOverlay-60`;
  return (
    <div {...props} className="relative grid-stack w-full h-full">
      {children}
      <div className={style}></div>
    </div>
  );
}
