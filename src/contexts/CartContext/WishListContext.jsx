import { createContext } from "react";

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  return <WishListContext.Provider>{children}</WishListContext.Provider>;
};
