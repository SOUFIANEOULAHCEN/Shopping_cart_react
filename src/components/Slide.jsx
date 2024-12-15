
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default function Slide() {
  const images = [
    "https://images.unsplash.com/photo-1445205170230-053b83016050",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    "https://images.unsplash.com/photo-1485125639709-a60c3a500bf1",
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3",
  ];

  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper w-full h-full"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index} className="w-3/4 h-full">
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="rounded-lg object-cover w-full h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
