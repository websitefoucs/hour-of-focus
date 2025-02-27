import { getFaqToEdit } from "@/lib/actions/faq";
import { TFaqDto } from "@/types/faq";
import { faqServerUtils } from "@/utils/server/faq.util.server";
import React from "react";
import HandleEdit from "../../HandleEdit";
import FaqEdit from "./FaqEdit";

interface FaqEditIndexProps {
  id?: string;
}
export default async function FaqEditIndex({ id }: FaqEditIndexProps) {
  let dto: TFaqDto = faqServerUtils.getEmpty();
  if (id && id !== "new") {
    dto = await getFaqToEdit(id as string);
  }
  return (
    <section className="p-2 pt-5 border rounded flex flex-col gap-2 h-96">
      <HandleEdit
        action=""
        itemId=""
        itemType=""
        btnText="סגור"
        className="p-2 shadow-border rounded w-fit mr-auto"
      />
      <FaqEdit faqToEdit={dto} />
    </section>
  );
}
