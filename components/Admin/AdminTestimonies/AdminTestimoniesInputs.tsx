import ErrorLabel from "@/components/UI/ErrorLabel";
import Input from "@/components/UI/Input";
import Label from "@/components/UI/Label";
import TextArea from "@/components/UI/TextArea";
import { TValidationError } from "@/types/app.type";
import { TTestimonyDto } from "@/types/testimonies.type";

interface AdminTestimoniesInputsProps {
  errors?: TValidationError<TTestimonyDto>|null;
  data?: TTestimonyDto;
}
export default function AdminTestimoniesInputs({
  errors,
  data,
}: AdminTestimoniesInputsProps) {
    
  return (
    <>
      <Input type="hidden" name="_id" defaultValue={data?._id} />
      <Input
        type="hidden"
        name="createBy"
        defaultValue={data?.createBy}
      />
      <TextArea
        divStyle="flex flex-col gap-2 bg-inherit h-[calc(35%-1rem)]"
        className="bg-inherit border rounded p-2 h-[calc(100%-2rem)] resize-none overflow-auto scrollbar-hidden"
        name="text"
        id={`text-${data?._id}`}
        defaultValue={data?.text}
        placeholder="הקלד המלצה"
      >
        <Label htmlFor={`text-${data?._id}`}>המלצה</Label>
        <ErrorLabel
          htmlFor={`text-${data?._id}`}
          error={errors?.text}
        />
      </TextArea>
    </>
  );
}
