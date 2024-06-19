import * as S from "./style";
import lineImg from "../../img/slidershow2-2-1920x960_1920x960 1.png";
import buttPrev from "../../img/buttPrev.svg";
import buttNext from "../../img/buttNext.svg";

import reviewImg from "../../img/reviewImg.png";
import { StarIcon } from "./star";

export const ReviewMain = () => {

    const handleButtonPrev = ()=>{
        console.log('Pressed Preview');
    }

    const handleButtonNext = ()=>{
        console.log('Pressed Next');
    }
  return (
    <>
      <S.mainRev>
        <img src={lineImg} alt="" />
        <img src={lineImg} alt="" />
        <S.mainRealRev>
          <S.realRev>
            <S.realText>REAL REVIEWS</S.realText>
            <S.realText1>REAL RESULTS</S.realText1>
            <div>
              <StarIcon color="#FFC107" />
              <StarIcon color="#FFC107" />
              <StarIcon color="#FFC107" />
              <StarIcon color="#FFC107" />
              <StarIcon color="#D8D8D8" />
            </div>
            <S.realText2>
              “We have perfected our formulas over time, based on your feedback.
              Check out hundreds of reviews on our website.We can't wait until
              you are a part of our Good4Me Family.”
            </S.realText2>
            <S.realText3>_Chloe H.</S.realText3>
            <S.buttRev>
              <button style={{ border: "none" }} onClick={handleButtonPrev}>
                <img src={buttPrev} alt="" />
              </button>
              <button style={{ border: "none" }} onClick={handleButtonNext}>
                <img src={buttNext} alt="" />
              </button>
            </S.buttRev>
          </S.realRev>
          <img src={reviewImg} alt="" />
        </S.mainRealRev>
      </S.mainRev>
    </>
  );
};
