import "./App.css";
import Home from "./components/home/Home.jsx";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import CarouselCustom from "./components/carousel/Carousel_custom";
import Contact from "./components/contact/Contact";

function App() {
	return (
		<div className='relative'>
			<NavBar />
			<div className='!absolute top-2/3 inset-x-[10%]'>
				<CarouselCustom />
			</div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contacto' element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
