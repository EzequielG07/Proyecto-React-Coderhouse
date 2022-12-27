import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { ProductItem } from "./styledComponents";
import { ButtonDelete } from "./styledComponents";

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
            <ProductItem key={item.idItem}>
              {" "}
              {/* <img src={item.image[0]} alt="" /> */}
              {item.qtyItem} u. - {item.nameItem} - Costo:$
              {item.priceItem} - Total ind.: ${calcTotalPerItem(item.idItem)}
              <ButtonDelete onClick={() => deleteThis(item.idItem)}>
                Delete
              </ButtonDelete>
            </ProductItem>
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
