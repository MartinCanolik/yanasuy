import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useLocation } from "react-router-dom";
import { merloImg, homeImg } from "../../assets/Assets";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

const CarouselCustom = () => {
	const location = useLocation();
	const [images, setImages] = useState([]);

	const imgToRender = () => {
		if (location.pathname === "/merlo") {
			setImages(merloImg);
		} else {
			setImages(homeImg);
		}
	};

	useEffect(() => {
		imgToRender();
	}, [location.pathname]);

	const condition = location.pathname === "/" || location.pathname === "/merlo";

	return (
		<div>
			{condition && (
				<Carousel
					// autoPlay={true}
					showThumbs={false}
					showIndicators={true}
					infiniteLoop={true}
					showStatus={false}>
					<video autoPlay loop muted>
						<source
							src={
								"https://res.cloudinary.com/drhj3sc2o/video/upload/v1683389515/V%C3%ADdeo_sin_t%C3%ADtulo_Hecho_con_Clipchamp_ahqgr4.mp4"
							}
							type='video/mp4'
						/>
					</video>
					{images &&
						images.map((el, idx) => {
							return (
								<div key={idx}>
									<img
										className='object-cover h-[40vh] lg:h-[60vh]'
										src={el}
										alt={"el"}
									/>
								</div>
							);
						})}
				</Carousel>
			)}
		</div>
	);
};

export default CarouselCustom;
