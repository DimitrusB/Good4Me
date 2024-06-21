
import { shopAll } from "../../const";
import * as S from "../style";

export const ShopAllComp = () => {
  return (
    <>
      <S.prodText>SHOP ALL</S.prodText>
      <S.mainDiv>
        {shopAll.map((items, index) => (
          <S.linkA href="#">
            <S.imgDiv key={index}>
              <img src={items.picture} alt="" />
            </S.imgDiv>
            <S.title>{items.title}</S.title>
            <S.price>
              <p>{items.priceNew}</p>
              <p style={{ textDecoration: "line-through", color: "#828181" }}>
                {items.priceOld}
              </p>
            </S.price>
          </S.linkA>
        ))}
      </S.mainDiv>
      <S.prodBotton>VIEW ALL PRODUCTS</S.prodBotton>
    </>
  );
};
