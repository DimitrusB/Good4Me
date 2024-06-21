import { news } from "../const";
import * as S from "./style";

export const NewsComp = () => {
  return (
    <S.mainDiv>
      <S.prodText>LATEST NEWS</S.prodText>
      <S.contentDiv>
        {news.map((el, index) => (
          <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
            <S.itemDiv key={index}>
              <img src={el.img} alt="" />
              <S.textDate>{el.date}</S.textDate>
              <S.textTitle>{el.title}</S.textTitle>
              <S.textDesc>{el.description}</S.textDesc>
            </S.itemDiv>
            <S.buttonRead>Read More</S.buttonRead>
          </div>
        ))}
      </S.contentDiv>
    </S.mainDiv>
  );
};
