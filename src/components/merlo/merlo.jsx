/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import { adventure } from "../../assets/Assets";

const Merlo = ({ isMobile }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const adventureCarousel = adventure;

	const handleModal = (img) => {
		const current = adventureCarousel[0];
		const imgIdx = adventureCarousel.indexOf(img);
		adventureCarousel[0] = adventureCarousel[imgIdx];
		adventureCarousel[imgIdx] = current;

		setModalIsOpen(true);
	};
	const setCloseModal = () => {
		setModalIsOpen(false);
	};

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
					{adventureCarousel &&
						adventureCarousel.map((el, idx) => {
							return (
								<div key={idx}>
									<img className='object-cover h-[60vh]' src={el} alt={"el"} />
								</div>
							);
						})}
				</Carousel>
			</Modal>
			<div
				className={`flex justify-center items-center bg-bn bg-no-repeat bg-fixed bg-cover w-full mt-[20vh] lg:mt-[30vh] h-[25vh]`}>
				<div className='flex justify-center items-center rounded-xl p-3 m-auto text-white text-xl lg:text-2xl font-body bg-black/50 w-[70vw] lg:w-[50vw] '>
					<h1>Merlo</h1>
				</div>
			</div>
			<div className='flex flex-col justify-center bg-nav px-10 p-5 mt-[20vh] lg:mt-[10vh] m-auto rounded-lg lg:h-[400px] lg:w-[1000px] '>
				<div className='flex items-center  align-center bg-black/25 p-5 rounded-lg '>
					<h1 className='text-white text-sm mx-auto lg:text-xl font-body'>
						Bienvenidos a Villa De Merlo!
					</h1>
				</div>
				<div className='text-white text-center text-xm bg-black/25 mt-10 px-5 lg:px-20 py-5 rounded-lg'>
					<p className='lg:leading-7 lg:text-xl mt-2'>
						Merlo San Luis se caracteriza por ser uno de los microclimas del
						mundo y la ciudad con mejor calidad ambiental del país y uno de los
						principales destinos turísticos de la región. <br /> <br />
						Por sus características naturales es un lugar frecuente para los
						amantes del turismo de aventura.
					</p>
				</div>
			</div>
			<div className='bg-gray-200  lg:px-20 py-5 mx-3 lg:w-[80vw] mx-auto mt-20 rounded-lg'>
				<div className='py-10 pl-5'>
					<h1 className='text-2xl font-bold text-gray-800'>
						NATURALEZA Y AVENTURA
					</h1>
					<hr className='border-2 border-slate-500 mt-5 w-[20%]' />
				</div>
				{isMobile && (
					<div className='mb-10'>
						<Carousel
							autoPlay={true}
							showThumbs={false}
							showIndicators={true}
							infiniteLoop={true}
							showStatus={false}>
							{adventureCarousel &&
								adventureCarousel.map((el, idx) => {
									return (
										<div key={idx}>
											<img
												className='object-cover h-[40vh]'
												src={el}
												alt={"el"}
											/>
										</div>
									);
								})}
						</Carousel>
					</div>
				)}

				<div className='flex flex-col  lg:flex-row text-lg h-full text-gray-800 '>
					<div className='flex flex-col gap-5 w-full lg:w-2/3 px-10 lg:px-10'>
						<h2 className='font-bold'>
							Villa De Merlo Te Espera Para Vivir La Aventura!
						</h2>
						<ul className='flex flex-col gap-5 list-disc'>
							<li>
								<h3 className='font-semibold'>Senderismo: </h3>
								<p>
									a pocos minutos del centro, podés adentrarte en circuitos de
									baja dificultad para conectar con la naturaleza.
								</p>
							</li>
							<li>
								<h3 className='font-semibold'>Trekking:</h3>
								<p>
									también podrás hacer caminatas con un grado de dificultad
									media/alta, accediendo a cascadas y cerros con vistas
									panorámicas increíbles. Te sugerimos que en esta actividad,
									cuentes con la supervisión de un prestador de turismo activo.
								</p>
							</li>
							<li>
								<h3 className='font-semibold'>Cicloturismo:</h3>
								<p>
									la ciudad cuenta con varios sectores con bici sendas y ciclo
									vías que permiten pedalear con toda la seguridad. Además podés
									contratar salidas guiadas, en bicis eléctricas, o con bicis
									para circuitos mountain bike.
								</p>
							</li>
							<li>
								<h3 className='font-semibold'>
									Observación de flora y avifauna:{" "}
								</h3>
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
								<h3 className='font-semibold'>Actividades con cuerdas: </h3>
								<p>
									Si sos amante de la aventura, en nuestra ciudad podrás
									experimentar la adrenalina de escalar, deslizarte por
									tirolesas dispuestas en distintas alturas, hacer rappel o vía
									ferrata al lado del reconocido salto del Tabaquillo, y mucho
									más.
								</p>
							</li>
							<li>
								<h3 className='font-semibold'>Astroturismo</h3>
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
							<a
								href='https://villademerlo.tur.ar/'
								// disabled={isSubmitting}
								target='blank'
								className=' bg-red-400 hover:bg-nav text-white font-bold mx-auto my-4 py-2 px-4 rounded border-2 border-transparent focus:outline-none focus:shadow-outline hover:text-green-800 hover:border-green-800 disabled:opacity-5'>
								Mas informacion
							</a>
						</ul>
					</div>

					{!isMobile && (
						<div className='flex flex-col h-full w-1/3'>
							{adventure &&
								adventure.map((el, idx) => {
									return (
										<img
											key={idx}
											onClick={() => handleModal(el)}
											className='h-[20%] cursor-pointer transition east-in-out duration-300 hover:brightness-50'
											src={el}
											alt='aventura'
										/>
									);
								})}
						</div>
					)}
				</div>
			</div>
			<div className='my-10 mx-auto w-[80%]'>
				<Carousel
					autoPlay={true}
					showThumbs={false}
					showIndicators={true}
					infiniteLoop={true}
					showStatus={false}>
					<div className='lg:w-[30%] mx-auto'>
						<img
							src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1682620837/QR-ENCUESTA-1080X1080-600x600_gkug05.jpg'
							alt='merlo qr image'
							className='object-cover'
						/>
					</div>
					<div className='lg:w-[30%] mx-auto'>
						<img
							src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1682620837/QR-WHATSAAP-1080X1080-600x600_dmhcsg.jpg'
							alt='merlo qr image'
							className='object-cover'
						/>
					</div>
					<div className='lg:w-[30%] mx-auto'>
						<img
							src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1682620837/QR-MAPA-1080X1080-600x600_1_cyj5zq.jpg'
							alt='merlo qr image'
							className='object-cover'
						/>
					</div>
					<div className='lg:w-[30%] mx-auto'>
						<img
							src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1682620837/QR-WEB-1080X1080-600x600_lezfmc.jpg'
							alt='merlo qr image'
							className='object-cover'
						/>
					</div>
				</Carousel>
			</div>
		</>
	);
};

export default Merlo;
