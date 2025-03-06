interface Props {
  children: React.ReactNode;
  isOpen?: boolean;
}
export default function ModelOverlay({ children, isOpen }: Props) {
  const style = `fixed top-0 left-0 w-screen h-screen z-40 bg-black/75 flex justify-center items-center ${
    isOpen ? "block" : "hidden"
  } `;
  return <div className={style}>{children}</div>;
}
