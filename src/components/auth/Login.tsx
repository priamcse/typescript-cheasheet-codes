import React from "react";
import { ProfileProps } from "./Profile";
type PrivateProps = {
  isLoggedIn: boolean;
  Component: React.ComponentType;
  Component2: React.ComponentType<ProfileProps>; // have to define the Component to add props
};
const Login = ({ isLoggedIn, Component, Component2 }: PrivateProps) => {
  return (
    <div>
      <Component />
      {/* with props */}
      <Component2 name="Hello" />
    </div>
  );
};

export default Login;
