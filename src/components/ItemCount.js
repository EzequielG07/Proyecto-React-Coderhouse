import { useEffect, useState } from "react";
import {
  ButtonAddToCart,
  ButtonAddDisable,
  CounterContainer,
} from "./styledComponents";
import Button from "react-bootstrap/Button";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(initial);
  }, [initial]);

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
          <ButtonAddDisable disabled>Add To CART</ButtonAddDisable>
        )}
      </CounterContainer>
    </>
  );
};

export default ItemCount;
