"use client";
//React
import { useActionState } from "react";
//UI
import Label from "../UI/Label";
import Input from "../UI/Input";
import ErrorLabel from "../UI/ErrorLabel";
import TextArea from "../UI/TextArea";
import FormSubmitButton from "../UI/FormSubmitButton";
//Actions
import { contactAction } from "@/lib/actions/contact";
//Types
import { TFormState } from "@/types/app.type";
import { TContactForm } from "@/types/contact.type";

const initialFormState: TFormState<TContactForm> = {
  errors: null,
  message: "",
  data: { senderName: "", from: "", subject: "", message: "" },
};
export default function ContactUsIndex() {
  const [state, fromAction, isPending] = useActionState(
    contactAction,
    initialFormState
  );

  const { data, message, errors } = state;

  return (
    <div
      className="flex flex-col justify-items-center grid-rows-[auto_1fr]
       gap-gaps md:gap-gaps-md px-gaps pb-gaps max-w-[60rem] w-full lg:place-self-center"
    >
      <h2 className="col-span-2 text-24">צור קשר</h2>
      <form className="grid gap-4" action={fromAction}>
        <Input
          type="text"
          name="senderName"
          id="contact-senderName"
          placeholder="שם מלא"
          defaultValue={data?.from ?? ""}
        >
          <Label htmlFor="contact-senderName">שם מלא</Label>
          <ErrorLabel htmlFor="contact-senderName" error={errors?.senderName} />
        </Input>
        <Input
          type="email"
          autoComplete="email"
          name="from"
          id="contact-from"
          placeholder="שם"
          defaultValue={data?.from ?? ""}
        >
          <Label htmlFor="contact-from">מייל לחזרה</Label>
          <ErrorLabel htmlFor="contact-from" error={errors?.from} />
        </Input>
        <Input
          type="text"
          name="subject"
          id="contact-subject"
          placeholder="נושא"
          defaultValue={data?.subject ?? ""}
        >
          <Label htmlFor="contact-subject">נושא</Label>
          <ErrorLabel htmlFor="contact-subject" error={errors?.subject} />
        </Input>
        <TextArea
          divStyle="flex flex-col gap-2 bg-inherit h-48"
          className="bg-inherit border rounded p-2 h-[calc(100%-2rem)] resize-none overflow-auto scrollbar-hidden"
          name="message"
          id="contact-message"
          defaultValue={data?.message ?? ""}
          placeholder="הודעה"
        >
          <Label htmlFor="contact-message">הודעה</Label>
          <ErrorLabel htmlFor="contact-message" error={errors?.message} />
        </TextArea>
        {message ? (
          <ErrorLabel
            className="block p-2 rounded-base border"
            error={message}
          />
        ) : null}
        <FormSubmitButton isPending={isPending} />
      </form>
    </div>
  );
}
