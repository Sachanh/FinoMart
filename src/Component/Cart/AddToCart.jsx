import { useCart } from "../../Context/cartContext";
import "./EmptyCart";
import { EmptyCart } from "./EmptyCart";


function ShowItemCart({ item }) {
  const {dispatch}=useCart();
  return (
    <>
 
      <div className="offer__card">
        <img src={item.image} alt={item.name} />
        <button onClick={()=>dispatch({
                type: "REMOVE_CART_ITEM",
                        payload: item
                      })} className="cart-alert"> <i className="fa fa-times"></i> </button>
        <div className="horizontal-card-desc">
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button> Buy Now </button>
        </div>
      </div>
    </>
  );
}

export function AddToCart() {
  const { state } = useCart();
  return (
    <>
     {state.cart.length === 0 ? <EmptyCart /> :
      <div className="cart">
        <h1> Your Cart </h1>
        {state.cart.map((cartItem) => (
          <ShowItemCart item={cartItem} />
        ))}
       
      </div>
     }
    </>
  );
}
