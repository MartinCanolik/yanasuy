/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../assets/A color letras blancas.png";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
	const navigate = useNavigate();
	const location = useLocation();
	return (
		<nav className={location.pathname === "/" ? "bg-nav h-[70vh]" : "bg-nav"}>
			<ul className='flex justify-evenly items-center py-10'>
				<li className='flex gap-20 text-white text-lg font-body tracking-wide cursor-pointer'>
					<a className='list-link'>MERLO </a>
				</li>
				<li className='flex gap-20 text-white text-lg font-body tracking-wide cursor-pointer'>
					<a className='list-link'>CABAÑA</a>
				</li>
				<div className='cursor-pointer' onClick={() => navigate("/")}>
					<img className='max-h-[25vh]' src={`${Logo}`} alt='logo cabanias' />
				</div>

				<li
					onClick={() => navigate("/reserva")}
					className='flex gap-20 text-white text-lg font-body tracking-wide cursor-pointer'>
					<a className='list-link'>RESERVAS</a>
				</li>
				<li
					className='flex gap-20 text-white text-lg
				 font-body tracking-wide cursor-pointer'>
					<a className='list-link'>CONTACTO</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
