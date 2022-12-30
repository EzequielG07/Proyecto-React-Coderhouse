// import customFetch from "../utils/customFecth";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { products } from "../utils/products";
import ItemList from "./ItemList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { TextCommon } from "./styledComponents";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

const ItemListContainer = (props) => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  //componentDidUpdate
  useEffect(() => {
    const fetchFromFirestore = async () => {
      let q;
      if (idCategory) {
        q = query(
          collection(db, "products"),
          where("categoryId", "==", idCategory)
        );
      } else {
        //undefined
        q = query(collection(db, "products"), orderBy("categoryId"));
      }
      const querySnapshot = await getDocs(q); //se podria importarr en otra funcion
      const dataFromFirestore = querySnapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      return dataFromFirestore;
    };
    fetchFromFirestore()
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, [idCategory]);

  return (
    <Container>
      <TextCommon>{props.greeting}</TextCommon>
      <Row className="justify-content-md-center">
        <ItemList items={datos} />
      </Row>
    </Container>
  );
};

export default ItemListContainer;
