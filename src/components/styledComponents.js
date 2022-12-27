import styled from "styled-components";

export const ButtonDetail = styled.button`
  font-size: 30px;
  font-weight: 500;
  color: white;
  margin-top: 50px;
  background-color: #930000;
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
`;

export const ImgConfig = styled.img`
  height: 50%;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  flex: 2;
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
  width: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: solid red 1px;
  margin-top: 80px;
  color: white;
`;

//Cart

export const ProductItem = styled.li`
  color: white;
`;

export const ButtonDelete = styled.button`
  color: white;
  background-color: #930000;
  border: none;
  border-radius: 6px;
`;
