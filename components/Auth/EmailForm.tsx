"use client";

import { TAuthDto } from "@/types/auth.type";
import Input from "../UI/Input";
import Label from "../UI/Label";
import Button from "../UI/Button";
import Loader from "../UI/Loader";
import { signIn, signUp } from "@/lib/actions/auth";
import { useActionState } from "react";
import { TFormState } from "@/types/app.type";

interface Props {
  isSignUp: boolean;
  headerText: string;
}

const initialState: TFormState<TAuthDto> = {
  errors: null,
  message: "",
  data: {
    email: "",
    username: "",
    password: "",
  },
};

export default function EmailForm({ isSignUp, headerText }: Props) {
  const [state, formAction, isPending] = useActionState(
    isSignUp ? signUp : signIn,
    initialState
  );

  const inputs = isSignUp ? SIGN_UP_INPUTS : LOGIN_INPUTS;
  const { data } = state;

  return (
    <fieldset disabled={isPending}>
      <legend className="sr-only">{headerText} form fields</legend>
      <form
        action={formAction}
        className="flex flex-col gap-2 transition-all duration-300 h-fit"
        aria-label={`${headerText} form`}
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
          {isPending ? <Loader /> : headerText}
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

const SIGN_UP_INPUTS = [
  ...LOGIN_INPUTS,
  {
    type: "password",
    placeholder: "אימות סיסמה",
    name: "password-confirm",
    autoComplete: "confirm-password",
  },
  {
    type: "text",
    placeholder: "שם משתמש",
    name: "username",
    autoComplete: "username",
  },
];
