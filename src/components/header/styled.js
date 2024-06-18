import styled from "styled-components";
import logo from "../../img/Logo.png";

export const headerTop = styled.div`
  min-width: 1920px;
  height: 60px;
  background: #f6623e;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  gap: 950px;
`;

export const headerImg = styled.img`
  background: url(${logo});
  width: 198px;
  height: 47px;
  border: none;
`;

export const headerBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
