import React from "react";

const Merlo = () => {
	return (
		<>
			<div
				className={`flex justify-center items-center bg-bn bg-no-repeat bg-fixed bg-cover w-full mt-[20vh] lg:mt-0 h-[25vh]`}>
				<div className='flex justify-center items-center rounded-xl p-3 m-auto text-white text-xl lg:text-2xl font-body bg-black/50 w-[70vw] lg:w-[50vw] '>
					<h1>Merlo</h1>
				</div>
			</div>
			<div className='flex mt-20 w-full px-5 gap-10'>
				<div className='w-1/4'>
					<img
						src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1682620837/QR-ENCUESTA-1080X1080-600x600_gkug05.jpg'
						alt='merlo qr image'
					/>
				</div>
				<div className='w-1/4'>
					<img
						src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1682620837/QR-WHATSAAP-1080X1080-600x600_dmhcsg.jpg'
						alt='merlo qr image'
					/>
				</div>
				<div className='w-1/4'>
					<img
						src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1682620837/QR-MAPA-1080X1080-600x600_1_cyj5zq.jpg'
						alt='merlo qr image'
					/>
				</div>
				<div className='w-1/4'>
					<img
						src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1682620837/QR-WEB-1080X1080-600x600_lezfmc.jpg'
						alt='merlo qr image'
					/>
				</div>
			</div>
		</>
	);
};

export default Merlo;
