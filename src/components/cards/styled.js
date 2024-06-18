import styled from "styled-components";

export const pict = styled.div`
  position: relative;
  display: block;
  padding-bottom: 24px;
`;

export const pictItems = styled.div`
  width: 284px;
`;

export const elipsImg = styled.img`
  position: absolute;
  top: 31px;
  right: 99px;
  z-index: -1;
`;

export const mainDiv = styled.div`
  padding-top: 138px;
  padding-bottom: 138px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const nextSection = styled.div`
  display: flex;
  padding-bottom:136px;
`;

export const secItem = styled.div`
  width: 515px;
  & button {
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    border: 2px solid #f6623e;
    width: 254px;
    height: 56px;
  }
`;
export const secGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto; /* Два ряда */

  & > img:first-child {
    grid-column: 1;
    grid-row: 1;
  }
  & > img:nth-child(2) {
    grid-column: 1;
    grid-row: 2;
    align-self: end;
  }

  & > img:nth-child(3) {
    grid-column: 2;
    grid-row: 1 / span 2;
  }
`;

export const secUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 0;
  & li {
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
  }
`;

export const secBigText = styled.p`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Jost;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 72px; /* 144% */
  letter-spacing: 3px;
`;

export const linkA = styled.a`
text-decoration: none;
color: black;
`