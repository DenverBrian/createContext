import { useContext,useState } from "react";
import { AppContext } from "../App";

export const Menu = () => {
  const { userName, setUserName } = useContext(AppContext);
  const [ newUserName, setNewUserName ] = useState("");
  return (
    <>
      <h1>This is the Menu Page of {userName}</h1>
      <input
        onChange={(event) => {
          setNewUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setUserName(newUserName);
        }}
      >
        Submit
      </button>
    </>
  );
};
