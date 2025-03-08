"use client";
//React
import { useActionState } from "react";
//Actions
import { signIn } from "@/lib/actions/auth";
//Types
import { TAuthDto } from "@/types/auth.type";
import { TFormState } from "@/types/app.type";
//UI
import Input from "../UI/Input";
import Label from "../UI/Label";
import Button from "../UI/Button";
import Loader from "../UI/Loader";

const initialState: TFormState<TAuthDto> = {
  errors: null,
  message: "",
  data: {
    email: "",
    username: "",
    password: "",
  },
};

export default function EmailForm() {
  const [state, formAction, isPending] = useActionState(signIn, initialState);

  const inputs = LOGIN_INPUTS;
  const { data } = state;

  return (
    <fieldset disabled={isPending}>
      <legend className="sr-only">{"טופס הרשמה"}</legend>
      <form
        action={formAction}
        className="flex flex-col gap-2 transition-all duration-300 h-fit"
        aria-label={"טופס הרשמה"}
      >
        {inputs.map((input) => (
          <Input
            key={input.name}
            {...input}
            id={input.name}
            defaultValue={data?.[input.name as keyof TAuthDto] || ""}
          >
            <Label
              className=" block font-semibold text-sm "
              htmlFor={input.name}
            >
              {input.placeholder}
            </Label>
            <Label
              className="ps-1.5 block font-semibold text-xs text-red-500"
              htmlFor={input.name}
            >
              {state.errors?.[input.name as keyof TAuthDto]}
            </Label>
          </Input>
        ))}

        <Button
          styleMode="full"
          styleSize="large"
          type="submit"
          disabled={isPending}
        >
          {isPending ? <Loader /> : "שלח"}
        </Button>
      </form>
    </fieldset>
  );
}
const LOGIN_INPUTS = [
  {
    type: "email",
    placeholder: "אימייל",
    name: "email",
    autoComplete: "email",
  },
  {
    type: "password",
    placeholder: "סיסמה",
    name: "password",
    autoComplete: "current-password",
  },
];
