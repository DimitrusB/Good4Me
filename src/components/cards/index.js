import { cardsItem } from "../const";
import plane from "../../img/plane.svg";
import eclipse from "../../img/eclipse.svg";
import lock from "../../img/lock.svg";
import cash from "../../img/cash.svg";
import * as S from "./styled";

export const CardsMain = () => {
  return (
    <section style={{ paddingTop: "66px" }}>
      <div class="d-flex flex-row mb-3 justify-content-between gap-4">
        {cardsItem.map((item, index) => (
          <a href="#">
            <div
              class="card"
              style={{ width: "397px", height: "auto", background: "#F4F3F4", border: "1px solid #E8E8E8" }}
              key={index}
            >
              <img src={item.picture} class="card-img-top" alt="" />
            </div>
            <div class="card-body mt-3 color:black">
              <h5
                class="card-title"
                style={{
                  fontFamily: index === 0 || index - 1 ? "Work Sans" : "Jost",
                }}
              >
                {item.title}
              </h5>
            </div>
          </a>
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
    </section>
  );
};
