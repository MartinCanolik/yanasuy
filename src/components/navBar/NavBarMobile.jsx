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
		<nav className='fixed top-0 w-full z-50 bg-nav h-[20vh] pt-10 '>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					<div className='cursor-pointer' onClick={() => navigate("/")}>
						<img className='w-[60vw]' src={LogoMobile} alt='logo cabanias' />
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
			</div>

			<div
				className={` ${
					isOpen
						? "  transition-transform duration-300 transform translate-x-0 absolute bg-nav z-50 top-[19vh] h-[100vh] w-[100vw]"
						: " transition-transform duration-300 transform translate-x-full absolute bg-nav z-50 top-[19vh] h-[100vh] w-[100vw]"
				} md:hidden`}>
				<ul className='flex flex-col justify-start gap-3 items-center py-10'>
					<li className='flex gap-20 text-white text-sm font-body tracking-wide cursor-pointer'>
						<a className='list-link'>MERLO </a>
					</li>
					<li
						className='flex gap-20 text-white text-sm font-body tracking-wide cursor-pointer'
						onClick={() => navigate("/cabañas")}>
						<a className='list-link'>CABAÑAS</a>
					</li>

					<li
						onClick={() => alertPromotions()}
						className='flex gap-20 text-white text-sm font-body tracking-wide cursor-pointer'>
						<a className='list-link'>PROMOCIONES</a>
					</li>
					<li
						className='flex gap-20 text-white text-sm font-body tracking-wide cursor-pointer'
						onClick={() => navigate("/contacto")}>
						<a className='list-link'>CONTACTO</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBarMobile;
