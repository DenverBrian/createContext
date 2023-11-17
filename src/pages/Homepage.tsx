import { useContext } from "react";
import {AppContext} from "../App"
export const Homepage = () => {
  const { userName } = useContext(AppContext);
  return (
    <>
      <h1>This is the Homepage</h1>
      <h2>of user: {userName}</h2>
      
      <form>
        <h1>Login</h1>
        <input type="email" name="email"/>
        <input type="password" name="password"/>
        <button>Login</button>
      </form>
    </>
  );
};
