import { useCart } from "../../Context/cartContext";

export default function ProductsSorting() {
  const { sortBy, dispatch } = useCart();
  return (
    <>
      <fieldset>
        <legend> SortBy </legend>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() => dispatch({  type: "SORT_BY_PRICE",
            payload: "PRICE_LOW_TO_HIGH"})}
            checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
          />
          Low to High
        </label>

        <label>
          <input
            type="radio"
            name="sort"
            onChange={() => dispatch({  type: "SORT_BY_PRICE",
            payload: "PRICE_HIGH_TO_LOW" })}
            checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
          />
          High to Low
        </label>
      </fieldset>
    </>
  );
}
