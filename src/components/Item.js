import { Link } from "react-router-dom";

const Item = ({ id, name, stock, cost, pictureUrl }) => {
  return (
    <div className="item-container">
      <div className="item-image"></div>
      <img src={pictureUrl} alt="Same alt value" />
      <h3>{name}</h3>
      <p>{stock}</p>
      <p>{cost}</p>
    </div>
  );
};

export default Item;
