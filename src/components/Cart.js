import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartList, removeList, deleteThis } = useContext(CartContext);

  return (
    <>
      <p>I am a Cart 😅</p>
      <button onClick={removeList}>Delete ALL</button>
      <ul>
        {cartList.length === 0 ? (
          <p>Your Cart is Empty</p>
        ) : (
          cartList.map((item) => (
            <li key={item.idItem}>
              {" "}
              {item.nameItem} - Cantidad: {item.qtyItem}{" "}
              {/* <img src={item.image[0]} alt="" /> */}
              <button onClick={() => deleteThis(item.idItem)}>
                Delete This Product
              </button>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default Cart;
