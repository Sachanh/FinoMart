import { createContext, useContext, useReducer } from "react";
import { dataReducer } from "../Reducer/data-reducer";

export const DataContext = createContext();

const initialState = {
  products: [],
  cart: [],
  wishlist: [],
  showInventoryAll: true,
  showFastDeliveryOnly: false,
  sortBy: null
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  return (
    <DataContext.Provider value={{ showInventoryAll:state.showInventoryAll,
    showFastDeliveryOnly: state.showFastDeliveryOnly,
    sortBy: state.sortBy, dispatch ,state}}>
      {children}
    </DataContext.Provider>
  );
};

export const useCart = () => useContext(DataContext);
