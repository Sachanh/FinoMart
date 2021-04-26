import React from "react";
import "./wishlist.css";

import { GoToCartButton } from "../utils/addToCartButton";

import { EmptyWishlist } from "./EmptyWishlist";
import { useCart } from "../../Context/cartContext";

function ShowItemWishlist({ item }) {
  const {dispatch}=useCart()
  return (
    <>
      <div className="offer__card">
        <img src={item.image} alt={item.name} />
        <button onClick={()=>dispatch({
                type: "REMOVE_WISHLIST_ITEM",
                        payload: item
                      })} className="cart-alert"> <i className="fa fa-times"></i> </button>
        <div className="horizontal-card-desc">
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          {item.quantity > 0 ? (
                <GoToCartButton />
              ) : (
                <button
                  class="bttn bttn-primary"
                  onClick={() =>
                    {dispatch({ type: "ADD_TO_CART", payload: item }); 
                    dispatch({type:"REMOVE_WISHLIST_ITEM", payload:item}) 
                  }}
                >
                  Add To Cart</button>
              )}
        </div>
      </div>
    </>
  );
}

export function AddToWishlist() {
  const { state } = useCart();
  return (
    <>
      {state.wishlist.length === 0 ?<EmptyWishlist /> :
      <div className="wishlist">
        <h1> Your Wishlist </h1>
        {state.wishlist.length!==0 && state.wishlist.map((wishItem) => (
          <ShowItemWishlist item={wishItem} />
        ))}
      </div>
      }
    </>
  );
}
