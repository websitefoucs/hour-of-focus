/**
 * A React component that renders a sign-out button wrapped in a form.
 * The button triggers the `signOut` action when submitted.
 *
 * @component
 * @returns {JSX.Element} The rendered sign-out button component.
 *
 * @remarks
 * - The `signOut` action is imported from `@/lib/actions/auth`.
 * - The button uses the `Button` component with specific styling props.
 * - The text on the button is in Hebrew ("התנתק"), which means "Sign Out".
 *
 * @dependencies
 * - `signOut`: A function that handles the sign-out logic.
 * - `Button`: A reusable button component with customizable styles.
 */
//Actions
import { signOut } from "@/lib/actions/auth";
//UI
import Button from "../../UI/Button";

export default function SignOutButton() {
  return (
    <form action={signOut} className="order-5">
      <Button
        styleSize="small"
        styleMode="coloredBorder"
        className="border-mainGray-600 hover:border-mainGray-800 text-mainGray-600 hover:font-bold"
        type="submit"
      >
        התנתק
      </Button>
    </form>
  );
}
