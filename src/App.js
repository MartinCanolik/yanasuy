import "./App.css";
import React from "react";
import Home from "./components/home/Home.jsx";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import CarouselCustom from "./components/carousel/Carousel_custom";
import Contact from "./components/contact/Contact";
import Booking from "./components/booking/Booking";
import Footer from "./components/footer/Footer";
import Watsapp from "./components/logoWpp/Watsapp";

function App() {
	return (
		<div className='relative'>
			<NavBar />
			<Watsapp />
			<div className='!absolute top-[40vh] inset-x-[10%]'>
				<CarouselCustom />
			</div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contacto' element={<Contact />} />
				<Route path='/reserva' element={<Booking />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
