import "../App.css";
import { FaCartArrowDown } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const ctx = useContext(CartContext);

  return (
    <>
      <FaCartArrowDown className="icono" />
      <p className="resetTitle">Qty: {ctx.calcItemsQty()}</p>
    </>
  );
};

export default CartWidget;
