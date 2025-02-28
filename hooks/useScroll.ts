export const useScroll = (
  ref: React.RefObject<HTMLUListElement | null> | null
): [(dir: number) => void] => {
  const onScrollBy = (dir: number) => {
    if (!ref || !ref.current) return;

    const list = ref.current;
    console.log(" list:", list);
    const item = list.children[0] as HTMLElement;
    const itemWidth = item?.offsetWidth || 0;
    console.log(" clientLeft:", ref.current.clientLeft)
    console.log(" offsetLeft:", ref.current.offsetLeft)
    console.log(" scrollLeft:", ref.current.scrollLeft)

    
    if (list.scrollLeft <= 0) {
      console.log(" offsetLeft:", list.clientLeft);
      list.scrollLeft = list.scrollWidth;
    }

    list.scrollBy({
      left: itemWidth * dir,
      behavior: "smooth",
    });
  };

  return [onScrollBy];
};
