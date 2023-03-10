import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Reviews } from "../../assets/reviews";

const formatedReviews = [];
const logoBooking =
	"https://res.cloudinary.com/drhj3sc2o/image/upload/v1678401479/bookingcom-1_br2vnl.svg";
const logoGoogle = "";

// for (let i = 0; i > Reviews / 3; i++) {

// 	const groupedReviews = `<div className='w-1/3 border-2 border-white p-3 px-3'>
// 	<img
// 	src=${Reviews?[i] === 'booking'? logoBooking : logoGoogle}
// 		alt='logo'
// 		className='h-20 opacity-70 my-3'
// 	/>
// 	<h2 className='text-white text-xl my-3'>Mirta: </h2>
// 	<p className='text-xm text-white my-3 text-center'>
// 		"tengo una muy muy buena critica para hacer porque me parece q
// 		el complejo simplemente se va al remil pasto mi reynaldo raul
// 		altas vacas pegamos aca con los pibes, epicardo."
// 	</p>
// 	<h2 className='text-white text-3xl my-3'>10</h2>

// </div>`
//}

const Home = () => {
	return (
		<div className='flex flex-col mt-[30vh] gap-[30vh]  justify-center'>
			<a href='https://wa.me/+5492664463274' target={"blank"}>
				<img
					src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678307454/WhatsApp-Logo.wine_cugmui.svg'
					alt='logo wpp'
					className='fixed w-[10%] bottom-[1px] right-[1px] cursor-pointer z-100'
				/>
			</a>
			<div className='flex space-x-5 px-20 items-center '>
				<div className='w-1/2 relative h-[300px] w-[500px] '>
					<img
						src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678302756/Marco-PNG_xswnz1.png'
						alt='marco'
						className='absolute'
					/>
					<img
						src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1676404756/Atardecer_anvcac.jpg'
						alt='atardecer'
						className='object-cover cursor-pointer my-3'
					/>
				</div>
				<div className='w-1/2 px-3'>
					<h2>El complejo</h2>
					<p>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum."
					</p>
					<button className='bg-secondary hover:bg-white text-white font-bold py-2 px-4 rounded border-2 border-transparent focus:outline-none focus:shadow-outline hover:text-secondary hover:border-secondary mt-4  disabled:opacity-5'>
						Ver mas..
					</button>
				</div>
			</div>
			<div className='flex space-x-5 px-20 max-h[300px] items-center '>
				<div className='w-1/2 px-3'>
					<h2>Nuestras cabañas</h2>
					<p>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum."
					</p>
					<button className='bg-secondary hover:bg-white text-white font-bold py-2 px-4 rounded border-2 border-transparent focus:outline-none focus:shadow-outline hover:text-secondary hover:border-secondary mt-4  disabled:opacity-5'>
						Ver mas..
					</button>
				</div>
				<div className='w-1/2 relative w-[500px] h-[300px]'>
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
			<div className='flex space-x-5 px-20  items-center'>
				<div className='w-1/2 relative w-[500px] h-[300px]'>
					<img
						src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678302756/Marco-PNG_xswnz1.png'
						alt='marco'
						className='absolute'
					/>
					<img
						src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1676404745/banio_knrd9m.jpg'
						alt=''
						className='object-cover w-full h-full cursor-pointer'
					/>
				</div>
				<div className='w-1/2 px-3'>
					<h2>El complejo</h2>
					<p>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum."
					</p>
					<button className='bg-secondary hover:bg-white text-white font-bold py-2 px-4 rounded border-2 border-transparent focus:outline-none focus:shadow-outline hover:text-secondary hover:border-secondary mt-4  disabled:opacity-5'>
						Ver mas..
					</button>
				</div>
			</div>
			<div className=' flex flex-col items-center bg-bn bg-no-repeat bg-fixed bg-cover w-full h-[600px]'>
				<div className='w-[70vw] mx-auto my-auto'>
					<Carousel
						autoPlay={true}
						showThumbs={false}
						showIndicators={true}
						infiniteLoop={true}
						showStatus={false}>
						<div className='flex h-[400px] bg-black/50 p-3'>
							<div className='w-1/3 border-x-2 border-gray p-3 px-3'>
								<img
									src={logoBooking}
									alt='logo'
									className='h-20 opacity-70 my-3'
								/>
								<h2 className='text-white text-xl my-3'>Romina: </h2>
								<p className='text-xm text-white my-3 text-center'>
									"Una paz increible y una belleza unica. Si tengo que comparalo
									con "algo", seria con la receta de la abuela que mas me gusta.
									Volveria siempre."
								</p>
								<h2 className='text-white text-3xl my-3'>10</h2>
							</div>
							<div className='w-1/3 border-x-2 border-gray p-3 px-3'>
								<img
									src={logoBooking}
									alt='logo'
									className='h-20 opacity-70 my-3'
								/>
								<h2 className='text-white text-xl my-3'>Romina: </h2>
								<p className='text-xm text-white my-3 text-center'>
									"Una paz increible y una belleza unica. Si tengo que comparalo
									con "algo", seria con la receta de la abuela que mas me gusta.
									Volveria siempre."
								</p>
								<h2 className='text-white text-3xl my-3'>10</h2>
							</div>
							<div className='w-1/3 border-x-2 border-gray  p-3 px-3'>
								<img
									src={logoBooking}
									alt='logo'
									className='h-20 opacity-70 my-3'
								/>
								<h2 className='text-white text-xl my-3'>Romina: </h2>
								<p className='text-xm text-white my-3 text-center'>
									"Una paz increible y una belleza unica. Si tengo que comparalo
									con "algo", seria con la receta de la abuela que mas me gusta.
									Volveria siempre."
								</p>
								<h2 className='text-white text-3xl my-3'>10</h2>
							</div>
						</div>
						<div className='flex h-[400px] bg-black/50 p-3'>
							<div className='w-1/3 border-x-2 border-grapx-3'>
								<img
									src={logoBooking}
									alt='logo'
									className='h-20 opacity-70 my-3'
								/>
								<h2 className='text-white text-xl my-3'>Romina: </h2>
								<p className='text-xm text-white my-3 text-center'>
									"Una paz increible y una belleza unica. Si tengo que comparalo
									con "algo", seria con la receta de la abuela que mas me gusta.
									Volveria siempre."
								</p>
								<h2 className='text-white text-3xl my-3'>10</h2>
							</div>
							<div className='w-1/3 border-x-2 border-gray p-3 px-3'>
								<img
									src={logoBooking}
									alt='logo'
									className='h-20 opacity-70 my-3'
								/>
								<h2 className='text-white text-xl my-3'>Romina: </h2>
								<p className='text-xm text-white my-3 text-center'>
									"Una paz increible y una belleza unica. Si tengo que comparalo
									con "algo", seria con la receta de la abuela que mas me gusta.
									Volveria siempre."
								</p>
								<h2 className='text-white text-3xl my-3'>10</h2>
							</div>
							<div className='w-1/3 border-x-2 border-gray p-3 px-3'>
								<img
									src={logoBooking}
									alt='logo'
									className='h-20 opacity-70 my-3'
								/>
								<h2 className='text-white text-xl my-3'>Romina: </h2>
								<p className='text-xm text-white my-3 text-center'>
									"Una paz increible y una belleza unica. Si tengo que comparalo
									con "algo", seria con la receta de la abuela que mas me gusta.
									Volveria siempre."
								</p>
								<h2 className='text-white text-3xl my-3'>10</h2>
							</div>
						</div>
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default Home;
