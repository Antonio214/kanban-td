import React, {
  ChangeEventHandler,
  InputHTMLAttributes,
  KeyboardEventHandler,
} from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  enterCallback: () => void;
  changeCallback: (value: string) => void;
}

function TextInput({ enterCallback, changeCallback, ...rest }: Props) {
  const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      enterCallback();
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    changeCallback(event.target.value);
  };

  return (
    <input
      onKeyUp={handleKeyUp}
      onChange={handleChange}
      type={"text"}
      {...rest}
    />
  );
}

export default TextInput;
