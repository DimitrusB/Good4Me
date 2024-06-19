import styled from "styled-components";

export const mainRev = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fef0e7;
  width: 1920px;
  height: 885px;
  position: relative;
  & > img:first-child {
    position: absolute;
    right: 0;
    top: 0;
    background-repeat: no-repeat;
    background-size: cover;
    transform: rotateX(180deg);
  }
  & > img:nth-child(2) {
    position: absolute;
    bottom: 0;
    right: 0;
    background-repeat: no-repeat;
    background-size: cover;
    transform: rotateY(180deg);
  }
`;

export const realRev = styled.div`
  width: 620px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;
export const realText = styled.p`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Jost;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px; /* 125% */
  letter-spacing: 4px;
  text-transform: uppercase;
`;

export const realText1 = styled.p`
  color: #f6623e;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Jost;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px; /* 83.333% */
  letter-spacing: 4px;
  text-transform: uppercase;
  padding-top: 22px;
`;

export const realText2 = styled.p`
  color: #454545;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Jost;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 44px; /* 169.231% */
  letter-spacing: 1px;
`;

export const realText3 = styled.p`
  color: var(--f-6623-e, #f6623e);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
  letter-spacing: 1px;
  margin: 0;
`;

export const mainRealRev = styled.div`
  display: flex;
  align-items: center;
  gap: 106px;
`;

export const buttRev = styled.div`
  display: flex;
  gap: 20px;
`;
