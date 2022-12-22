import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

const CarouselCustom = () => {
	const location = useLocation();
	const images = [
		"https://yanasuy.com.ar/wp-content/uploads/2019/10/jardin_valle.jpg",
		"https://yanasuy.com.ar/wp-content/uploads/2019/10/caban%CC%83as-y-pileta_norte.jpg",
		"https://yanasuy.com.ar/wp-content/uploads/2019/10/lirios_cierra.jpg",
		"https://yanasuy.com.ar/wp-content/uploads/2019/10/Pile-al-norte.jpg",
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
