import styled from "styled-components";

export const mainDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
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
