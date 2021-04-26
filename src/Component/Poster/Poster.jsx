import "./Poster.css";
import { Link } from "react-router-dom";

export function Poster() {
  return (
    <div className="overlay-container">
      <div>
        <img
          src="https://images.unsplash.com/photo-1550344071-13ecada2a91d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGNsb3RoaW5nJTIwc3RvcmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="main"
          className="normal-img"
        />
      </div>
      <div>
        <div className="overlay-text">
          <div className="heading-main-text">BUMPER APRIL SALE!</div>
          <div className="center-text"> SHOP WHAT YOU LIKE!</div>
          <Link to="/products">
            <button className="rounded-corner">Shop NOW </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
