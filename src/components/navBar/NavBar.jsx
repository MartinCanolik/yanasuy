import React from "react";
import { Logo } from "../../assets/Assets";
import { useNavigate, useLocation } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Swal from "sweetalert2";

const NavBar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const alertPromotions = () => {
		Swal.fire("Lo sentimos, aun no hay promociones disponibles");
	};
	return (
		<nav className={location.pathname === "/" ? "bg-nav h-[70vh]" : "bg-nav"}>
			<ul className='flex justify-evenly items-center py-10'>
				<li className='flex gap-20 text-white text-lg font-body tracking-wide cursor-pointer'>
					<a className='list-link'>MERLO </a>
				</li>
				<li
					className='flex gap-20 text-white text-lg font-body tracking-wide cursor-pointer'
					onClick={() => navigate("/cabañas")}>
					<a className='list-link'>CABAÑAS</a>
				</li>
				<div className='cursor-pointer' onClick={() => navigate("/")}>
					<img className='max-h-[25vh]' src={`${Logo}`} alt='logo cabanias' />
				</div>

				<li
					onClick={() => alertPromotions()}
					className='flex gap-20 text-white text-lg font-body tracking-wide cursor-pointer'>
					<a className='list-link'>PROMOCIONES</a>
				</li>
				<li
					className='flex gap-20 text-white text-lg
				 font-body tracking-wide cursor-pointer'
					onClick={() => navigate("/contacto")}>
					<a className='list-link'>CONTACTO</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
