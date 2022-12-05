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

// const ItemDetail = ({ item }) => {
//   return item && item.image ? (
//     <div>
//       <div className="item-detail">
//         <div className="item-image"></div>
//         <img src={item.image} alt="Same alt value" />
//         <h3>{item.name}</h3>
//         <p>{item.stock}</p>
//         <p>{item.cost}</p>
//       </div>
//     </div>
//   ) : (
//     <p>Cargando detalle...</p>
//   );
// };

// export default ItemDetail;
