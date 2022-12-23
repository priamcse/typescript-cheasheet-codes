import React, { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};
const LoggedIn = () => {
  const [isLoggedIn, setIsLogged] = useState(false);
  const [user, setUser] = useState<null | AuthUser>(null);
  //   const [user1, setUser1] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setIsLogged(true);
    setUser({ name: "Priam", email: "test@mail.com" });
  };
  const handleLogout = () => {
    setIsLogged(false);
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Log-out</button>
      <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
      <div>{JSON.stringify(user, null, 4)}</div>
      <div>{user?.email}</div>
    </div>
  );
};

export default LoggedIn;
