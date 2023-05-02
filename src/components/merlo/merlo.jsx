import React, { useState } from "react";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import { adventure } from "../../assets/Assets";

const Merlo = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const setCloseModal = () => {
		setModalIsOpen(false);
	};
	console.log(modalIsOpen);

	return (
		<>
			<Modal
				isOpen={modalIsOpen}
				style={{
					content: { width: "50vw", height: "70vh", margin: "auto" },
				}}
				onRequestClose={setCloseModal}>
				<Carousel
					autoPlay={true}
					showThumbs={false}
					showIndicators={true}
					infiniteLoop={true}
					showStatus={false}>
					{adventure &&
						adventure.map((el, idx) => {
							return (
								<div key={idx}>
									<img className='object-cover' src={el} alt={"el"} />
								</div>
							);
						})}
				</Carousel>
			</Modal>
			<div
				className={`flex justify-center items-center bg-bn bg-no-repeat bg-fixed bg-cover w-full mt-[20vh] lg:mt-0 h-[25vh]`}>
				<div className='flex justify-center items-center rounded-xl p-3 m-auto text-white text-xl lg:text-2xl font-body bg-black/50 w-[70vw] lg:w-[50vw] '>
					<h1>Merlo</h1>
				</div>
			</div>
			<div className='bg-gray-200 px-20 py-5 mx-20 mt-20 rounded-lg'>
				<div className='py-10 pl-5'>
					<h1 className='text-2xl font-bold text-gray-800'>
						NATURALEZA Y AVENTURA
					</h1>
					<hr className='border-2 border-slate-500 mt-5 w-[20%]' />
				</div>
				<div className='flex gap-5 text-lg text-gray-800'>
					<div className='w-2/3 p-10'>
						<h2>Villa De Merlo Te Espera Para Vivir La Aventura</h2>
						<ul className='flex flex-col gap-5 list-disc'>
							<li>
								<h3>Senderismo: </h3>
								<p>
									a pocos minutos del centro, podés adentrarte en circuitos de
									baja dificultad para conectar con la naturaleza.
								</p>
							</li>
							<li>
								<h3>Trekking:</h3>
								<p>
									también podrás hacer caminatas con un grado de dificultad
									media/alta, accediendo a cascadas y cerros con vistas
									panorámicas increíbles. Te sugerimos que en esta actividad,
									cuentes con la supervisión de un prestador de turismo activo.
								</p>
							</li>
							<li>
								<h3>Cicloturismo:</h3>
								<p>
									la ciudad cuenta con varios sectores con bici sendas y ciclo
									vías que permiten pedalear con toda la seguridad. Además podés
									contratar salidas guiadas, en bicis eléctricas, o con bicis
									para circuitos mountain bike.
								</p>
							</li>
							<li>
								<h3>Observación de flora y avifauna: </h3>
								<p>
									en la ciudad y zona tenemos más de doscientas especies de
									aves, lo que convierte a Villa de Merlo en un destino ideal
									para los amantes de esta actividad. Además, la ciudad del
									tercer microclima del mundo posee una flora de gran diversidad
									desde bosques de algarrobo, quebracho, hasta especies que solo
									crecen en altura como el tabaquillo.
								</p>
							</li>
							<li>
								<h3>Actividades con cuerdas: </h3>
								<p>
									Si sos amante de la aventura, en nuestra ciudad podrás
									experimentar la adrenalina de escalar, deslizarte por
									tirolesas dispuestas en distintas alturas, hacer rappel o vía
									ferrata al lado del reconocido salto del Tabaquillo, y mucho
									más.
								</p>
							</li>
							<li>
								<h3>Astroturismo</h3>
								<p>
									es otra de las actividades explotadas en la ciudad debido a su
									cielo libre de contaminación, límpido y despejado que permite
									la observación de estrellas y planetas. Hay agencias de viajes
									que ofrecen excursiones nocturnas a los principales miradores
									de la villa serrana, y también observatorios a cielo abierto,
									que combinan charlas de divulgación científica con
									observaciones a través de telescopios móviles.
								</p>
							</li>
						</ul>
					</div>
					<div className='w-1/3' onClick={() => setModalIsOpen(true)}>
						{adventure &&
							adventure.map((el, idx) => {
								return (
									<img
										key={idx}
										className='cursor-pointer transition east-in-out duration-300 hover:brightness-50'
										src={el}
										alt='aventura'
									/>
								);
							})}
					</div>
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
