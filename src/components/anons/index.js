import { imagesAnons } from "../const";
import * as S from "./style";

export const AnonsMain = () => {
  return (
    <>
      <S.mainDiv>
        <S.prodText>#GOOD4ME</S.prodText>
        <S.imgDiv>
            {imagesAnons.map((el, index)=>
            <div key={index}>
                <img src={el} alt=""/>
            </div>
            )}
        </S.imgDiv>
      </S.mainDiv>
    </>
  );
};
