import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';

function Slider() {
    return (
        <div className="slider__inner">
            <Swiper
                autoplay={{
                  delay: 3000,
                  desableOnInteraction: false,
                }}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
            <SwiperSlide>
                <div className="desc">
                    <span>Under the Sea</span>
                    <h3>Jelly fish</h3>
                    <p>
                        심해 그 저편에는 말랑한 해파리들이 <br />
                        가득 있습니다! 우리 같이 여러 모습들을 구경해보아요.
                    </p>
                    <div className="btn">
                        <a href="/">자세히 보기</a>
                        <a href="/" className="black">사이트 보기</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="desc">
                    <span>Under the Sea</span>
                    <h3>Jelly fish</h3>
                    <p>
                        심해 그 저편에는 말랑한 해파리들이 <br />
                        가득 있습니다! 우리 같이 여러 모습들을 구경해보아요.
                    </p>
                    <div className="btn">
                        <a href="/">자세히 보기</a>
                        <a href="/" className="black">사이트 보기</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="desc">
                    <span>Under the Sea</span>
                    <h3>Jelly fish</h3>
                    <p>
                        심해 그 저편에는 말랑한 해파리들이 <br />
                        가득 있습니다! 우리 같이 여러 모습들을 구경해보아요.
                    </p>
                    <div className="btn">
                        <a href="/">자세히 보기</a>
                        <a href="/" className="black">사이트 보기</a>
                    </div>
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
      );
}

export default Slider