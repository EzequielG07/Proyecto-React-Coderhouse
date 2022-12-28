import { useEffect, useState } from "react";
import { ButtonAddToCart, CounterContainer } from "./styledComponents";
import Button from "react-bootstrap/Button";

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
      <CounterContainer>
        <Button variant="dark" onClick={decrement}>
          -
        </Button>
        {count}
        <Button variant="dark" onClick={increment}>
          +
        </Button>
        {stock && count ? (
          <ButtonAddToCart onClick={() => onAdd(count)}>
            Add To CART
          </ButtonAddToCart>
        ) : (
          <ButtonAddToCart disabled>Add To CART</ButtonAddToCart>
        )}
        {/* <ButtonAddToCart onClick={() => onAdd(count)}>
          Add To CART
        </ButtonAddToCart> */}
      </CounterContainer>
    </>
  );
};

export default ItemCount;
