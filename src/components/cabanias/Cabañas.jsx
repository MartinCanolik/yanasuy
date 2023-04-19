import React, { useEffect } from "react";
import Booking from "../booking/Booking";
import { Carousel } from "react-responsive-carousel";
import { norteImg, surImg, piscinaImg } from "../../assets/Assets";
import { useParams, useNavigate } from "react-router-dom";

const Cabañas = () => {
	const { name } = useParams();
	const navigate = useNavigate();
	// console.log(name);

	//to find scrool y

	// window.addEventListener("scroll", function () {
	// 	console.log(this.scrollY);
	// });
	const scrollValue = {
		sur: [0, 291],
		norte: [0, 1569],
	};

	const scrollTO = () => {
		if (name) {
			const x = scrollValue[name][0];
			const y = scrollValue[name][1];

			window.scrollTo(x, y);
		}
	};

	useEffect(() => {
		scrollTO();
	}, []);

	return (
		<div>
			<div
				className={`flex 
					justify-center 
					items-center 
					bg-bn 
					bg-no-repeat 
					bg-fixed 
					bg-cover
					w-full
					h-[25vh]
				
					`}>
				<div className='flex flex-col justify-center items-center rounded-xl p-5 m-auto text-white text-3xl font-body bg-black/50 w-[50vw] '>
					<h1>Cabaña Sur</h1>
				</div>
			</div>
			<div className='flex justify-center px-[8vw] gap-10  mt-20'>
				<div className='flex flex-col w-[75%] justify-center'>
					<Carousel
						autoPlay={true}
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
			<div className=' flex justify-center items-center bg-bn bg-no-repeat bg-fixed bg-cover w-full h-[25vh]'>
				<div className='flex flex-col justify-center items-center rounded-xl p-5 m-auto text-white text-3xl font-body bg-black/50 w-[50vw] '>
					<h1>Piscina</h1>
				</div>
			</div>
			<div className='flex justify-center px-[8vw] gap-10  mt-10 mb-10'>
				<div className='w-[60%] flex flex-col justify-center'>
					<Carousel
						// autoPlay={true}
						showThumbs={false}
						showIndicators={true}
						infiniteLoop={true}
						showStatus={false}>
						{piscinaImg &&
							piscinaImg.map((el, idx) => {
								return (
									<div key={idx}>
										<img className='object-cover' src={el} alt={"el"} />
									</div>
								);
							})}
					</Carousel>
					<div>
						<h1 className='font-bold text-2xl text-slate-700 mt-20'>Piscina</h1>
					</div>
					<hr className='border-2 border-slate-300 mt-2' />
					<ul className='my-5 text-slate-500 leading-7 pt-5 font-medium list-disc'>
						<li>
							<h2 className='text-slate-700 font-bold'>PISCINA CON YACUZZI </h2>
							de 18 metros x 8 metros rodeada por almendros y molles. Con
							reposeras y lugar de descanso.
						</li>
						<li>
							<h2 className='text-slate-700 font-bold'>Quincho </h2>de 8 metros
							x 5 metros, con mesones y sillones de madera y una mesa de Ping
							Pong para que puedan divertirse en familia.
						</li>
					</ul>
					<button
						onClick={() => {
							navigate("/contacto");
						}}
						// disabled={isSubmitting}
						className=' bg-brown hover:bg-nav text-white font-bold mx-auto mt-2 py-2 px-4 rounded border-2 border-transparent focus:outline-none focus:shadow-outline hover:text-green-800 hover:border-green-800 disabled:opacity-5'>
						Mas informacion
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cabañas;
