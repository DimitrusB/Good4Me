import { cardsItem } from "../const";
import plane from "../../img/plane.svg";
import eclipse from "../../img/eclipse.svg";
import lock from "../../img/lock.svg";
import cash from "../../img/cash.svg";
import imgGirl1 from "../../img/Rectangle17.svg"
import imgGirl2 from "../../img/Rectangle18.svg"
import imgGirl3 from "../../img/Rectangle16.svg"
import * as S from "./styled";
import uniqid from 'uniqid'

export const CardsMain = () => {

  return (
    <section style={{ paddingTop: "66px", maxWidth: "1920px" }}>
      <div class="d-flex flex-row mb-3 justify-content-between gap-4">
        {cardsItem.map((item, index) => (
          <S.linkA href="#">
            <div
              class="card"
              style={{
                width: "397px",
                height: "auto",
                background: "#F4F3F4",
                border: "1px solid #E8E8E8",
              }}
              key={uniqid()}
            >
              <img src={item.picture} class="card-img-top" alt="" />
            </div>
            <div class="card-body mt-3">
              <h5
                class="card-title"
                style={{
                  fontFamily: index === 0 || index - 1 ? "Work Sans" : "Jost",
                }}
              >
                {item.title}
              </h5>
            </div>
          </S.linkA>
        ))}
      </div>
      <S.mainDiv>
        <S.pictItems>
          <S.pict>
            <img src={plane} alt="plane" />
            <S.elipsImg src={eclipse} alt="eclipse" />
          </S.pict>
          <p className="big__text">WORLDWIDE SHIPPING</p>
          <p className="small__text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          </p>
        </S.pictItems>
        <S.pictItems>
          <S.pict>
            <img src={cash} alt="cash" />
            <S.elipsImg src={eclipse} alt="eclipse" />
          </S.pict>
          <p className="big__text">WORLDWIDE SHIPPING</p>
          <p className="small__text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          </p>
        </S.pictItems>
        <S.pictItems>
          <S.pict>
            <img src={lock} alt="lock" />
            <S.elipsImg src={eclipse} alt="eclipse" />
          </S.pict>
          <p className="big__text">WORLDWIDE SHIPPING</p>
          <p className="small__text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          </p>
        </S.pictItems>
      </S.mainDiv>
      <S.nextSection>
        <div style={{background:"#fff8f6", width:"1009px", alignItems:"center", justifyContent: "center", display:"flex" }}>
          <S.secItem>
          <S.secBigText>TAKE CONTROL OF YOUR HEALTH</S.secBigText>
          <S.secUl>
            <li>
              The Good4Me range has been formulated based on scientific &
              traditional evidence.
            </li>
            <li>
              Our vitamins are here and ready to boost your mood, immunity and
              overall well-being!
            </li>
            <li>Made in New Zealand from local and imported ingredients.</li>
          </S.secUl>
          <button>BROWSE OUR RANGE</button>
          </S.secItem>
        </div>
        <S.secGrid>
          <img src={imgGirl1} alt=""/>
          <img src={imgGirl2} alt=""/>
          <img src={imgGirl3} alt=""/>
        </S.secGrid>
      </S.nextSection>
    </section>

  );
};
