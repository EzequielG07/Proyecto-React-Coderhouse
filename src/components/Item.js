import { Link } from "react-router-dom";

const Item = ({ id, name, stock, cost, pictureUrl }) => {
  return (
    <div>
      <div>
        <img src={pictureUrl} alt="Same alt value" />
      </div>
      <h3>producto {name}</h3>
      <p>{stock}</p>
      <p>{cost}</p>
      <Link to={`/item/${id}`}>Detalles</Link>
    </div>
  );
};

export default Item;
