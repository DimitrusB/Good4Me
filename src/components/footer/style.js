import styled from "styled-components";

export const mainFooter = styled.div`
  width: 1920px;
  background: #fff8f6;
  position: relative;
`;

export const lineImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  transform: rotateY(180deg) rotateX(180deg);
  background-size: cover;
`;

export const menuMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 191px;
`;

export const textSmall = styled.div`
  color: #454545;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 33px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 30px;
  & a {
    color: black;
    text-decoration: none;
  }
`;

export const textBig = styled.p`
  color: #000;
  font-family: Jost;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
`;
export const textSmallP = styled.p`
  width: 348px;
  color: #454545;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 33px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const divElem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 570px;
`;

export const divElemCenter = styled.div`
  display: flex;
  width: 570px;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: stretch;
`;

export const formFooter = styled.form`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;
`;

export const inputSearch = styled.input`
  background: transparent;
  border: none;
  color: #000;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  width: -webkit-fill-available;
  &::active {
    border: none;
  }
`;

export const butFoot = styled.button`
  border: none;
  background: transparent;
  color: #f6623e;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  text-transform: uppercase;
`;

export const downFoot = styled.div`
  margin-top: 21px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #000;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  justify-content: space-between;
`;
