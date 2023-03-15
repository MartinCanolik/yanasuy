import React from "react";
import Booking from "../booking/Booking";
import { Carousel } from "react-responsive-carousel";
import { norteImg, surImg } from "../../assets/Assets";

const Cabañas = () => {
	return (
		<div>
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
						<p className='text-slate-500 leading-7 pt-5 font-medium'>
							“BALCÓN A LA SIERRA DE LOS COMENCHINGONES” espectacular vista
							panorámica a la sierra y al valle. <br />
							<br />
							PLANTA ALTA Cocina totalmente equipada, Cocina con horno,
							Microondas, Heladera con Frezzer, Pava eléctrica, cafetera
							eléctrica, tostadora eléctrica. Vasija, utensilios de cocina,
							ollas, fuentes de horno Aire acondionado frio-calor Tv con DIRECTV
							y Crhromecast Comedor con mesa de “algarrobo con seis sillas y
							Sector de living con sillones para un buen descanso. <br /> <br />
							PLANTA BAJA Dos habitaciones confortables amplias y luminosas con
							vista a la sierra. <br />
							<br />
							Camas matrimonial queen size con colchón de resorte y camas
							individuales también con colchón de resorte. Extra carro con
							colchón de goma espuma. Mesas de luz. Placard. Mueble. Extra
							practicuna. PARRILLA INDIVIDUAL con parrilla y accesorios. COCHERA
							INDIVIDUAL
						</p>
					</div>
				</div>
				<div className='w-1/2 '>
					<Booking />
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
						<p className='text-slate-500 leading-7 pt-5 font-medium'>
							“BALCÓN CON VISTA INCREIBLE AL VALLE DEL CONLARA” con una
							espectacular vista a la sierra y al valle. <br />
							<br /> PLANTA ALTA Cocina totalmente equipada, Cocina con horno,
							Microondas, Heladera con Frezzer, Pava eléctrica, cafetera
							eléctrica, tostadora eléctrica.
							<br /> <br /> Vasija, utensillos de cocina, ollas, fuentes de
							horno Aire acordonado frio-calor Tv con DIRECTV y Crhromecast
							Comedor con mesa de “algarrobo con seis sillas y Sector de living
							con sillones para un buen descanso.
							<br /> <br /> PLANTA BAJA Dos habitaciones confortables amplias y
							luminosas con vista a la sierra. Camas matrimonial queen size con
							colchón de resorte y camas individuales también con colchón de
							resorte. Extra carro con colchón de goma espuma. Mesas de luz.
							Placard. Mueble. Extra practicuna. Baño con inodoro, bidet, pileta
							y ducha PARRILLA INDIVIDUAL con parrilla y accesorios. COCHERA
							INDIVIDUAL
						</p>
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
