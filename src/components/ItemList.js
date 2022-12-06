import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <>
      {items.length > 0 ? (
        items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            cost={item.cost}
            pictureUrl={item.image[0]}
            stock={item.stock}
          />
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export default ItemList;
