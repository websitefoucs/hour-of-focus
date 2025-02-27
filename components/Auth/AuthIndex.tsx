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
    ? { headerText: "Sign-Up", linkText: "Already have an account?" }
    : { headerText: "Sign-In", linkText: "Don't have an account?" };

  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="p-4 rounded-lg shadow-border w-full max-w-sm min-w-xs self-center flex flex-col gap-4">
        <header>
          <h1 className="text-2xl font-bold pb-2">{authFormText.headerText}</h1>
          <p className="text-gray-400 text-sm">
            Enter your email below to {authFormText.headerText}
          </p>
        </header>

        <EmailForm headerText={authFormText.headerText} isSignUp={!!isSignUp} />

        <div className="flex justify-center items-center gap-1 text-sm">
          <p>{authFormText.linkText}</p>
          <FormDisabledLink
            isSignUp={isSignUp}
            headerText={isSignUp ? "Sign-In" : "Sign-Up"}
          />
        </div>
      </div>
    </section>
  );
}
