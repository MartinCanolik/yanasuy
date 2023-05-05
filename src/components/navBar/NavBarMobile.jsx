import React, { useState } from "react";
import { LogoMobile } from "../../assets/Assets";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NavBarMobile = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const alertPromotions = () => {
		Swal.fire("Lo sentimos, aun no hay promociones disponibles");
	};

	return (
		<nav className='fixed top-0 w-full z-50 '>
			<div className='flex bg-nav h-[20vh] items-center justify-between max-w-7xl mx-auto px-5 sm:px-6 lg:px-8'>
				<div
					className='cursor-pointer'
					onClick={() => {
						navigate("/");
						setIsOpen(false);
					}}>
					<img className='w-[55vw]' src={LogoMobile} alt='logo cabanias' />
				</div>

				<div className=' flex '>
					<button
						onClick={() => setIsOpen(!isOpen)}
						type='button'
						className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
						aria-controls='mobile-menu'
						aria-expanded='false'>
						<span className='sr-only'>Open main menu</span>
						<svg
							className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							aria-hidden='true'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16M4 18h16'
							/>
						</svg>
						<svg
							className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							aria-hidden='true'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</button>
				</div>
			</div>

			<div
				className={` ${
					isOpen
						? "  transition-all duration-300 transform translate-x-0 opacity-100 absolute  bg-gray-800 z-50 top-[19vh] h-[100vh] w-[100vw]"
						: " transition-all duration-300 transform translate-x-full opacity-0 absolute bg-gray-800 z-50 top-[19vh] h-[100vh] w-[100vw]"
				} md:hidden`}>
				<ul className='flex flex-col items-center pt-[30%] gap-10'>
					<li
						className='flex text-white text-sm font-body tracking-wide cursor-pointer'
						onClick={() => {
							navigate("/cabañas");
							setIsOpen(false);
						}}>
						<a className='list-link'>CABAÑAS</a>
					</li>
					<hr className='border-1 border-white opacity-50 w-1/3' />
					<li
						onClick={() => {
							alertPromotions();
							setIsOpen(false);
						}}
						className='flex text-white text-sm font-body tracking-wide cursor-pointer'>
						<a className='list-link'>PROMOCIONES</a>
					</li>
					<hr className='border-1 border-white opacity-50 w-1/3' />
					<li
						className='flex text-white text-sm font-body tracking-wide cursor-pointer'
						onClick={() => {
							navigate("/contacto");
							setIsOpen(false);
						}}>
						<a className='list-link'>CONTACTO</a>
					</li>
					<hr className='border-1 border-white opacity-50 w-1/3' />

					<li
						className='flex text-white text-sm font-body tracking-wide cursor-pointer'
						onClick={() => {
							navigate("/merlo");
							setIsOpen(false);
						}}>
						<a className='list-link'>MERLO </a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBarMobile;
