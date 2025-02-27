import Input from "../UI/Input";
import Label from "../UI/Label";

export default function SizeControl() {
  return (
    <ul className="size-control" role="radiogroup" aria-label="Text size">
      <li>
        <Input
          type="radio"
          name="text-size"
          id="size-A"
          hidden
          className="hidden"
          defaultChecked
        >
          <Label htmlFor="size-A">A</Label>
        </Input>
      </li>
      <li>
        <Input
          type="radio"
          name="text-size"
          id="size-AA"
          hidden
          className="hidden"
        >
          <Label htmlFor="size-AA">AA</Label>
        </Input>
      </li>
      <li>
        <Input
          type="radio"
          name="text-size"
          id="size-AAA"
          hidden
          className="hidden"
        >
          <Label htmlFor="size-AAA">AAA</Label>
        </Input>
      </li>
    </ul>
  );
}
