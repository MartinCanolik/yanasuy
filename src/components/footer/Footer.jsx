/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
const logoFooter =
	"https://res.cloudinary.com/drhj3sc2o/image/upload/v1678544614/A_color_horizontal_letras_blancas_pxu19v.svg";

const Footer = () => {
	return (
		<footer className='flex items-center justify-between px-10 bg-nav h-[40vh]'>
			<div className='w-[20%]'>
				<img src={logoFooter} alt='logo footer' />
			</div>
			<div className='flex flex-col items-center jusify-center gap-5'>
				<h1 className='text-white font-body text-xl'>
					Seguinos en nuestras redes
				</h1>
				<div className='flex gap-[30px]'>
					<a
						target={"_blank"}
						href='https://www.instagram.com/cabanasyanasuy/'
						className='flex flex-col items-center text-white hover:text-slate-300'
						rel='noreferrer'>
						<BsInstagram size={"2em"} />
						<p>Instagram</p>
					</a>
					<a
						target={"_blank"}
						href='https://www.facebook.com/search/top/?q=merlo%20san%20luis%20yanasuy%20caba%C3%B1as'
						className='flex flex-col items-center text-white hover:text-slate-300'
						rel='noreferrer'>
						<BsFacebook size={"2em"} />
						<p>Facebook</p>
					</a>

					<a
						href=''
						className='flex flex-col items-center text-white hover:text-slate-300'>
						<BsYoutube size={"2em"} />
						<p>Youtube</p>
					</a>
				</div>
			</div>
			<div className='flex flex-col items-center justify-start gap-1'>
				<ul className='flex flex-col gap-2 text-white text-xm'>
					<li className='flex gap-3'>
						<FaMapMarkerAlt /> Cuesta de las granadillas 1397, Merlo San Luis,
						Arg.
					</li>
					<li className='flex gap-3'>
						<FaEnvelope /> Email: info@yanasuy.com
					</li>
					<li className='flex gap-3'>
						<FaPhoneAlt /> Telefono: +54 9 266 446-3274
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
