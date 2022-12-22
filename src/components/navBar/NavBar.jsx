import React from "react";
import Logo from "../../assets/A color letras blancas.png";
import "./NavBar.css";

const NavBar = () => {
	return (
		<nav className=' bg-teal-500 h-[60vh]'>
			<ul className='flex justify-evenly items-center py-10'>
				<li className='flex gap-20 text-white font-body tracking-wide cursor-pointer'>
					<a className='list-link'>MERLO </a>
				</li>
				<li className='flex gap-20 text-white font-body tracking-wide cursor-pointer'>
					<a className='list-link'>SOBRE NOSOTROS</a>
				</li>
				<div>
					<img className='max-h-40' src={`${Logo}`} alt='logo cabanias' />
				</div>

				<li className='flex gap-20 text-white font-body tracking-wide cursor-pointer'>
					<a className='list-link'>RESERVAS</a>
				</li>
				<li className='flex gap-20 text-white font-body tracking-wide cursor-pointer'>
					<a className='list-link'>CONTACTO</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
