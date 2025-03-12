"use client";
import ItemsScroll from "@/components/UI/ItemsScroll";
import TestimonyItem from "./TestimonyItem";
import { TTestimony } from "@/types/testimonies.type";

interface TestimoniesProps {
  testimonies: TTestimony[];
}

export default function Testimonies({ testimonies }: TestimoniesProps) {
  return (
    <div className="px-40 medium:px-20 mobile:px-0 text-center home-layout-testimonies w-full">
      <h4 className=" pb-2 text-24">מה התלמידים שלנו מספרים?</h4>
      <ItemsScroll
        items={testimonies}
        renderItem={(testimony) => <TestimonyItem testimony={testimony} />}
      />
    </div>
  );
}
