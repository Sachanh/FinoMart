import "./Home.css";
import { Poster } from "../Poster/Poster";

import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Poster />
      <div className="home-text">
        <h2 className="center-text">
          Welcome to the FinoMart! Your Online Shopping Mall!
        </h2>
        <Link to="/products">
          <button className="rounded-corner">Enter FinoMart </button>
        </Link>
      </div>
    </>
  );
};
