import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import {
  CartContainer,
  TextEmpty,
  ButtonCartContainer,
  ButtonsCart,
  ProductItem,
  ButtonDelete,
  ImageInCart,
  BillContainer,
  Subtotal,
  Taxes,
  TotalBill,
} from "./styledComponents";

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
      <ButtonCartContainer>
        <Link to="/">
          <ButtonsCart>Continue Shopping</ButtonsCart>
        </Link>
        {/* <ButtonsCart onClick={removeList}>Delete ALL</ButtonsCart> */}
        {cartList.length !== 0 ? (
          <ButtonsCart onClick={removeList}>Delete ALL</ButtonsCart>
        ) : (
          <div></div>
        )}
      </ButtonCartContainer>
      <CartContainer>
        {cartList.length === 0 ? (
          <TextEmpty>Your Cart is Empty...</TextEmpty>
        ) : (
          cartList.map((item) => (
            <ProductItem key={item.idItem}>
              {" "}
              <ImageInCart src={item.imageItem[0]} alt="" />
              {item.qtyItem} u. - {item.nameItem} - Costo:$
              {item.priceItem} - Total ind.: ${calcTotalPerItem(item.idItem)}{" "}
              {"  "}
              <ButtonDelete onClick={() => deleteThis(item.idItem)}>
                Delete
              </ButtonDelete>
            </ProductItem>
          ))
        )}
      </CartContainer>
      <BillContainer>
        <Subtotal>Subtotal: ${calcSubTotal()}</Subtotal>
        <Taxes>Impuesto pais 60%: ${calcCountryTax()}</Taxes>
        <TotalBill>Total: ${calcTotal()}</TotalBill>
      </BillContainer>
    </>
  );
};

export default Cart;
