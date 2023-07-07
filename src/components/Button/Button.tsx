import { ButtonModel } from "@/Models";

export const Button = (props: ButtonModel) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.ControllerButton.text}</button>
    </div>
  );
}