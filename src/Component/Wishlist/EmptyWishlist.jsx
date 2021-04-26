import { Link } from "react-router-dom";

export function EmptyWishlist() {
  return (
    <>
      <div className="empty-msg">
        Wishlist is Empty
        <Link to="/products">
          <button className="rounded-corner">SHOP NOW</button>
        </Link>
      </div>
    </>
  );
}
