const ItemDetail = ({ item }) => {
  return item && item.image ? (
    <div>
      <div className="item-detail">
        <div className="item-image"></div>
        <img src={item.image} alt="Same alt value" />
        <h3>{item.name}</h3>
        <p>{item.stock}</p>
        <p>{item.cost}</p>
      </div>
    </div>
  ) : (
    <p>Cargando detalle...</p>
  );
};

export default ItemDetail;
