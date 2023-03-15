import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Reviews } from "../../assets/reviews";
import {
	logoBooking,
	logoGoogle,
	estrellas,
	arboles,
} from "../../assets/Assets";

const Home = () => {
	// useEffect(() => {
	// 	handleFormatReviews();
	// }, []);

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
					<div className='flex items-center text-white text-xm bg-black/25 my-5 mx-5 px-10 py-10 rounded-lg'>
						<p className='leading-7 my-auto'>
							Tras recorrer nuestro increíble país, nos decidimos por Merlo, un
							lugar increíble lleno de magia, paraíso natural. Declarado TERCER
							MICLOCLIMA DE MUNDO y PRIMEROS EN CÁLIDAD AMBIENTAL.
							Emprendimiento familiar dedicados al servicio turístico, brindando
							una cálida y personalizada atención. Ofreciendo lo mejor de
							nosotros para que tú paso por este maravilloso lugar sea
							inolvidable. “YANASUY” significa MI GRAN AMIGO Es por esto nuestro
							profundo deseo es que cuando regresen a sus hogares sientan que
							hicimos una linda amistad.
						</p>
					</div>
				</div>
				<div className=' w-1/4 '>
					<img src={arboles} alt='object-cover' />
				</div>
			</div>
			<div className='flex justify-center items-center rounded-xl p-5 m-auto text-white text-2xl font-body mt-[20vh] bg-brown h-[45%] w-full '>
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
					<p className='leading-6 mt-2'>
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
						<div className='relative h-[300px] w-[500px] cursor-pointer overflow-hidden '>
							<img
								src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678302756/Marco-PNG_xswnz1.png'
								alt='marco'
								className='absolute'
							/>
							<img
								src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678662425/cabania_sur_m8pjh0.jpg'
								alt='cabamoa norte'
								className='object-cover cursor-pointer h-[300px] w-[500px]'
							/>
						</div>
					</div>
					<div className='flex flex-col gap-10 cursor-pointer'>
						<div className='p-5 m-auto text-white text-center text-xl font-body bg-brown rounded-xl w-[500px]'>
							<h1>Cabaña Sur</h1>
						</div>
						<div className='relative w-[500px] h-[300px] overflow-hidden'>
							<img
								src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678302756/Marco-PNG_xswnz1.png'
								alt='marco'
								className='absolute'
							/>
							<img
								src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1676404736/habitacion_l3thrt.jpg'
								alt='habitacion'
								className='object-cover w-full h-full cursor-pointer'
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
						<p className='leading-6 mt-2'>
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
								className='absolute'
							/>
							<img
								src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678739213/piscinaYanasuy_nqvh3b.jpg'
								alt='piscina'
								className='object-cover cursor-pointer h-[300px] w-[500px]'
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
								className='absolute'
							/>
							<img
								src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678739213/parqueYanasuy_ygucru.jpg'
								alt='parque'
								className='object-cover m-auto mt-5 w-[450px] h-[250px] cursor-pointer'
							/>
						</div>
					</div>
				</div>

				<div className=' flex flex-col items-center bg-bn bg-no-repeat bg-fixed bg-cover w-full h-[100vh]'>
					<div className='flex justify-center items-center rounded-xl mb-5 p-5 m-auto text-white text-2xl font-body bg-black/50 w-[70vw] '>
						<h1>Nuestros huespedes andan diciendo ...</h1>
					</div>
					<div className='w-[70vw]  mx-auto my-auto'>
						<Carousel
							// autoPlay={true}

							showThumbs={false}
							showIndicators={true}
							infiniteLoop={true}
							showStatus={false}>
							{/* {formatedReviews.map((el) => {
							return <div className='flex h-[400px] bg-black/50 p-3'>el</div>;
						})} */}
							<div className=' flex h-[60vh] bg-black/50 p-5'>
								<div className='w-1/3  flex flex-col items-center justify-center border-r-2 border-gray'>
									<div className=' h-1/3 '>
										<img
											src={logoGoogle}
											alt='logo'
											className='h-2/3 opacity-75'
										/>
										<h2 className='text-white h-1/3 mt-1 text-xl'>
											andreagabriela1978:{" "}
										</h2>
									</div>
									<div className='h-[43%] py-3 px-5 overflow-auto'>
										<p className='text-xm text-white my-3 text-center '>
											" Un lugar soñado! La atención de Marcela y su familia es
											espectacular! Muy cordiales y bien predispuestos! Las
											cabañas son hermosas y súper cómodas, la pileta y el
											jacuzzi espectaculares!! Para volver a visitar sin
											dudarlo!!. "
										</p>
									</div>
									<div className='flex items-center h-[23%] w-[45%] p-3'>
										<img src={estrellas} alt='' />
									</div>
								</div>
								<div className='w-1/3  flex flex-col items-center justify-center border-r-2 border-gray'>
									<div className='h-1/3 '>
										<img
											src={logoGoogle}
											alt='logo'
											className='h-2/3 opacity-75'
										/>
										<h2 className='text-white h-1/3 mt-1 text-xl'>
											Lía Bedatou:{" "}
										</h2>
									</div>
									<div className='h-[43%]  py-3 px-5 overflow-auto'>
										<p className='text-xm text-white my-3 text-center'>
											" Hermoso lugar! Súper recomendable! Las cabañas completas
											y muy cómodas. La atención de Marcela y Laurita: un lujo!
											Nos atendieron con mucha amabilidad y cariño, incluso a
											Lupita ( nuestra mascota). "
										</p>
									</div>
									<div className='flex items-center h-[23%] w-[45%] p-3'>
										<img src={estrellas} alt='' />
									</div>
								</div>
								<div className='w-1/3 flex flex-col items-center justify-center'>
									<div className='h-1/3 '>
										<img
											src={logoGoogle}
											alt='logo'
											className='h-2/3 opacity-75'
										/>
										<h2 className='text-white h-1/3 mt-1 text-xl'>Ricardo: </h2>
									</div>
									<div className='h-[43%] p-3 overflow-auto'>
										<p className='text-xm py-3 text-white text-center'>
											" Un lugar encantador, la vista es hermosa, las cabañas un
											espectáculo, y los dueños excelentes y muy atentos.
											Totalmente recomendable. "
										</p>
									</div>
									<div className='flex items-center h-[23%] w-[45%] p-3'>
										<img src={estrellas} alt='' />
									</div>
								</div>
							</div>
							<div className='h-[60vh] flex bg-black/50 p-5'>
								<div className='w-1/3  flex flex-col items-center justify-center border-r-2 border-gray'>
									<div className=' h-1/3 '>
										<img
											src={logoBooking}
											alt='logo'
											className='h-2/3 opacity-75 '
										/>
										<h2 className='h-1/3 text-white text-xl mt-1'>Romina: </h2>
									</div>
									<div className='h-[43%] py-3 px-5 overflow-auto '>
										<p className='text-xm text-white my-3 text-center'>
											" Una paz increible y una belleza unica. Si tengo que
											comparalo con "algo", seria con la receta de la abuela que
											mas me gusta. Volveria siempre. "
										</p>
									</div>
									<div className='h-[23%]  p-3'>
										<h2 className='text-white text-3xl my-3'>10</h2>
									</div>
								</div>
								<div className='w-1/3  flex flex-col items-center justify-center border-r-2 border-gray'>
									<div className='h-1/3 '>
										<img
											src={logoBooking}
											alt='logo'
											className='h-2/3 opacity-75 '
										/>
										<h2 className='text-white h-1/3 text-xl mt-1'>Maria: </h2>
									</div>
									<div className='h-[43%]  py-3 px-5 overflow-auto'>
										<p className='text-xm text-white my-3 text-center'>
											" Impecable y muy cálida la atención de Marcela. Hermosa
											la propiedad y las vistas de las sierras y del valle. Los
											chicos disfrutaron muchísimo de la pileta y de la mesa de
											ping-pong. Muy tranquilo. "
										</p>
									</div>
									<div className='h-[23%] p-3'>
										<h2 className='text-white text-3xl my-3'>9</h2>
									</div>
								</div>
								<div className='w-1/3 flex flex-col items-center justify-center'>
									<div className='h-1/3 '>
										<img
											src={logoBooking}
											alt='logo'
											className='h-2/3 opacity-75 '
										/>
										<h2 className='text-white h-1/3 mt-1 text-xl'>Ricardo: </h2>
									</div>
									<div className='h-[43%] p-3 overflow-auto'>
										<p className='text-xm py-3 px-5 text-white mt-10 text-center'>
											" Excelente lugar !!!!! "
										</p>
									</div>
									<div className='h-[23%]  p-3'>
										<h2 className='text-white text-3xl my-3'>9</h2>
									</div>
								</div>
							</div>
						</Carousel>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
