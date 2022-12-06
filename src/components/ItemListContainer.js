import customFetch from "../utils/customFecth";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../utils/products";
import ItemList from "./ItemList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ItemListContainer = (props) => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    if (idCategory) {
      customFetch(
        2000,
        products.filter((item) => item.categoryId === idCategory)
      )
        .then((result) => setDatos(result))
        .catch((err) => console.log(err));
    } else {
      customFetch(2000, products)
        .then((result) => setDatos(result))
        .catch((err) => console.log(err));
    }
  }, [idCategory]);

  return (
    <Container>
      <p>
        <span>{props.greeting}</span>
      </p>
      <Row className="justify-content-md-center">
        <ItemList items={datos} />
      </Row>
    </Container>
  );
};

export default ItemListContainer;
