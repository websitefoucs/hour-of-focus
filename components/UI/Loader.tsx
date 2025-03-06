/**
 * Loader component renders a spinning loader with a dashed border.
 *
 * @returns {JSX.Element} A div element styled to appear as a spinning loader.
 */
export default function Loader() {
  return (
    <div className="aspect-square  self-center justify-self-center h-full border-2 border-dashed rounded-full animate-spin dark:border-violet-600  "></div>
  );
}
