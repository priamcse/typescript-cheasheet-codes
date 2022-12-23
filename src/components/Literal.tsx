type HorizontalPositonTypes = "left" | "center" | "right";
type VerticalPositonTypes = "top" | "center" | "bottom";

// this will loop through and create left-top left-center etc all combination
type LiteralPropsTypes = {
  position: `${HorizontalPositonTypes}-${VerticalPositonTypes}`;
};

// exclude center-center from the list
type LiteralPropsTypes2 = {
  position: Exclude<
    `${HorizontalPositonTypes}-${VerticalPositonTypes}`,
    "center-center"
  >;
};

// add center
type LiteralPropsTypes3 = {
  position:
    | Exclude<
        `${HorizontalPositonTypes}-${VerticalPositonTypes}`,
        "center-center"
      >
    | "center";
};

const Literal = ({ position }: LiteralPropsTypes) => {
  return <div>Literal</div>;
};

export default Literal;
