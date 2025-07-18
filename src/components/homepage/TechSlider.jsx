import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./styles/techslider.css";

const TechSlider = ({ title, items }) => {
	return (
		<div className="tech-slider-container">
			<h2 className="tech-slider-title">{title}</h2>
			<Swiper
				modules={[Navigation]}
				spaceBetween={20}
				slidesPerView={"auto"}
				navigation
				className="tech-swiper"
			>
				{items.map((item, idx) => (
					<SwiperSlide key={idx} className="tech-slide">
						{item}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default TechSlider;
