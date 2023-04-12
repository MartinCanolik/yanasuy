import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Reviews } from "../../assets/reviews";
import Comments from "../comments/Comments";
import { useNavigate } from "react-router-dom";

import { arboles } from "../../assets/Assets";

const Home = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className='flex justify-center rounded-xl items-center py-5 m-auto text-white text-2xl font-body mt-[40vh] bg-brown h-[45%] w-[890px] '>
				<h1>Nuestra Historia</h1>
			</div>

			<div className='flex mt-[10vh] items-center'>
				<div className=' w-1/4'>
					<img src={arboles} alt='' className='object-cover' />
				</div>
				<div className='flex items-center justify-center bg-nav p-5 m-auto rounded-lg h-[400px] w-[1000px] '>
					<div className='flex items-center text-white text-md bg-black/25 my-5 mx-5 px-10 py-10 rounded-lg'>
						<p className='leading-7 my-auto'>
							Tras recorrer nuestro increíble país, nos decidimos por Merlo, un
							lugar increíble lleno de magia, paraíso natural. Declarado TERCER
							MICLOCLIMA DE MUNDO y PRIMEROS EN CÁLIDAD AMBIENTAL. <br /> <br />
							Emprendimiento familiar dedicados al servicio turístico, brindando
							una cálida y personalizada atención. <br /> <br />
						</p>
						<div className='text-center'>
							“YANASUY” significa MI GRAN AMIGO <br /> DONDE LLEGA UN TURISTA Y
							SE VA UN AMIGO
						</div>
					</div>
				</div>
				<div className=' w-1/4 '>
					<img src={arboles} alt='object-cover' />
				</div>
			</div>
			<div className='flex justify-center items-center p-5 m-auto text-white text-2xl font-body mt-[20vh] bg-brown h-[45%] w-full '>
				<h1>Nuestras Cabañas</h1>
			</div>
			<div className='flex flex-col justify-center bg-nav px-5 mt-[15vh] m-auto rounded-lg h-[400px] w-[800px] '>
				<div className='bg-black/25  p-5 rounded-lg '>
					<h1 className='text-white text-1xl font-body'>
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
						paredes firmes aislantes revestidas con PIEDRA Y TRONCOS respetando
						el entorno natural, la calidez y la frescura de la Sierras.
					</p>
				</div>
			</div>

			<div className='flex flex-col mt-[10vh] justify-center'>
				<div className='flex justify-center gap-[10vw] items-center'>
					<div className='flex flex-col gap-10'>
						<h1 className='p-5 m-auto text-white text-center text-xl font-body bg-brown rounded-xl w-[500px]'>
							Cabaña Norte
						</h1>
						<div
							className='relative h-[300px] w-[500px] cursor-pointer overflow-hidden '
							onClick={() => navigate("/cabañas/norte")}>
							<img
								src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678302756/Marco-PNG_xswnz1.png'
								alt='marco'
								className='absolute transform transition-all duration-300 hover:scale-150'
							/>
							<img
								src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678662425/cabania_sur_m8pjh0.jpg'
								alt='cabamoa norte'
								className='object-cover cursor-pointer w-full h-full'
							/>
						</div>
					</div>
					<div className='flex flex-col gap-10'>
						<div className='p-5 m-auto text-white text-center text-xl font-body bg-brown rounded-xl w-[500px]'>
							<h1>Cabaña Sur</h1>
						</div>
						<div
							className='relative w-[500px] h-[300px] overflow-hidden cursor-pointer'
							onClick={() => navigate("/cabañas/sur")}>
							<img
								src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678302756/Marco-PNG_xswnz1.png'
								alt='marco'
								className='absolute transform transition-all duration-300 hover:scale-150'
							/>
							<img
								src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1676404736/habitacion_l3thrt.jpg'
								alt='habitacion'
								className=' object-cover w-full h-full   '
							/>
						</div>
					</div>
				</div>
				<div className='flex justify-center items-center p-5 m-auto text-white text-2xl font-body mt-[20vh] bg-brown h-[45%] w-full '>
					<h1>Nuestro Parque</h1>
				</div>
				<div className='flex flex-col justify-center bg-nav px-5 mt-[15vh] m-auto rounded-lg h-[400px] w-[1000px] '>
					<div className='bg-black/25 mt-10  p-5 rounded-lg '>
						<h1 className='text-white text-1xl font-body'>
							UNA HECTÀREA PARQUIZADA
						</h1>
					</div>
					<div className='text-white text-xm bg-black/25 mt-5 mb-10 p-5 rounded-lg'>
						<p className='leading-7 mt-2'>
							Te espera una increíble hectárea con VISTA PANÓRAMICA A LA SIERRA
							DE LOS COMECHINGONES. Un amplio parque con una hermosa PISCINA CON
							YACUZZI de 18 metros x 8 metros rodeada por almendros y molles.
							Con reposeras y lugar de descanso. QUINCHO de 8 metros x 5 metros,
							con mesones y sillones de madera y una mesa de Ping Pong para que
							puedan divertirse en familia. ARCOS DE FUTBOL Y HAMACA SECTOR
							DEJEMOS HUELLAS BONITAS, hermoso sector para crear arte y
							recuerdos. SECTOR DE DESCANSO Y LECTURA o bien para tomar unos
							ricos mates rodeado de molles que le da una hermosa sombra
						</p>
					</div>
				</div>
				<div className='flex justify-center gap-[10vw] mt-[10vh] mb-[15vh] items-center'>
					<div className='flex flex-col gap-10'>
						<h1 className='p-5 m-auto text-white text-center text-xl font-body bg-brown rounded-xl w-[500px]'>
							Piscina
						</h1>
						<div className='relative h-[300px] w-[500px] cursor-pointer overflow-hidden '>
							<img
								src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678302756/Marco-PNG_xswnz1.png'
								alt='marco'
								className='absolute transform transition-all duration-300 hover:scale-150'
							/>
							<img
								src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678739213/piscinaYanasuy_nqvh3b.jpg'
								alt='piscina'
								className='object-cover cursor-pointer hover:scale-150 h-[300px] w-[500px]'
							/>
						</div>
					</div>
					<div className='flex flex-col gap-10 cursor-pointer'>
						<div className='p-5 m-auto text-white text-center text-xl font-body bg-brown rounded-xl w-[500px]'>
							<h1>Parque</h1>
						</div>
						<div className='relative w-[500px] h-[300px] overflow-hidden'>
							<img
								src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678302756/Marco-PNG_xswnz1.png'
								alt='marco'
								className='absolute transform transition-all duration-300 hover:scale-150'
							/>
							<img
								src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678739213/parqueYanasuy_ygucru.jpg'
								alt='parque'
								className='object-cover m-auto mt-5 w-[450px] h-[250px] cursor-pointer'
							/>
						</div>
					</div>
				</div>
				<Comments />
			</div>
		</>
	);
};

export default Home;
