import { useState } from "react";
import { ourProducts } from "../const";
import * as S from "./style";

export const OurProducts = () => {
  const [items, setItems] = useState(ourProducts.slice(0, 4));
  const [allProd, setAllProd] = useState(false)

  const handleViewAll = () => {
    setItems(ourProducts);
    setAllProd(true)
  };

  const handleViewHidden =() =>{
    setItems(ourProducts.slice(0, 4))
    setAllProd(false);
  }
  return (

    <>
      <S.prodText>OUR PRODUCTS ARE</S.prodText>
      <S.mainDiv>
        {items.map((item, index) => (
          <S.linkA href="#">
            <S.imgDiv key={index}>
              <img src={item.picture} alt="" />
            </S.imgDiv>
            <S.title>{item.title}</S.title>
            <S.price>
              <p>{item.priceNew}</p>
              <p style={{ textDecoration: "line-through", color: "#828181" }}>
                {item.priceOld}
              </p>
            </S.price>
          </S.linkA>
        ))}
      </S.mainDiv>
      <S.prodBotton onClick={!allProd ? handleViewAll : handleViewHidden}>{allProd ? "HIDE ALL PRODUCTS" : "VIEW ALL PRODUCTS"}</S.prodBotton>
    </>
  );
};
