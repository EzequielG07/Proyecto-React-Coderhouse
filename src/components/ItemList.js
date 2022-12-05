import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          cost={item.cost}
          pictureUrl={item.image[0]}
          stock={item.stock}
        />
      ))}
    </>
  );
};

export default ItemList;
