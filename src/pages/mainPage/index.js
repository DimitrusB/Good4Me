import React from "react";
import * as S from "./styled";
import { CardsMain } from "../../components/cards";
import line from "../../img/slidershow2-2-1920x960_1920x960 1.png";
import { OurProducts } from "../../components/products";
import { ReviewMain } from "../../components/review";
import { ShopAllComp } from "../../components/products/shopAll";
import { NewsComp } from "../../components/news";
import { AnonsMain } from "../../components/anons";
import { FooterComponent } from "../../components/footer";
import { carouselItem } from "../../components/const";

export const MainPage = () => {
  return (
    <React.Fragment>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          {carouselItem.map((el, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ""}`}
              data-bs-interval="2000"
              key={index}
            >
              <img src={el.img} className="d-block w-100" alt="..." />
              <S.carouselCaption>
                <S.h5Text>Good4Me</S.h5Text>
                <S.bigText>{el.title}</S.bigText>
                <S.textItem>{el.textMain}</S.textItem>
              </S.carouselCaption>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Предыдущий</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Следующий</span>
        </button>
        <S.lineImg src={line} alt="line" />
      </div>
      <S.titleMain>
        <S.titleMainText>GOOD4ME DEAL</S.titleMainText>
        <S.titleText>
          Pick your beauty products today. 50% OFF on the most popular GOOD4ME.
          Order all classNamey products today!
        </S.titleText>
      </S.titleMain>
      <CardsMain />
      <OurProducts />
      <ReviewMain />
      <ShopAllComp />
      <NewsComp />
      <AnonsMain />
      <FooterComponent />
    </React.Fragment>
  );
};
