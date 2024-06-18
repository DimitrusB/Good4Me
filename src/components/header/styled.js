import styled from "styled-components";
import logo from '../../img/Logo.png'

export const headerTop = styled.div`
  width: 100%;
  height: 60px;
  background: #f6623e;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px; 
`;

export const headerImg = styled.img`
  background: url(${logo});
  width: 198px;
  height: 47px;
  border:none;
`;

export const headerBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
