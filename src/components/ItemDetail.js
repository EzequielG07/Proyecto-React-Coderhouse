import Card from "react-bootstrap/Card";
import "../App.css";

const ItemDetail = ({ item }) => {
  return item && item.image ? (
    <Card className="img-size">
      <Card.Img variant="top" src={item.image} alt="Same alt value" />
      <Card.Body>
        <Card.Text>
          <h3>Titulo: {item.name}</h3>
          <p>Unidades en stock: {item.stock}</p>
          <p>Precio x unidad: ${item.cost}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  ) : (
    <p>Cargando detalle...</p>
  );
};

export default ItemDetail;
