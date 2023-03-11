import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Reviews } from "../../assets/reviews";
const logoBooking =
	"https://res.cloudinary.com/drhj3sc2o/image/upload/v1678401479/bookingcom-1_br2vnl.svg";
const logoGoogle =
	"https://documents.reverso.net/img/new_design/icons/ic-google.svg";
const estrellas = "https://www.finistarmor.com/images/five-stars.png";
// const formatedReviews = [];

// const handleFormatReviews = () => {
// 	for (let i = 0; i < Reviews.length / 3; i++) {
// 		const groupedReviews = `<div className='w-1/3 border-2 border-white p-3 px-3'>
// 		<img
// 		src=${Reviews[i].logo}
// 			alt='logo'
// 			className='h-20 opacity-70 my-3'
// 		/>
// 		<h2 className='text-white text-xl my-3'>${Reviews[i].name}</h2>
// 		<p className='text-xm text-white my-3 text-center'>
// 		${Reviews[i].review}
// 		</p>
// 		<h2 className='text-white text-3xl my-3'>${Reviews[i].rating}</h2>
// 		<div>${Reviews[i].stars}</div>

// 	</div>
// 	<div className='w-1/3 border-2 border-white p-3 px-3'>
// 		<img
// 		src=${Reviews[i + 1].logo}
// 			alt='logo'
// 			className='h-20 opacity-70 my-3'
// 		/>
// 		<h2 className='text-white text-xl my-3'>${Reviews[i + 1].name}</h2>
// 		<p className='text-xm text-white my-3 text-center'>
// 			${Reviews[i + 1].review}
// 		</p>
// 		<h2 className='text-white text-3xl my-3'>${Reviews[i + 1].rating}</h2>
// 		<div>${Reviews[i + 1].stars}</div>

// 	</div>
// 	<div className='w-1/3 border-2 border-white p-3 px-3'>
// 		<img
// 		src=${Reviews[i + 2].logo}
// 			alt='logo'
// 			className='h-20 opacity-70 my-3'
// 		/>
// 		<h2 className='text-white text-xl my-3'>${Reviews[i + 2].name}</h2>
// 		<p className='text-xm text-white my-3 text-center'>
// 			${Reviews[i + 2].review}
// 		</p>
// 		<h2 className='text-white text-3xl my-3'>${Reviews[i + 2].rating}</h2>
// 		<div>${Reviews[i + 2].stars}</div>

// 	</div>
// 	`;
// 		formatedReviews.push(groupedReviews);
// 	}
// };
// function convertToPlain(html) {
// 	// Create a new div element
// 	var tempDivElement = document.createElement("div");

// 	// Set the HTML content with the given value
// 	tempDivElement.innerHTML = html;

// 	// Retrieve the text property of the element
// 	return tempDivElement.textContent || tempDivElement.innerText || "";
// }

const Home = () => {
	// useEffect(() => {
	// 	handleFormatReviews();
	// }, []);

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
			<div className=' flex flex-col items-center bg-bn bg-no-repeat bg-fixed bg-cover w-full h-[100vh]'>
				<div>
					<h1 className='bg-black/50  p-3 mt-5 text-white text-2xl rounded'>
						Nuestros huespedes andan diciendo ...
					</h1>
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
								<div className='h-[43%] py-3 px-5 '>
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
								<div className='h-[43%]  py-3 px-5'>
									<p className='text-xm text-white my-3 text-center'>
										" Impecable y muy cálida la atención de Marcela. Hermosa la
										propiedad y las vistas de las sierras y del valle. Los
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
										cabañas son hermosas y súper cómodas, la pileta y el jacuzzi
										espectaculares!! Para volver a visitar sin dudarlo!!. "
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
										" Hermoso lugar! Súper recomendable! Las cabañas completas y
										muy cómodas. La atención de Marcela y Laurita: un lujo! Nos
										atendieron con mucha amabilidad y cariño, incluso a Lupita (
										nuestra mascota). "
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
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default Home;
