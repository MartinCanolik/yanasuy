import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { iconPerson } from "../../assets/icon";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";

import ContactForm from "./contactForm";

import "leaflet/dist/leaflet.css";
import "./mapStyle.css";

const Contact = () => {
	const geoCode = [-32.372747, -64.993022];
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div>
				<div className='lg:w-[80vw] h-[70vh] m-auto mt-[20vh] lg:mt-[10vh]'>
					<MapContainer
						style={{ height: "80%", minHeight: "80%", "z-index": 0 }}
						center={geoCode}
						zoom={15}
						scrollWheelZoom={false}>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
						/>
						<Marker icon={iconPerson} position={geoCode}>
							<Popup>Cabañas Yanasuy</Popup>
						</Marker>
					</MapContainer>
					<div className='px-5'>
						<hr className='border-2 border-slate-300 mt-5 w-[20%]' />
						<div className='flex items-center text-teal-700 font-bold gap-2 mt-5'>
							<FaMapMarkerAlt size={"2em"} />
							<h1 className='text-textBlack'>
								Cuesta de las granadillas 1397, Merlo San Luis, Arg.
							</h1>
						</div>
					</div>
				</div>
			</div>
			<div className='flex lg:flex-row flex-col lg:row mx-auto my-20 items-center justify-center w-[80vw] gap-20'>
				<ContactForm />
				<div className='lg:w-1/2 w-full lg:px-20 text-center'>
					<div>
						<h2 className='font-semibold text-base text-teal-700 mt-5'>
							TUS CABAÑAS EN MERLO SAN LUIS
						</h2>
						<p className='text-slate-500 text-base leading-6 pt-5 font-normal list-disc'>
							Pensando en el bienestar y la comodidad de nuestras queridas
							familias decidimos construir nuestras cabañas en dos plantas con
							paredes firmes aislantes revestidas con PIEDRA Y TRONCOS
							respetando el entorno natural, la calidez y la frescura de la
							Sierras.
						</p>
					</div>
					<div className='flex flex-col items-center'>
						<h2 className='font-semibold text-base text-teal-700 mt-10'>
							INFORMACION DE CONTACTO
						</h2>
						<ul className='mx-auto text-slate-500 text-base leading-6 pt-5 font-normal '>
							<li className='flex gap-3 items-center mb-3'>
								<FaEnvelope />
								Email: yanasuy@gmail.com
							</li>
							<li className='flex gap-3 items-center'>
								<FaPhoneAlt />
								Telefono: +54 9 266 446-3274
							</li>
						</ul>
					</div>
					<div className='flex flex-col items-center'>
						<h2 className='font-semibold text-base text-teal-700 mt-10'>
							SOCIAL MEDIA
						</h2>

						<div className='flex gap-10 lg:gap-[20px] mt-5 text-slate-500'>
							<a
								target={"_blank"}
								href='https://www.instagram.com/cabanasyanasuy/'
								className='flex flex-col items-center hover:text-slate-300'
								rel='noreferrer'>
								<BsInstagram size={"1.5em"} />
							</a>
							<a
								target={"_blank"}
								href='https://www.facebook.com/search/top/?q=merlo%20san%20luis%20yanasuy%20caba%C3%B1as'
								className='flex flex-col items-center hover:text-slate-300'
								rel='noreferrer'>
								<BsFacebook size={"1.5em"} />
							</a>

							<a
								href=''
								className='flex flex-col items-center hover:text-slate-300'>
								<BsYoutube size={"1.5em"} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
