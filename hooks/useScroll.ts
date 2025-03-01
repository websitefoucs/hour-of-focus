export const useScroll = (
  ref: React.RefObject<HTMLUListElement | null> | null
): [(dir: number) => void] => {
  const onScrollBy = (dir: number) => {
    if (!ref || !ref.current) return;

    const list = ref.current;
    const item = list.children[0] as HTMLElement;
    const itemWidth = item?.offsetWidth || 0;


    
    if (list.scrollLeft <= 0) {
      list.scrollLeft = list.scrollWidth;
    }

    list.scrollBy({
      left: itemWidth * dir,
      behavior: "smooth",
    });
  };

  return [onScrollBy];
};
