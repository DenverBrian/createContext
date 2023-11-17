import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav
        style={{
          backgroundColor: "green",
          justifyContent: "space-around",
          display: "flex",
        }}
      >
        <Link to="/">Homepage</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/About">About</Link>
      </nav>
    </>
  );
};
