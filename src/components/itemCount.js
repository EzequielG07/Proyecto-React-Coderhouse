import { useEffect, useState } from "react";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(initial);
  }, [initial]); // si o si puse initial y es []

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > initial + 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <button onClick={increment}> + </button>
      {count}
      <button onClick={decrement}> - </button>
      <button onClick={() => onAdd(count)}>Add To CART</button>
    </>
  );
};

export default ItemCount;
