import React from "react";

const Home = () => {
	return (
		<div className='flex flex-col mt-[60vh] gap-[30vh]  justify-center'>
			<div className='flex space-x-5 px-20 items-center max-h-[300px] border-2 border-black'>
				<div className='w-1/2 relative border-2 border-black w-[500px] h-[300px]'>
					<img
						src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1676488732/Marco_500x300_logo_wajs4x.png'
						alt='marco'
						className='absolute'
					/>
					<img
						src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1676404756/Atardecer_anvcac.jpg'
						alt='atardecer'
						className='w-[420px] h-[220px] right-[40px] top-[40px] rounded-md object-cover hover:brightness-150 cursor-pointer absolute z-10'
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
				<div className=' '>
					<img
						src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1676404736/habitacion_l3thrt.jpg'
						alt=''
						className='max-w-[500px] max-h-[300px] object-cover hover:brightness-150 cursor-pointer'
					/>
				</div>
			</div>
			<div className='flex space-x-5 px-20  items-center'>
				<div className=''>
					<img
						src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1676404745/banio_knrd9m.jpg'
						alt=''
						className='max-w-[500px] max-h-[300px] object-cover hover:brightness-150 cursor-pointer'
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
