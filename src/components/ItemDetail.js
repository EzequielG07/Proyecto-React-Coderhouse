import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount"; /*-> PRUEBA DE ItemCount*/
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import "../App.css";

const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const { addToCart } = useContext(CartContext);

  const onAdd = (qty) => {
    alert("You have selected " + qty + " items. (PRUEBA CAMBIAR)");
    setItemCount(qty);
    addToCart(item, qty);
  };

  return item && item.image ? (
    <Card className="img-size" bg="secondary">
      <Card.Img variant="top" src={item.image} alt="Same alt value" />
      <Card.Body>
        <Card.Text>
          <h3>Titulo: {item.name}</h3>
          <p>Unidades en stock: {item.stock}</p>
          <p>Precio x unidad: ${item.cost}</p> {/*-> PRUEBA DE ItemCount*/}
          <div>
            <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <button> CheckOut </button>{" "}
            </Link>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  ) : (
    <p>Cargando detalle...</p>
  );
};

export default ItemDetail;
