import Input from "../UI/Input";
import Label from "../UI/Label";
import { MinusSvg, PlusSvg } from "../UI/icons/Icons";

interface FaqItemProps {
  question: string;
  answer: string;
  _id: string;
}
export default function FaqItem({ question, answer, _id }: FaqItemProps) {
  return (
    <Input
      type="radio"
      id={_id}
      name="faq"
      hidden
      className="faq-radio"
      divStyle="w-full min-h-20 grid gap-0 transition-all duration-200 bg-white-0 shadow-[0px_4px_10px_0px_#00000026] rounded-base p-4 border-t-[0.375rem] border-mainGold-500"
    >
      <Label htmlFor={_id} className="faq-label">
        <h6 className=" text-mainGray-800">{question}</h6>
        <PlusSvg className="  plus" />
        <MinusSvg className="minus " />
        <div className={`faq-answer`}>
          <div className="overflow-hidden">
            <p className=" text-mainGray-800">{answer}</p>
          </div>
        </div>
      </Label>
    </Input>
  );
}
