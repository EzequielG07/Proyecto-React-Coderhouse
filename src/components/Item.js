import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "../App.css";

const Item = ({ id, name, stock, cost, pictureUrl }) => {
  return (
    <Col>
      <Card style={{ width: "18rem" }} bg="secondary" className="card-margin">
        <Card.Img variant="top" src={pictureUrl} alt="Same alt value" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Cantidad: {stock}</Card.Text>
          <Card.Text>Precio: ${cost}</Card.Text>
          <Button variant="dark">
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
