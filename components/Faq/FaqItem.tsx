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
    <>
      <div className="w-full grid  faq-item bg-white-0 shadow-[0px_4px_10px_0px_#00000026] rounded-base p-4 border-t-[0.375rem] border-mainGold-500">
        <Input
          type="checkbox"
          divStyle="w-full h-12 items-center flex justify-center "
          id={_id}
          hidden
          className="faq-checkbox w-full hidden"
          defaultChecked={false}
        >
          <Label
            htmlFor={_id}
            className="w-full faq-label flex justify-between items-center h-full  "
          >
            <h6 className=" text-mainGray-800">{question}</h6>
            <PlusSvg className=" stroke-mainGray-800 fill-mainGray-800 w-6 h-6 plus" />
            <MinusSvg className="minus stroke-mainGray-800 fill-mainGray-800 w-6 h-6" />
          </Label>
        </Input>
        <div className="faq-answer">
          <div>
            <p className=" text-mainGray-800">{answer}</p>
          </div>
        </div>
      </div>
    </>
  );
}
