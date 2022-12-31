import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import {
  CartContainer,
  TextEmpty,
  ButtonCartContainer,
  ButtonShop,
  ButtonDeleteAll,
  ProductItem,
  ButtonDelete,
  ImageInCart,
  BillContainer,
  Subtotal,
  Taxes,
  TotalBill,
} from "./styledComponents";
import {
  serverTimestamp,
  doc,
  setDoc,
  collection,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import { message } from "../utils/message";

const Cart = () => {
  const ctx = useContext(CartContext);

  const createOrder = () => {
    const order = {
      buyer: {
        name: "Matias Villalba",
        email: "maty92@gmail.com",
        phone: "1155554444",
      },
      date: serverTimestamp(),
      item: ctx.cartList.map((item) => ({
        id: item.idItem,
        title: item.nameItem,
        price: item.priceItem,
        qty: item.qtyItem,
      })),
      total: ctx.calcTotal(),
    };

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    createOrderInFirestore()
      .then((result) => {
        message(`Tu orden cod:${result.id} ha sido creada`);
        ctx.cartList.forEach(async (item) => {
          const itemRef = doc(db, "products", item.idItem);
          await updateDoc(itemRef, {
            stock: increment(-item.qtyItem),
          });
        });
        ctx.removeList();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <ButtonCartContainer>
        <Link to="/">
          <ButtonShop>Continue Shopping</ButtonShop>
        </Link>
        {ctx.cartList.length !== 0 ? (
          <ButtonDeleteAll onClick={ctx.removeList}>Delete ALL</ButtonDeleteAll>
        ) : (
          <div></div>
        )}
      </ButtonCartContainer>
      <CartContainer>
        {ctx.cartList.length === 0 ? (
          <TextEmpty>Your Cart is Empty...</TextEmpty>
        ) : (
          ctx.cartList.map((item) => (
            <ProductItem key={item.idItem}>
              {" "}
              <ImageInCart src={item.imageItem[0]} alt="" />
              {item.qtyItem} u. - {item.nameItem} - Costo:$
              {item.priceItem} - Total ind.: $
              {ctx.calcTotalPerItem(item.idItem)} {"  "}
              <ButtonDelete onClick={() => ctx.deleteThis(item.idItem)}>
                Delete
              </ButtonDelete>
            </ProductItem>
          ))
        )}
      </CartContainer>
      <BillContainer>
        <Subtotal>Subtotal: ${ctx.calcSubTotal()}</Subtotal>
        <Taxes>Impuesto pais 60%: ${ctx.calcCountryTax()}</Taxes>
        <TotalBill>Total: ${ctx.calcTotal()}</TotalBill>
        {ctx.cartList.length !== 0 ? (
          <ButtonShop onClick={createOrder}>Finalizar Compra</ButtonShop>
        ) : (
          <div></div>
        )}
      </BillContainer>
    </>
  );
};

export default Cart;
