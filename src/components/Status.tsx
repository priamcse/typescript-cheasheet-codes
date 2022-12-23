import React from "react";

type StatusProps = {
  status: string;
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading";
  } else if (props.status === "success") {
  }
  return (
    <div>
      <h2>Loading...</h2>
      <h2>Data fetched</h2>
      <h2>Error fetching data</h2>
    </div>
  );
};

export default Status;
