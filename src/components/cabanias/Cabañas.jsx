import React, { useEffect } from "react";
import Booking from "../booking/Booking";
import { Carousel } from "react-responsive-carousel";
import { norteImg, surImg } from "../../assets/Assets";
import { useParams } from "react-router-dom";

const Cabañas = () => {
	const { name } = useParams();
	console.log(name);

	//to find scrool y

	// window.addEventListener("scroll", function () {
	// 	console.log(this.scrollY);
	// });

	const scrollTO = () => {
		if (name === "sur") {
			window.scrollTo(0, 291);
		}
		if (name === "norte") {
			window.scrollTo(0, 1823);
		}
	};

	useEffect(() => {
		scrollTO();
	}, []);
	const geoCode = [-32.372747, -64.993022];

	return (
		<div>
			<div className=' flex justify-center items-center bg-bn bg-no-repeat bg-fixed bg-cover w-full h-[25vh]'>
				<div className='flex flex-col justify-center items-center rounded-xl p-5 m-auto text-white text-3xl font-body bg-black/50 w-[50vw] '>
					<h1>Cabaña Sur</h1>
				</div>
			</div>
			<div className='flex justify-center px-[8vw] gap-10  mt-20'>
				<div className='flex flex-col w-[75%] justify-center'>
					<Carousel
						// autoPlay={true}
						showThumbs={false}
						showIndicators={true}
						infiniteLoop={true}
						showStatus={false}>
						{surImg &&
							surImg.map((el, idx) => {
								return (
									<div key={idx}>
										<img className='object-cover' src={el} alt={"el"} />
									</div>
								);
							})}
					</Carousel>
					<div className='mb-20'>
						<div>
							<h1 className='font-bold text-2xl text-slate-700 mt-20'>
								Cabaña Sur
							</h1>
						</div>
						<hr className='border-2 border-slate-300 mt-2' />
						<p className='my-5 text-slate-500 leading-7 pt-5 font-medium'>
							“BALCÓN A LA SIERRA DE LOS COMENCHINGONES” espectacular vista
							panorámica a la sierra y al valle.
						</p>
						<div className='flex gap-20'>
							<div>
								<h2 className='text-slate-700 text-xl leading-7 pt-5 font-bold'>
									Planta Alta
								</h2>
								<ul className='text-slate-500 leading-7 pt-5 font-medium list-disc'>
									<li>Microondas.</li>
									<li>Heladera con Frezzer.</li>
									<li>Pava eléctrica.</li>
									<li>Cafetera eléctrica.</li>
									<li>Tostadora eléctrica.</li>
									<li>
										Vasija, utensilios de cocina, ollas, fuentes de horno.
									</li>
									<li>Aire acondionado frio-calor.</li>
									<li>Tv con DIRECTV y Crhromecast. WIFI.</li>
									<li>Comedor con mesa de “algarrobo con seis sillas.</li>
									<li> Sector de living con sillones para un buen descanso.</li>
								</ul>
							</div>
							<div>
								<h2 className='text-slate-700 text-xl leading-7 pt-5 font-bold'>
									Planta Baja
								</h2>
								<ul className='text-slate-500 leading-7 pt-5 font-medium list-disc'>
									<li>
										Dos habitaciones confortables amplias y luminosas con vista
										a la sierra.
									</li>
									<li>Camas matrimonial queen size con colchón de resorte </li>
									<li>Camas individuales también con colchón de resorte.</li>
									<li>Extra carro con colchón de goma espuma.</li>
									<li>Mesas de luz</li>
									<li>Placard. Mueble</li>
									<li>Extra practicuna.</li>
									<li>Caja de seguridad</li>
									<li>Baño con inodoro, bidet y ducha</li>
									<li> Secador de pelo</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='w-1/2 '>
					<Booking />
				</div>
			</div>
			<div className=' flex justify-center items-center bg-bn bg-no-repeat bg-fixed bg-cover w-full h-[25vh]'>
				<div className='flex flex-col justify-center items-center rounded-xl p-5 m-auto text-white text-3xl font-body bg-black/50 w-[50vw] '>
					<h1>Cabaña Norte</h1>
				</div>
			</div>
			<div className='flex justify-center px-[8vw] gap-10  mt-10'>
				<div className='flex flex-col w-[75%] justify-center'>
					<Carousel
						// autoPlay={true}
						showThumbs={false}
						showIndicators={true}
						infiniteLoop={true}
						showStatus={false}>
						{norteImg &&
							norteImg.map((el, idx) => {
								return (
									<div key={idx}>
										<img className='object-cover' src={el} alt={"el"} />
									</div>
								);
							})}
					</Carousel>
					<div className='mb-20'>
						<div>
							<h1 className='font-bold text-2xl text-slate-700 mt-20'>
								Cabaña Norte
							</h1>
						</div>
						<hr className='border-2 border-slate-300 mt-2' />
						<p className='my-5 text-slate-500 leading-7 pt-5 font-medium'>
							“BALCÓN CON VISTA INCREIBLE AL VALLE DEL CONLARA” con una
							espectacular vista a la sierra y al valle.
						</p>
						<div className='flex gap-20'>
							<div>
								<h2 className='text-slate-700 text-xl leading-7 pt-5 font-bold'>
									Planta Alta
								</h2>
								<ul className='text-slate-500 leading-7 pt-5 font-medium list-disc'>
									<li>Microondas.</li>
									<li>Heladera con Frezzer.</li>
									<li>Pava eléctrica.</li>
									<li>Cafetera eléctrica.</li>
									<li>Tostadora eléctrica.</li>
									<li>
										Vasija, utensilios de cocina, ollas, fuentes de horno.
									</li>
									<li>Aire acondionado frio-calor.</li>
									<li>Tv con DIRECTV y Crhromecast. WIFI.</li>
									<li>Comedor con mesa de “algarrobo con seis sillas.</li>
									<li> Sector de living con sillones para un buen descanso.</li>
								</ul>
							</div>
							<div>
								<h2 className='text-slate-700 text-xl leading-7 pt-5 font-bold'>
									Planta Baja
								</h2>
								<ul className='text-slate-500 leading-7 pt-5 font-medium list-disc'>
									<li>
										Dos habitaciones confortables amplias y luminosas con vista
										a la sierra.
									</li>
									<li>Camas matrimonial queen size con colchón de resorte </li>
									<li>Camas individuales también con colchón de resorte.</li>
									<li>Extra carro con colchón de goma espuma.</li>
									<li>Mesas de luz</li>
									<li>Placard. Mueble</li>
									<li>Extra practicuna.</li>
									<li>Caja de seguridad</li>
									<li>Baño con inodoro, bidet y ducha</li>
									<li> Secador de pelo</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='w-1/2 '>
					<Booking />
				</div>
			</div>
		</div>
	);
};

export default Cabañas;
