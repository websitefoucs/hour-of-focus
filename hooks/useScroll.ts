export const useScroll = (
  ref: React.RefObject<HTMLUListElement | null> | null
): [(dir: number) => void] => {
  const onScrollBy = (dir: number) => {
    if (!ref || !ref.current) return;

    const list = ref.current;
    const itemWidth = (list.children[0] as HTMLElement)?.offsetWidth || 0;
    console.log(ref.current.scrollLeft);
    console.log(ref.current.offsetLeft);
    list.scrollBy({
      left: itemWidth * dir,
      behavior: "smooth",
    });
  };

  return [onScrollBy];
};
