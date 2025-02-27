import EmailForm from "./EmailForm";

import FormDisabledLink from "../UI/FormDisabledLink";

interface AuthIndexProps {
  isSignUp?: boolean;
}
export default function AuthIndex({ isSignUp }: AuthIndexProps) {
  // const ERROR_MESSAGES = {
  //   network: "Unable to connect. Please check your internet connection.",
  //   server: "Something went wrong on our end. Please try again later.",
  //   validation: "Please check your input and try again.",
  // };

  const authFormText = isSignUp
    ? { headerText: "הרשמה", linkText: "כניסה לחשבון" }
    : { headerText: "כניסה", linkText: "פעם ראשונה?" };

  return (
    <section className="w-full h-[calc(100vh-26rem)] flex justify-center items-center">
      <div className="p-4 rounded-base border h-[calc(100%-.5rem)] border-mainOrange-700 w-full max-w-sm min-w-xs self-center flex flex-col gap-4">
        <header>
          <h1 className="text-2xl font-bold pb-2">{authFormText.headerText}</h1>
        </header>

        <EmailForm headerText={authFormText.headerText} isSignUp={!!isSignUp} />

        <div className="flex justify-center items-center gap-1 text-sm">
          <p>{authFormText.linkText}</p>
          <FormDisabledLink
            isSignUp={isSignUp}
            headerText={authFormText.headerText}
          />
        </div>
      </div>
    </section>
  );
}
