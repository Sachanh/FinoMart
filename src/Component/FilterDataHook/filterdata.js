import { data } from "../../data";
import { useCart } from "../../Context/cartContext";

export const useFilters = () => {

  const { showInventoryAll, showFastDeliveryOnly, sortBy } = useCart();

 const getSortedData = (data, sortBy) => {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW")
      return data.sort((a, b) => b.price - a.price);

    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH")
      return data.sort((a, b) => a.price - b.price);

    return data;
  };


 function getFilteredData(
    data,
    { showFastDeliveryOnly, showInventoryAll }
  ) {
    return data
      .filter(({ fastDelivery }) =>
        showFastDeliveryOnly ? fastDelivery : true
      )
      .filter(({ inStock }) => (showInventoryAll ? true : inStock));
  }

 const sortedData = getSortedData(data, sortBy);
 const filteredData = getFilteredData(sortedData, {
    showFastDeliveryOnly,
    showInventoryAll
  });

  
  return { filteredData }
}
