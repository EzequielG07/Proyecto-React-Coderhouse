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

  const calcTotalPerItem = (idItem) => {
    let index = cartList.map((item) => item.idItem).indexOf(idItem);
    return cartList[index].priceItem * cartList[index].qtyItem;
  };

  const calcSubTotal = () => {
    let totalPerItem = cartList.map((item) => calcTotalPerItem(item.idItem));
    return totalPerItem.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };

  const calcCountryTax = () => {
    return calcSubTotal() * 0.6;
  };

  const calcTotal = () => {
    return calcSubTotal() + calcCountryTax();
  };

  const calcItemsQty = () => {
    let qtys = cartList.map((item) => item.qtyItem);
    return qtys.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeList,
        deleteThis,
        calcTotalPerItem,
        calcSubTotal,
        calcCountryTax,
        calcTotal,
        calcItemsQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
