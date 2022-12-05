import { Link } from "react-router-dom";

const Item = ({ id, name, stock, cost, pictureUrl }) => {
  return (
    <div>
      <div>
        <img src={pictureUrl} alt="Same alt value" />
      </div>
      <h3>Nombre Producto: {name}</h3>
      <p>Cantidad: {stock}</p>
      <p>Precio: ${cost}</p>
      <Link to={`/item/${id}`}>Detalles</Link>
    </div>
  );
};

export default Item;
