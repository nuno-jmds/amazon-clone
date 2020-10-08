import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      />
      {/**Products id, title,price,rating,image */}
      <div className="home__row">
        <Product
          id={"1"}
          title="Echo (3ª geração) - Smart Speaker com Alexa - Cor Azul"
          price={699}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/91SW6jeP3WL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id={"2"}
          title="Smart TV LG 50” Ultra HD 4K, HDR Ativo, ThinQ AI Inteligência Artificial, DTS Virtual:X - 50UM751C0SB"
          price={2249}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61qRe9cpv-L._AC_SL1200_.jpg"
        />
        <Product
          id={"3"}
          title="Relógio Smartwatch B57 Hero Band 3 - Preto"
          price={132}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51EYp9E2npL._AC_SL1200_.jpg"
        />

        <Product
          id={"4"}
          title="Óculos de Sol Ray Ban Blaze Wayfarer RB4440N 710/13-41"
          price={349}
          rating={4}
          image="https://www.maisoptica.pt/media/catalog/product/cache/182bdae5af014960d699a16778c4c041/2/5/259965.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={"5"}
          title="Teclado e Mouse Wireless Dell, KM636, Preto"
          price={179}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/61u08vM9NSL._AC_SL1500_.jpg"
        />

        <Product
          id={"6"}
          title="Mouse Gamer PRO M5 RGB Preto FORTREK, Fortrek, Mouses"
          price={69}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/316MxE8ibTL._AC_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
