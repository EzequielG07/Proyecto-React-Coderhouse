import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import {
  ItemDetailContainer,
  ImgContainer,
  ImgConfig,
  InfoContainer,
  ProductTitle,
  Description,
  Price,
  Stock,
  ButtonDetail,
  TextCommon,
} from "./styledComponents";
import { message } from "../utils/message";

const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const { addToCart } = useContext(CartContext);

  const onAdd = (qty) => {
    message(`Has seleccionado ${qty} und.`);
    setItemCount(qty);
    addToCart(item, qty);
  };

  return item && item.image ? (
    <ItemDetailContainer>
      <ImgContainer>
        <ImgConfig src={item.image[0]} />
      </ImgContainer>
      <InfoContainer>
        <ProductTitle>{item.name}</ProductTitle>
        <Description>{item.description}</Description>
        <Stock>Stock: {item.stock} u.</Stock>
        <Price>${item.cost}</Price>
        {itemCount === 0 ? (
          <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
        ) : (
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <ButtonDetail> CheckOut </ButtonDetail>{" "}
          </Link>
        )}
      </InfoContainer>
    </ItemDetailContainer>
  ) : (
    <TextCommon>Cargando detalle...</TextCommon>
  );
};

export default ItemDetail;
