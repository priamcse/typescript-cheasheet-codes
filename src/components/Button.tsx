import React from "react";

type ButtonProps = {
  //   handleClick: () => void,
  //   handleClick2: (event: React.MouseEvent<HTMLButtonElement>) => void,
  handleClick3: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

const Button = (props: ButtonProps) => {
  return (
    <div>
      {/*<button onClick={props.handleClick}></button>
      <button onClick={props.handleClick2}></button>*/}
      <button onClick={(event) => props.handleClick3(event, 1)}>Click</button>
    </div>
  );
};

export default Button;
