import styled from "styled-components";

export const ButtonDetail = styled.button`
  font-size: 30px;
  font-weight: 500;
  color: white;
  margin-top: 50px;
  background-color: #023887;
  border: none;
  border-radius: 6px;
`;

export const BadgeCount = styled.p`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  background-color: grey;
  color: white;
  border-radius: 100%;
  height: 1.3rem;
  width: 1.3rem;
  margin: 10px 4px 4px 4px;
  /* border: solid white 1px; */
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* border: solid white 1px; */
`;

//ItemDetail--------------------------------------------------
export const ItemDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 100px;
  border: solid red 5px;
`;

export const ImgContainer = styled.div`
  flex: 1;
  border: solid white 1px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const ImgConfig = styled.img`
  object-fit: contain;
`;

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: solid hotpink 1px;
  text-align: center;
  padding: 50px 5px;
`;

export const ProductTitle = styled.h3`
  font-size: 3em;
  color: white;
`;

export const Description = styled.p`
  color: white;
  text-align: justify;
`;

export const Stock = styled.p`
  font-size: 1em;
  color: grey;
`;

export const Price = styled.p`
  font-size: 2em;
  color: white;
`;

//ItemCount
export const ButtonAddToCart = styled.button`
  background-color: #005612;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 20px;
  font-weight: 400;
`;

export const CounterContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: solid red 1px;
  margin-top: 80px;
  color: white;
`;

//Cart

export const CartContainer = styled.ul`
  /* border: solid hotpink 1px; */
  padding: 5px;
  width: 60%;
`;

export const TextEmpty = styled.p`
  text-align: center;
  margin: 0px auto;
  color: white;
  font-size: 50px;
  font-weight: 200;
`;

export const ProductItem = styled.li`
  color: white;
  margin: 20px 2px;
  list-style: none;
  /* border: solid red 1px; */
  font-weight: 500;
`;

export const ButtonDelete = styled.button`
  color: white;
  background-color: #930000;
  border: none;
  border-radius: 6px;
`;

export const ImageInCart = styled.img`
  height: 100px;
  margin-right: 5px;
`;

export const BillContainer = styled.div`
  border: solid white 3px;
  padding: 5px;
  margin-top: 10px;
  margin-left: 5px;
  width: 40%;
  text-align: end;
`;

export const Subtotal = styled.p`
  font-size: 15px;
  font-style: italic;
  color: white;
`;

export const Taxes = styled.p`
  font-size: 15px;
  font-style: italic;
  color: grey;
`;

export const TotalBill = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: white;
  border-top: dashed white 2px;
  padding-top: 10px;
`;

export const ButtonCartContainer = styled.div`
  /* border: dashed blue 2px; */
  width: 30%;
  display: flex;
  justify-content: space-around;
  margin: 10px;
`;

export const ButtonShop = styled.button`
  color: white;
  background-color: #023887;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  font-weight: 600;
`;

export const ButtonDeleteAll = styled.button`
  color: white;
  background-color: #cc1c32;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  font-weight: 600;
`;

//Item

export const ButtonItem = styled.button`
  background-color: #4b4453;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  font-weight: 400;
  height: 40px;
`;

export const TitleItem = styled.h3`
  color: white;
  font-size: 20px;
`;

export const TextItem = styled.p`
  color: grey;
  font-size: 15px;
`;

export const Loading = styled.p`
  text-align: center;
  margin: 0px auto;
  color: white;
  font-size: 30px;
  font-weight: 200;
`;

export const TextCommon = styled.p`
  color: white;
`;
