import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "../App.css";

const Item = ({ id, name, stock, cost, pictureUrl }) => {
  return (
    <Col>
      <Card style={{ width: "18rem" }} className="card-margin">
        <Card.Img variant="top" src={pictureUrl} alt="Same alt value" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Cantidad: {stock}</Card.Text>
          <Card.Text>Precio: ${cost}</Card.Text>
          <Button variant="primary">
            <Link to={`/item/${id}`} className="resetColor">
              Detalles
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;

// return (
//   <div>
//     <div>
//       <img src={pictureUrl} alt="Same alt value" />
//     </div>
//     <h3>Nombre Producto: {name}</h3>
//     <p>Cantidad: {stock}</p>
//     <p>Precio: ${cost}</p>
//     <Link to={`/item/${id}`}>Detalles</Link>
//   </div>
// );
