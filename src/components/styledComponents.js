import styled from "styled-components";

export const ButtonDetail = styled.button`
  font-size: 30px;
  color: white;
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
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
  /* border: solid white 1px; */
`;

export const ImgContainer = styled.div`
  border: solid white 1px;
  flex: 1;
  text-align: center;
`;
export const ImgConfig = styled.img`
  height: 100%;
`;
export const InfoContainer = styled.div`
  border: solid white 1px;
  text-align: center;
  padding: 50px 0px;
  flex: 1;
`;

//ItemCount
export const ButtonAddToCart = styled.button`
  background-color: #008cba;
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
  margin: 0px 120px;
`;
