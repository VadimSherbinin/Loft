import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './sliderCard.scss'
import BG from '../../assets/image/sliderCard/sliderCard-bg-01.png'
import BG2 from '../../assets/image/sliderCard/sliderCard-bg-02.jpeg'
import BG3 from '../../assets/image/sliderCard/sliderCard-bg-03.jpeg'
import BG4 from '../../assets/image/sliderCard/sliderCard-bg-04.jpeg'
import BG5 from '../../assets/image/sliderCard/sliderCard-bg-05.jpeg'
import BG6 from '../../assets/image/sliderCard/sliderCard-bg-06.jpeg'


export const SliderCard = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  const sliderBottomImg = [BG, BG2, BG3, BG4, BG5, BG6]

  return (
    <div className="sliderCard-wrapper">
      <div className="sliderCard">
        <Swiper
          spaceBetween={0}
          navigation={false}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="slider-top"
        >
          {sliderBottomImg.map((slide) => {
            return (
              <SwiperSlide className="slider-top__item">
                <img src={slide} />
              </SwiperSlide>
            )
          })}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4.5}
          navigation={true}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="slider-bottom"
        >
          {sliderBottomImg.map((slide) => {
            return (
              <SwiperSlide className="slider-bottom__item">
                <img src={slide} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
