import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { ButtonItem, TitleItem, TextItem, Price } from "./styledComponents";
import "../App.css";

const Item = ({ id, name, stock, cost, pictureUrl }) => {
  return (
    <Col>
      <Card
        style={{ width: "16rem", height: "35rem" }}
        bg="dark"
        className="card-margin"
      >
        <Card.Img
          variant="top"
          src={pictureUrl}
          alt="Same alt value"
          className="img-cover"
        />
        <Card.Body>
          <TitleItem>{name}</TitleItem>
          <Price>${cost}</Price>
          <TextItem>{stock} u.</TextItem>
          <ButtonItem variant="dark">
            <Link to={`/item/${id}`} className="resetColor">
              Detalles
            </Link>
          </ButtonItem>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
