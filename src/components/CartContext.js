import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, qty) => {
    let found = cartList.find((product) => product.idItem === item.id);
    if (found === undefined) {
      setCartList([
        ...cartList,
        {
          idItem: item.id,
          nameItem: item.name,
          imageItem: item.image,
          priceItem: item.cost,
          qtyItem: qty,
        },
      ]);
    } else {
      found.qtyItem += qty;
      setCartList([...cartList]);
    }
  };

  const removeList = () => {
    setCartList([]);
  };

  const deleteThis = (id) => {
    const nuevoArray = cartList.filter((item) => item.idItem !== id);
    setCartList(nuevoArray);
  };

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, removeList, deleteThis }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
