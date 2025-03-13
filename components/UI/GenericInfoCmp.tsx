interface GenericInfoCmpProps extends React.HTMLAttributes<HTMLDivElement> {
  info: React.ReactNode;
  image: React.ReactNode;
}

export default function GenericInfoCmp({
  info,
  image,
  ...props
}: GenericInfoCmpProps) {
  const style = `sm:px-sides-sm px-sides items-center xl:items-start grid grid-cols-1 xl:grid-cols-[60%_35%] w-full gap-10 ${props.className}`;
  return (
    <div {...props} className={style}>
      {info}

      <div className="image-border  before:bg-mainGold-500 after:bg-mainGold-500 relative max-h-96 md:max-w-[40rem] xl:max-h-full xl:max-w-full w-full h-full place-self-center">
        {image}
      </div>
    </div>
  );
}
