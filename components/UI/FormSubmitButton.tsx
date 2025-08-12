import React from "react";
import Button from "./Button";

export default function FormSubmitButton({
  isPending,
}: {
  isPending: boolean;
}) {
  return (
    <Button
      styleMode="full"
      styleSize="large"
      type="submit"
      disabled={isPending}
      className="self-center"
    >
      {isPending ? (
        <>
          <p className="pl-2 animate-bounce">טוען</p>
        </>
      ) : (
        <p>שלח</p>
      )}
    </Button>
  );
}
