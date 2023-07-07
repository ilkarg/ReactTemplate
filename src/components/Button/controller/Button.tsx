import React from "react";

export const ControllerButton = () => {
  const [text, setText] = React.useState("button");
  return {text, setText};
}