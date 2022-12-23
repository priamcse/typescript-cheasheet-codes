import React from "react";
type PersonListProps = { nameList: { fname: String; lname: String }[] };
const PersonList = (props: PersonListProps) => {
  return <div>{JSON.stringify(props.nameList, null, 4)}</div>;
};

export default PersonList;
