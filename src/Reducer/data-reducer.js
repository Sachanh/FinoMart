export function dataReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload]
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case "REMOVE_WISHLIST_ITEM":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (wishlistItem) => wishlistItem.id !== action.payload.id
        )
      };

      case "REMOVE_CART_ITEM":
         return{
           ...state, 
           cart:state.cart.filter((cart)=>cart.id!==action.payload.id)
         }
     
     case "TOGGLE_INVENTORY":
        return (state = {
          ...state,
          showInventoryAll: !state.showInventoryAll
        });
      case "TOGGLE_DELIVERY":
        return (state = {
          ...state,
          showFastDeliveryOnly: !state.showFastDeliveryOnly
        });
      case "SORT_BY_PRICE":
        return {
          ...state,
          sortBy: action.payload
        };

    default:
      return { state };
  }
}
