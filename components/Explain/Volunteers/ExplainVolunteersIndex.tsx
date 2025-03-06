import HeroCmp from "@/components/UI/HeroCmp";
import React from "react";
import ExplainVolunteersInfo from "./ExplainVolunteersInfo";
import ExplainVolunteersMiddle from "./ExplainVolunteersMiddle";
import VolunteersJoinCmp from "@/components/UI/VolunteersJoinCmp";

export default function ExplainVolunteersIndex() {
  return (
    <section className="flex flex-col gap-24 mobile:gap-12 h-fit pb-32 mobile:pb-16">
      <HeroCmp text="הסבר למתנדבים" />
      <ExplainVolunteersInfo />
      <ExplainVolunteersMiddle />
      <VolunteersJoinCmp />
    </section>
  );
}
