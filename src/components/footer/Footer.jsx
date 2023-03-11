import React from "react";
import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";

const logoFooter =
	"https://res.cloudinary.com/drhj3sc2o/image/upload/v1678544614/A_color_horizontal_letras_blancas_pxu19v.svg";
const logoInsta =
	"https://w7.pngwing.com/pngs/11/681/png-transparent-instagram-logo-baba-ghanoush-falafel-tabbouleh-party-battle-egg-salad-white-instagram-logo-rectangle-tuna-salad-symbol-thumbnail.png";
const logoFace = "";
const logoYou = "";

const Footer = () => {
	return (
		<footer className='flex items-center justify-between px-10 bg-nav h-[40vh]'>
			<div className='w-[20%]'>
				<img src={logoFooter} alt='logo footer' />
			</div>
			<div className='flex gap-[30px]'>
				<a href='' className=' text-white'>
					<BsInstagram size={"2em"} />
				</a>
				<a href='' className=' text-white'>
					<BsFacebook size={"2em"} />
				</a>
				<a href='' className=' text-white'>
					<BsYoutube size={"2em"} />
				</a>
			</div>
			<div className='flex flex-col items-center justify-start gap-1'>
				<h1 className='text-white font-body text-xl'>Contacto</h1>
				<ul className=' text-white  text-xm'>
					<li>Email: info@yanasuy.com</li>
					<li>Telefono: +54 9 266 446-3274</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
