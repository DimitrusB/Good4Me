import styled from "styled-components";

export const mainDiv = styled.div`
    width: 1920px;
    display: flex;
    justify-content: center;
    gap: 30px;
`;

export const imgDiv = styled.div`
  width: 397px;
  height: 410px;
  border: 1px solid #e8e8e8;
  background: #f4f3f4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const price = styled.div`
  display: flex;
  justify-content: center;
  gap: 21px;
  padding: 0;
  margin: 0;
  & p {
    color: #f6623e;
    font-family: "Jost";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`;
export const linkA = styled.a`
  text-decoration: none;
  color: black;
  width: 397px;
`;
export const title = styled.p`
  padding-top: 21px;
  font-family: Jost;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 2px;
`;

export const prodBotton = styled.button`
  width: 254px;
  height: 56px;
  border: 2px solid #f6623e;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  text-transform: uppercase;
  margin-bottom: 85px;
  margin-top: 60px;
`;

export const prodText = styled.p`
  font-family: Jost;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 88.889% */
  padding-bottom:58px;
`;
