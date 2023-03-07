import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

const CarouselCustom = () => {
	const location = useLocation();
	const images = [
		"https://res.cloudinary.com/drhj3sc2o/image/upload/v1676404401/yanasuyVistasierra_kokuei.jpg",
		"https://res.cloudinary.com/drhj3sc2o/image/upload/v1676403664/piletayplantasCarousel_lf0g4t.jpg",
		"https://res.cloudinary.com/drhj3sc2o/image/upload/v1676404390/yanasuyVistaCabania_llle5i.jpg",
		"https://res.cloudinary.com/drhj3sc2o/image/upload/v1676404371/yanasuyVistaCabania2_kgmrfz.jpg",
	];

	return (
		<div>
			{location.pathname === "/" && (
				<Carousel
					autoPlay={true}
					showThumbs={false}
					showIndicators={true}
					infiniteLoop={true}
					showStatus={false}>
					{images &&
						images.map((el, idx) => {
							return (
								<div key={idx}>
									<img className='object-cover' src={el} alt={"el"} />
								</div>
							);
						})}
				</Carousel>
			)}
		</div>
	);
};

export default CarouselCustom;
