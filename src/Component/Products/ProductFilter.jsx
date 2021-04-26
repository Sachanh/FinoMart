import { useCart } from "../../Context/cartContext";

export default function ProductFilters() {
  const {showOnlyInStock,showFastDelivery, dispatch } = useCart();
  return (
    <>
      <fieldset>
        <legend> Filters </legend>
        <label>
          <input
            type="checkbox"
            checked={showOnlyInStock}
            onChange={() => dispatch({ type: "TOGGLE_INVENTORY" })}
          />
          In Stock
        </label>
        <label>
          <input
            type="checkbox"
            checked={showFastDelivery}
            onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
          />
          Fast Delivery Only
        </label>
      </fieldset>
    </>
  );
}
