import { Container } from "./style";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCards, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img01 from "../../assets/Nfts/bighead.svg";
import img02 from "../../assets/Nfts/bighead-1.svg";
import img03 from "../../assets/Nfts/bighead-2.svg";
import img04 from "../../assets/Nfts/bighead-3.svg";
import img05 from "../../assets/Nfts/bighead-4.svg";
import img06 from "../../assets/Nfts/bighead-5.svg";
import img07 from "../../assets/Nfts/bighead-6.svg";
import img08 from "../../assets/Nfts/bighead-7.svg";
import img09 from "../../assets/Nfts/bighead-8.svg";
import img10 from "../../assets/Nfts/bighead-9.svg";
import img11 from "../../assets/Nfts/bighead-10.svg";

export function Carousel() {
  const imagens = [
    img01,
    img02,
    img03,
    img04,
    img05,
    img06,
    img07,
    img08,
    img09,
    img10,
    img11,
  ];

  return (
    <Container>
      <Swiper
       autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        type: "fraction",
      }}
      scrollbar={{
        draggable: true,
      }}
      navigation={true}
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Pagination, Navigation, Autoplay]}
      className="mySwiper"
      >
        {imagens.map((imagem, index) => (
          <SwiperSlide className="swiper" key={index}>
            <img src={imagem} alt={`Imagem ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}