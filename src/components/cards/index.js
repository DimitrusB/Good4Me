import { cardsItem } from "../const";

export const CardsMain = () => {
  return (
    <section style={{ paddingTop: "66px" }}>
      <div class="d-flex flex-row mb-3 justify-content-between">
        {cardsItem.map((item, index) => {
          <div class="card" style={{ width: "397px", height: "auto" }} key={index}>
            <img src={item.picture} class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <a href="#" class="btn btn-primary">
                Перейти куда-нибудь
              </a>
            </div>
          </div>;
        })}
      </div>
    </section>
  );
};

// export const CardsMain = () => {
//     return (
//       <section style={{ paddingTop: '66px' }}>
//         <div className="d-flex flex-row mb-3 justify-content-between">
//           {cardsItem.map((item, index) => (
//             <div className="card" style={{ width: '397px', height: 'auto' }} key={index}>
//               <img src={item.picture} className="card-img-top" alt={item.title} />
//               <div className="card-body">
//                 <h5 className="card-title">{item.title}</h5>
//                 <a href="#" className="btn btn-primary">
//                   Перейти куда-нибудь
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   };