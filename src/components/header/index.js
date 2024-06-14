import React from "react";
import * as S from "./styled";

export const HeadMain = () => {
  return (
    <React.Fragment>
      <S.headerTop>
        <p>
          Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*
        </p>
        <p>Sign In / Register</p>
      </S.headerTop>
      <S.headerBottom>
        <S.headerImg></S.headerImg>
        <div>
          <p>HOME</p>
          <p>SHOP</p>
          <p>FAQ'S</p>
          <p>STOCKISTS</p>
          <p>WHOLESALE</p>
          <p>CONTACT</p>
        </div>
        <div>
            <img src="/src/img/search.png" alt="search"/>
            <img src="/src/img/recycle.png" alt="rec"/>
        </div>
      </S.headerBottom>
    </React.Fragment>
  );
};
