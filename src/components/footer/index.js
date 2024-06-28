import React, { useState } from "react";
import line from "../../img/slidershow2-2-1920x960_1920x960 1.png";
import * as S from "./style";
import logo from "../../img/Logo.png";
import social from "../../img/social.svg";
import pay from "../../img/pays.png";
import { Button, Modal } from "react-bootstrap";
export const FooterComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <React.Fragment>
      <S.mainFooter>
        <S.lineImg src={line} alt="" />
        <S.menuMain>
          <S.divElem>
            <img src={logo} alt="" />
            <S.textSmallP>
              Good health is important, so all of our products have been
              carefully designed to bring out the best in you.
            </S.textSmallP>
          </S.divElem>
          <S.divElemCenter>
            <S.textBig>Keep In Touch</S.textBig>
            <S.textSmallP>
              Subscribe to receive new product updates, be the first to know
              about sales, and more.
            </S.textSmallP>
            <div>
              <S.formFooter>
                <S.inputEmail
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <S.butFoot onClick={handleSubscribe}>SUBSCRIBE</S.butFoot>
              </S.formFooter>
              <Modal show={isModalOpen} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Сообщение</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Ваш почтовый адрес {email} подписан</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Закрыть
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </S.divElemCenter>
          <S.divElem>
            <S.textBig style={{ fontSize: "20px" }}>MORE INFO</S.textBig>
            <S.textSmall>
              <a href="#">Shipping & Delivery</a>
              <a href="#">Refund Policy</a>
              <a href="#">Partner Program</a>
              <a href="#">Wholesale Portal</a>
              <a href="#">You Buy, We Donate</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </S.textSmall>
          </S.divElem>
        </S.menuMain>
        <S.downFoot>
          <img src={social} alt="" />
          <p>
            © 2021, <span style={{ color: "#F6623E" }}>GOOD4ME.</span> Powered
            by Shopify
          </p>
          <img src={pay} alt="" />
        </S.downFoot>
      </S.mainFooter>
    </React.Fragment>
  );
};
