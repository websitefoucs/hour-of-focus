interface Props {
  edit: React.ReactNode;
  children: React.ReactNode;
}

export default function layout({ children,edit }: Props) {
  return <div>{children} {edit}</div>;
}
