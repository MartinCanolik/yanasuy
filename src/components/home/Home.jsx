import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
	const navigate = useNavigate();

	return (
		<div className='flex flex-col mt-[40vh] gap-[30vh]  justify-center'>
			<a href='https://wa.me/+5492664463274' target={"blank"}>
				<img
					src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678307454/WhatsApp-Logo.wine_cugmui.svg'
					alt='logo wpp'
					className='fixed w-[13%] bottom-[1px] right-[1px] cursor-pointer z-100'
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
		</div>
	);
};

export default Home;
