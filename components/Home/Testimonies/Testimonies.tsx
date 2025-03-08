"use client";
import ItemsScroll from "@/components/UI/ItemsScroll";
import TestimonyItem from "./TestimonyItem";
import { TTestimony } from "@/types/testimonies.type";

interface TestimoniesProps {
  testimonies: TTestimony[];
}

export default function Testimonies({ testimonies }: TestimoniesProps) {
  return (
    <div className="px-40 medium:px-20 text-center mobile:px-0 home-layout-testimonies w-full">
      <h4 className="">מה התלמידים שלנו מספרים?</h4>
      <ItemsScroll
        items={testimonies}
        renderItem={(testimony) => <TestimonyItem testimony={testimony.text} />}
      />
    </div>
  );
}
