import styled from "styled-components";

export const mainDiv = styled.div`
  margin-top: 33px;
`;
export const prodText = styled.p`
  font-family: Jost;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 88.889% */
  padding-bottom: 49px;
`;

export const itemDiv = styled.div`
  width: 412px;
`;

export const textDate = styled.p`
  color: #f6623e;
  font-family: Jost;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const textTitle = styled.p`
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 44px;
`;

export const textDesc = styled.p`
  color: #828181;
  text-align: center;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
`;

export const contentDiv = styled.div`
  display: flex;
  min-width: 1920px;
  justify-content: center;
  gap: 20px;
  & img {
    padding-bottom: 18px;
  }
`;

export const buttonRead = styled.button`
  color: #fff;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;
  width: 140px;
  height: 44px;
  background: #f6623e;
`;
