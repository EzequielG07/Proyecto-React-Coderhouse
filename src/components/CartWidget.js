import "../App.css";
import { FaCartArrowDown } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { FlexContainer, BadgeCount } from "./styledComponents";

const CartWidget = () => {
  const ctx = useContext(CartContext);

  return (
    <>
      <FlexContainer>
        <FaCartArrowDown className="icono" />
        <BadgeCount>{ctx.calcItemsQty()}</BadgeCount>
      </FlexContainer>
    </>
  );
};

export default CartWidget;
