import * as S from "./style";
import lineImg from "../../img/slidershow2-2-1920x960_1920x960 1.png";
import buttPrev from "../../img/buttPrev.svg";
import buttNext from "../../img/buttNext.svg";
import reviewImg from "../../img/reviewImg.png";
import { StarIcon } from "./star";
import {useState } from "react";
import { textRev } from "../const";


export const ReviewMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);



  const StarRating = () => {
    const totalStars = 5;
    const stars = [];
    const positiveCount = textRev[currentIndex].starIconPositive;

    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <StarIcon key={i} color={i < positiveCount ? "#FFC107" : "#D8D8D8"} />
      );
    }
    return <div style={{ display: "flex", gap: "4px" }}>{stars}</div>;
  };

  const textMain = () => {
    const item = textRev[currentIndex];
    return (
      <S.realRev key={currentIndex}>
        <S.realText>{item.title}</S.realText>
        <S.realText1>{item.titleNext}</S.realText1>
        {StarRating()}
          <S.realText2>“{item.textM}”</S.realText2>
        <S.realText3>{item.author}</S.realText3>
        <S.buttRev>
          <button style={{ border: "none" }} onClick={handleButtonPrev}>
            <img src={buttPrev} alt="Previous" />
          </button>
          <button style={{ border: "none" }} onClick={handleButtonNext}>
            <img src={buttNext} alt="Next" />
          </button>
          <p>{currentIndex+1} из {textRev.length}</p>
        </S.buttRev>
      </S.realRev>
    );
  };
  

  const handleButtonPrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return prevIndex;
      } else {
        return (prevIndex - 1 + textRev.length) % textRev.length;
      }
    });
  };

  const handleButtonNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= textRev.length - 1) {
        return prevIndex;
      } else {
        return (prevIndex + 1) % textRev.length;
      }
    });
  };

  return (
    <>
      <S.mainRev>
        <img src={lineImg} alt="" />
        <img src={lineImg} alt="" />
        <S.mainRealRev>
          {textMain()}
          <img src={reviewImg} alt="" />
        </S.mainRealRev>
      </S.mainRev>
    </>
  );
};
