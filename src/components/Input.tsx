import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  // if want to define the handler inside
  //   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     console.log(event.target.value);
  //   };
  return (
    <input type="text" value={props.value} onChange={props.handleChange} />
  );
};

export default Input;
