import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Reviews } from "../../assets/reviews";
import Comments from "../comments/Comments";
import { useNavigate } from "react-router-dom";

import { arboles } from "../../assets/Assets";

// desde rules del eslint me lo desabilita en el vs pero no en el nav

// eslint-disable-next-line react/prop-types
const Home = ({ isMobile }) => {
	const navigate = useNavigate();
	const lgTitle =
		"flex justify-center items-center p-5 m-auto text-stone-800 lg:text-2xl font-bold font-body bg-pink lg:h-[45%] w-full";
	const scrollTO = () => {
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		scrollTO();
	}, []);
	return (
		<>
			{!isMobile && (
				<div>
					<div
						className={`${lgTitle} lg:rounded-xl mt-[70vh] lg:mt-[50vh] lg:w-[890px]`}>
						<h1>Nuestra Historia</h1>
					</div>
					<div className='flex mt-[10vh] items-center'>
						<div className=' w-1/4'>
							<img src={arboles} alt='' className='object-cover' />
						</div>
						<div className='flex items-center justify-center bg-nav p-5 m-auto rounded-lg lg:h-[400px] lg:w-[1000px] '>
							<div className='flex  flex-wrap overflow-auto justify-center items-center text-white lg:text-md  bg-black/25 my-5 mx-5 px-10 py-10 rounded-lg'>
								<p className='leading-6 lg:leading-6 text-center lg:text-left my-auto'>
									Tras recorrer nuestro increíble país, nos decidimos por Merlo,
									un lugar lleno de magia y paraíso natural. Declarado TERCER
									MICLOCLIMA DE MUNDO y PRIMERO EN CÁLIDAD AMBIENTAL. <br />{" "}
									<br />
									Emprendimiento familiar dedicados al servicio turístico,
									brindando una cálida y personalizada atención. <br /> <br />
								</p>
								<div className='text-center'>
									“YANASUY” significa MI GRAN AMIGO <br /> DONDE LLEGA UN
									TURISTA Y SE VA UN AMIGO
								</div>
							</div>
						</div>
						<div className=' w-1/4'>
							<img src={arboles} alt='' className='object-cover' />
						</div>
					</div>
				</div>
			)}

			<div
				className={`${lgTitle} lg:rounded-xl mt-[70vh] lg:mt-[10vh] lg:w-[890px]`}>
				<h1>Nuestras Cabañas</h1>
			</div>
			<div className='flex flex-col justify-center bg-nav p-5 px-10 mt-[10vh] lg:mt-[10vh] m-auto rounded-lg lg:h-[400px] lg:w-[800px] '>
				<div className='flex items-center  align-center bg-black/25 p-5 rounded-lg '>
					<h1 className='text-white text-sm mx-auto lg:text-xl font-body'>
						CABAÑAS DE PIEDRA Y TRONCO
					</h1>
				</div>
				<div className='text-white text-xm bg-black/25 mt-5 p-5 rounded-lg'>
					<h3 className=''>
						Complejo de dos cabañas hasta 5 personas cada una
					</h3>
					<p className='leading-7 text-md mt-2'>
						Pensando en el bienestar y la comodidad de nuestras queridas
						familias decidimos construir nuestras cabañas en dos plantas con
						paredes firmes aislantes revestidas con piedra y troncos respetando
						el entorno natural, la calidez y la frescura de la Sierras.
					</p>
				</div>
			</div>

			<div className='flex flex-col mt-[10vh] justify-center'>
				<div className='flex flex-col lg:flex-row justify-center gap-[10vh] items-center'>
					<div className='flex flex-col gap-[10vh] lg:gap-10'>
						<h1 className='p-5 m-auto text-stone-800 text-center text-xl font-bold font-body bg-pink lg:rounded-xl w-full lg:w-[500px]'>
							Cabaña Norte
						</h1>
						<div
							className='relative lg:h-[300px] lg:w-[500px] cursor-pointer overflow-hidden '
							onClick={() => navigate("/cabañas/norte")}>
							<img
								src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678302756/Marco-PNG_xswnz1.png'
								alt='marco'
								className='absolute transform transition-all duration-300 w-full h-full  hover:scale-150'
							/>
							<img
								src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678662425/cabania_sur_m8pjh0.jpg'
								alt='cabamoa norte'
								className='object-cover cursor-pointer w-full h-full'
							/>
						</div>
					</div>
					<div className='flex flex-col gap-[10vh] lg:gap-10 '>
						<div className='p-5 m-auto text-stone-800 text-center text-xl font-bold bg-pink lg:rounded-xl w-full lg:w-[500px]'>
							<h1>Cabaña Sur</h1>
						</div>
						<div
							className='relative lg:w-[500px] lg:h-[300px] overflow-hidden cursor-pointer'
							onClick={() => navigate("/cabañas/sur")}>
							<img
								src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678302756/Marco-PNG_xswnz1.png'
								alt='marco'
								className='absolute transform transition-all duration-300 hover:scale-150 w-full h-full'
							/>
							<img
								src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1676404736/habitacion_l3thrt.jpg'
								alt='habitacion'
								className=' object-cover cursor-pointer w-full h-full  '
							/>
						</div>
					</div>
				</div>
				<div className={`${lgTitle} mt-[10vh]`}>
					<h1>Nuestro Parque</h1>
				</div>
				<div className='flex flex-col justify-center bg-nav p-5 mt-[10vh] lg:mt-[10vh] m-auto rounded-lg lg:h-[400px] lg:w-[1000px] '>
					<div className='flex items-center mt-5  align-center bg-black/25 p-5 rounded-lg '>
						<h1 className='text-white text-sm mx-auto lg:text-xl font-body'>
							UNA HECTÀREA PARQUIZADA
						</h1>
					</div>
					<div className='text-white text-xm bg-black/25 mt-5 mb-10 p-5 rounded-lg'>
						<p className='lg:leading-7 mt-2'>
							Te espera una inimaginable hectárea con VISTA PANORÁMICA A LA
							SIERRA DE LOS COMECHINGONES. <br /> Amplio parque con una hermosa
							PISCINA CON YACUZZI de 18 metros x 8 metros rodeada por almendros
							y molles, con reposeras y lugar de descanso. Arcos de Futbol y
							Hamaca. <br /> QUINCHO de 8 metros x 5 metros, con mesones y
							sillones de madera y una mesa de Ping Pong para que puedan
							divertirse en familia. <br /> SECTOR DEJEMOS HUELLAS BONITAS,
							hermoso lugar para crear arte y dejar recuerdos. SECTOR DE
							DESCANSO Y LECTURA o bien para tomar unos ricos mates a la sombra
							de molles.
						</p>
					</div>
				</div>
				<div className='flex flex-col lg:flex-row justify-center gap-[10vw] mt-[10vh] mb-[15vh] items-center'>
					<div
						className='flex flex-col gap-[10vh] lg:gap-10 '
						onClick={() => navigate("/cabañas/piscina")}>
						<h1 className='p-5 m-auto text-stone-800 font-bold font-body text-center text-xl font-stone-800 bg-pink lg:rounded-xl w-full lg:w-[500px]'>
							Piscina
						</h1>
						<div className='relative lg:h-[300px] lg:w-[500px] cursor-pointer overflow-hidden '>
							<img
								src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678302756/Marco-PNG_xswnz1.png'
								alt='marco'
								className='absolute transform transition-all duration-300 hover:scale-150 w-full h-full'
							/>
							<img
								src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678739213/piscinaYanasuy_nqvh3b.jpg'
								alt='piscina'
								className='object-cover cursor-pointer hover:scale-150 lg:h-[300px] lg:w-[500px] w-full h-full'
							/>
						</div>
					</div>
					<div
						className='flex flex-col gap-[10vh]   lg:gap-10 '
						onClick={() => navigate("/cabañas/parque")}>
						<div className='p-5 m-auto text-stone-800 text-center text-xl font-body font-bold bg-pink lg:rounded-xl w-full lg:w-[500px]'>
							<h1>Parque</h1>
						</div>
						<div className='relative lg:h-[300px] lg:w-[500px] cursor-pointer overflow-hidden '>
							<img
								src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678302756/Marco-PNG_xswnz1.png'
								alt='marco'
								className='absolute transform transition-all duration-300 hover:scale-150 w-full h-full'
							/>
							<img
								src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678739213/parqueYanasuy_ygucru.jpg'
								alt='parque'
								className='object-cover cursor-pointer hover:scale-150 lg:h-[300px] lg:w-[500px] w-full h-full'
							/>
						</div>
					</div>
				</div>
				<Comments isMobile={isMobile} />
			</div>
		</>
	);
};

export default Home;
