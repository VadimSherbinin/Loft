import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import './slider.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'
import BG from '../../assets/image/slider-bg-01.jpg'
import BG2 from '../../assets/image/slider-bg-02.jpg'

export const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={2}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: true,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="slider"
    >
      <SwiperSlide className="slider__item">
        <div className="slider__item-img">
          <img src={BG} alt="картинка" />
        </div>

        <div className="slider__item-content">
          <h2 className="slider__item-title">loft<br/> мебель</h2>
          <p className="slider__item-subtitle">Современная и удобная мебель в Анапе</p>
          <button className="slider__item-btn">СМОТРЕТЬ КАТАЛОГ</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slider__item">
        <div className="slider__item-img">
          <img src={BG2} alt="картинка" />
        </div>

        <div className="slider__item-content">
          <h2 className="slider__item-title">loft <br/> мебель</h2>
          <p className="slider__item-subtitle">Современная и удобная мебель в Анапе</p>
          <button className="slider__item-btn">СМОТРЕТЬ КАТАЛОГ</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slider__item">
        <div className="slider__item-img">
          <img src={BG} alt="картинка" />
        </div>

        <div className="slider__item-content">
          <h2 className="slider__item-title">loft <br/> мебель</h2>
          <p className="slider__item-subtitle">Современная и удобная мебель в Анапе</p>
          <button className="slider__item-btn">СМОТРЕТЬ КАТАЛОГ</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slider__item">
        <div className="slider__item-img">
          <img src={BG2} alt="картинка" />
        </div>

        <div className="slider__item-content">
          <h2 className="slider__item-title">loft<br/> мебель</h2>
          <p className="slider__item-subtitle">Современная и удобная мебель в Анапе</p>
          <button className="slider__item-btn">СМОТРЕТЬ КАТАЛОГ</button>
        </div>
      </SwiperSlide>
      


    </Swiper>
  )
}
