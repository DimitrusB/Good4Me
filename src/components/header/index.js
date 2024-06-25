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
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Переключатель навигации"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SHOP
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">FAQ'S</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  STOCKISTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  WHOLESALE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={searchIcon} alt="search" />
            </a>
            <a className="navbar-brand" href="#">
              <img src={recycleIcon} alt="rec" />
            </a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
