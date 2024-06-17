import React from "react";
import * as S from "./styled";
import searchIcon from "../../img/search.png";
import recycleIcon from "../../img/recycle.png";
import logo from "../../img/Logo.png";

export const HeadMain = () => {
  return (
    <React.Fragment>
      <S.headerTop>
        <span>
          Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*
        </span>
        <span>Sign In / Register</span>
      </S.headerTop>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Переключатель навигации"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  SHOP
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">FAQ'S</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  STOCKISTS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  WHOLESALE
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div class="container">
            <a class="navbar-brand" href="#">
              <img src={searchIcon} alt="search" />
            </a>
            <a class="navbar-brand" href="#">
              <img src={recycleIcon} alt="rec" />
            </a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
