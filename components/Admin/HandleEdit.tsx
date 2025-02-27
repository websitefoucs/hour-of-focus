import Form, { FormProps } from "next/form";
import Input from "../UI/Input";
import Button from "../UI/Button";

interface HandleEditProps extends FormProps {
  itemId: string;
  itemType: "faq" | "";
  btnText: string;
}
export default function HandleEdit({
  itemId,
  itemType,
  btnText,
  ...props
}: HandleEditProps) {
  return (
    <Form {...props}>
      <Input name="id" hidden className="hidden" defaultValue={itemId} />
      <Input name="type" hidden className="hidden" defaultValue={itemType} />
      <Button type="submit">{btnText}</Button>
    </Form>
  );
}
