import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customFecth from "../utils/customFecth";
import { products } from "../utils/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [dato, setDato] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    customFecth(
      2000,
      products.find((item) => item.id === parseInt(idItem))
    )
      .then((result) => setDato(result))
      .catch((err) => console.log(err));
  }, [idItem]);

  return (
    <>
      <ItemDetail item={dato} />;
    </>
  );
};

export default ItemDetailContainer;
