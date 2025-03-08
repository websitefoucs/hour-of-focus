import EmailForm from "./EmailForm";

export default function AuthIndex() {
  return (
    <section className="w-full h-[calc(100vh-26rem)] flex justify-center items-center">
      <div className="p-4 rounded-base border h-[calc(100%-.5rem)] border-mainOrange-700 w-full max-w-sm min-w-xs self-center flex flex-col gap-4">
        <header>
          <h1 className="text-2xl font-bold pb-2">כניסה</h1>
        </header>

        <EmailForm />
      </div>
    </section>
  );
}
