"use client";

interface Props {
  item: any[];
}
export default function InfiniteScroll( { item }: Props ) {
  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full bg-gray-900 py-4">
      <div className="animate-scroll flex w-max">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex gap-8">
            {["🍕", "🍔", "🌮", "🍩", "🍣", "🥑", "🍉", "🥕"].map((item, i) => (
              <div
                key={i}
                className="text-5xl text-white bg-blue-600 px-6 py-3 rounded-lg shadow-lg"
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
