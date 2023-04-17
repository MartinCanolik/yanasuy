import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./components/home/Home.jsx";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import NavBarMobile from "./components/navBar/NavBarMobile";

import CarouselCustom from "./components/carousel/Carousel_custom";
import Contact from "./components/contact/Contact";
import Booking from "./components/booking/Booking";
import Footer from "./components/footer/Footer";
import Watsapp from "./components/logoWpp/Watsapp";
import Cabañas from "./components/cabanias/Cabañas";

function App() {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	useEffect(() => {
		function handleResize() {
			setIsMobile(window.innerWidth <= 768);
		}

		window.addEventListener("resize", handleResize);

		// limpia el event listener cuando se desmonta el componente
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className=''>
			{isMobile ? <NavBarMobile /> : <NavBar />}
			<Watsapp />
			<div className='!absolute top-[20vh] lg:top-[40vh] lg:inset-x-[10%]'>
				<CarouselCustom />
			</div>
			<Routes>
				<Route path='/' element={<Home {...isMobile} />} />
				<Route path='/contacto' element={<Contact />} />
				<Route path='/promociones' element={<Booking />} />
				<Route path='/cabañas' element={<Cabañas />} />

				<Route path='/cabañas/:name' element={<Cabañas />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
