import React from "react";
import image1 from "../../img/1 1.jpeg";
import * as S from "./styled";
import { CardsMain } from "../../components/cards";

export const MainPage = () => {
  return (
    <React.Fragment>
      <div id="carouselExampleFade" class="carousel slide carousel-fade">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image1} class="d-block w-100" alt="..." />
            <div class="carousel-caption  d-md-block p-absolute">
              <h5>Good4Me</h5>
              <p>Apple Cider Vinegar</p>
              <p>
                Good4Me Apple Cider Vinegar gummies are the newest addition to
                your morning health and well-being regime.{" "}
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={image1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image1} class="d-block w-100" alt="..." />
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Предыдущий</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Следующий</span>
        </button>
      </div>
      <S.titleMain>
        <S.titleMainText>GOOD4ME DEAL</S.titleMainText>
        <S.titleText>Pick your beauty products today. 50% OFF on the most popular GOOD4ME. Order all classy products today!</S.titleText>
      </S.titleMain>
      <CardsMain />
    </React.Fragment>
  );
};
