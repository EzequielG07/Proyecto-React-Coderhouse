import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartList,
    removeList,
    deleteThis,
    calcTotalPerItem,
    calcSubTotal,
    calcCountryTax,
    calcTotal,
  } = useContext(CartContext);

  return (
    <>
      <p>I am a Cart 😅</p>
      <button onClick={removeList}>Delete ALL</button>
      <Link to="/">
        <button>Continue Shopping</button>
      </Link>
      <ul>
        {cartList.length === 0 ? (
          <p>Your Cart is Empty</p>
        ) : (
          cartList.map((item) => (
            <li key={item.idItem}>
              {" "}
              {item.nameItem} - Cantidad: {item.qtyItem} - Costo:{" "}
              {item.priceItem} - Total ind.: {calcTotalPerItem(item.idItem)}
              {/* <img src={item.image[0]} alt="" /> */}
              <button onClick={() => deleteThis(item.idItem)}>
                Delete This Product
              </button>
            </li>
          ))
        )}
      </ul>
      <div>
        <p>Subtotal: {calcSubTotal()}</p>
        <p>impuesto pais 60%: {calcCountryTax()}</p>
        <p>Total: {calcTotal()}</p>
      </div>
    </>
  );
};

export default Cart;
