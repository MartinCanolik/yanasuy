import React from "react";
import { Carousel } from "react-responsive-carousel";
import { logoBooking, logoGoogle, estrellas } from "../../assets/Assets";
import { Reviews } from "../../assets/reviews";
// eslint-disable-next-line react/prop-types
const Comments = ({ isMobile }) => {
	return (
		<div className=' flex flex-col items-center bg-bn bg-no-repeat bg-fixed bg-cover w-full h-[100vh]'>
			<div className='flex justify-center items-center rounded-xl mb-5 p-5 m-auto text-white text-xl text-center font-body bg-black/50 lg:w-[70vw] w-[80vw] '>
				<h1>Nuestros huespedes andan diciendo ...</h1>
			</div>
			<div className={"lg:w-[70vw] w-[80vw] mx-auto my-auto"}>
				{!isMobile ? (
					<Carousel
						autoPlay={true}
						showThumbs={false}
						showIndicators={true}
						infiniteLoop={true}
						showStatus={false}>
						<div className=' flex h-[60vh] bg-black/50 p-5 pt-10'>
							<div className='w-1/3  flex flex-col items-center justify-center border-r-2 border-gray'>
								<div className=' h-1/3 '>
									<img
										src={logoGoogle}
										alt='logo'
										className='h-2/3 opacity-75'
									/>
									<h2 className='text-white h-1/3 mt-1 text-xl'>
										andreagabriela1978:
									</h2>
								</div>
								<div className='h-[43%] py-3 px-5 overflow-auto'>
									<p className='text-xm text-white my-3 text-center '>
										Un lugar soñado! La atención de Marcela y su familia es
										espectacular! Muy cordiales y bien predispuestos! Las
										cabañas son hermosas y súper cómodas, la pileta y el jacuzzi
										espectaculares!! Para volver a visitar sin dudarlo!!.
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
										Hermoso lugar! Súper recomendable! Las cabañas completas y
										muy cómodas. La atención de Marcela y Laurita: un lujo! Nos
										atendieron con mucha amabilidad y cariño, incluso a Lupita (
										nuestra mascota).
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
										Un lugar encantador, la vista es hermosa, las cabañas un
										espectáculo, y los dueños excelentes y muy atentos.
										Totalmente recomendable.
									</p>
								</div>
								<div className='flex items-center h-[23%] w-[45%] p-3'>
									<img src={estrellas} alt='' />
								</div>
							</div>
						</div>
						<div className='h-[60vh] flex bg-black/50 p-5 pt-10'>
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
										Una paz increible y una belleza unica. Si tengo que
										comparalo con algo, seria con la receta de la abuela que mas
										me gusta. Volveria siempre.
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
										Impecable y muy cálida la atención de Marcela. Hermosa la
										propiedad y las vistas de las sierras y del valle. Los
										chicos disfrutaron muchísimo de la pileta y de la mesa de
										ping-pong. Muy tranquilo.
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
										Excelente lugar !!!!!
									</p>
								</div>
								<div className='h-[23%]  p-3'>
									<h2 className='text-white text-3xl my-3'>9</h2>
								</div>
							</div>
						</div>
					</Carousel>
				) : (
					<Carousel
						showThumbs={false}
						showIndicators={true}
						infiniteLoop={true}
						showStatus={false}>
						{Reviews.map((review, idx) => {
							return (
								<div
									key={idx}
									className=' flex align-center rounded-xl h-[60vh] bg-black/50 p-5 pt-10'>
									<div className='flex flex-col w-full items-center justify-center'>
										<div className='h-1/3 '>
											<img
												src={
													review.logo === "logoBooking"
														? logoBooking
														: logoGoogle
												}
												alt='logo'
												className='h-2/3 opacity-75 '
											/>
											<h2 className='text-white h-1/3 mt-1 text-xl'>
												{review.name}
											</h2>
										</div>
										<div className='h-[43%] p-3 overflow-auto'>
											<p className='text-xm py-3 px-5 text-white mt-10 text-center'>
												{review.review}
											</p>
										</div>
										<div className='h-[23%]  p-3'>
											{review.rating ? (
												<h2 className='text-white text-3xl my-3'>9</h2>
											) : (
												<div className='flex items-center justify-center lg:h-[23%] lg:w-[45%] w-40 p-3'>
													<img src={estrellas} alt='' />
												</div>
											)}
										</div>
									</div>
								</div>
							);
						})}
					</Carousel>
				)}
			</div>
		</div>
	);
};

export default Comments;
