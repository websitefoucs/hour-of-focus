interface GenericInfoCmpProps extends React.HTMLAttributes<HTMLDivElement> {
  info: React.ReactNode;
  image: React.ReactNode;
  imgConStyle?: string;
}

export default function GenericInfoCmp({
  info,
  image,
  imgConStyle,
  ...props
}: GenericInfoCmpProps) {
  const style = `sm:px-sides-sm px-sides items-center xl:items-start grid grid-cols-1 lg:grid-cols-[60%_35%] w-full gap-10 ${props.className}`;
  const imgConStyleFinal = `image-border before:bg-mainGold-500 after:bg-mainGold-500 relative max-h-96 md:max-w-[45rem] lg:max-h-full lg:max-w-full w-full h-full place-self-center ${imgConStyle}`;
  return (
    <div {...props} className={style}>
      {info}

      <div className={imgConStyleFinal}>{image}</div>
    </div>
  );
}
