import React from "react";

type PersonProps = {
  name: {
    fname: String;
    lname: String;
  };
};

const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.fname} {props.name.lname}
    </div>
  );
};

export default Person;
