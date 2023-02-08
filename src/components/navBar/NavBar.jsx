import React from "react";
import Logo from "../../assets/A color letras blancas.png";
import "./NavBar.css";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
	const navigate = useNavigate();
	const location = useLocation();
	return (
		<nav
			className={
				location.pathname === "/" ? "bg-teal-500 h-[60vh]" : "bg-primary"
			}>
			<ul className='flex justify-evenly items-center py-10'>
				<li className='flex gap-20 text-white font-body tracking-wide cursor-pointer'>
					<a className='list-link'>MERLO </a>
				</li>
				<li className='flex gap-20 text-white font-body tracking-wide cursor-pointer'>
					<a className='list-link'>CABAÑA</a>
				</li>
				<div className='cursor-pointer' onClick={() => navigate("/")}>
					<img className='max-h-40' src={`${Logo}`} alt='logo cabanias' />
				</div>

				<li
					onClick={() => navigate("/reserva")}
					className='flex gap-20 text-white font-body tracking-wide cursor-pointer'>
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
