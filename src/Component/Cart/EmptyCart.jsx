import { Link } from "react-router-dom";
import "./EmptyCart.css";
export function EmptyCart() {
  return (
    <>
      <div className="empty-msg">
        Cart is Empty
        <Link to="/products">
          <button className="rounded-corner">SHOP NOW</button>
        </Link>
      </div>
    </>
  );
}
