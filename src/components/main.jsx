import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from '../pages/welcome';
import Home from '../pages/home';
import About from '../pages/about';
import Error404 from '../pages/error404';
import Map from '../pages/map';
import Intro from '../pages/intro';
import Contact from '../pages/contact';
import Galery from '../pages/galery';
import Flowers from '../assets/Flowers.mp4';
import Mapa from './mapa';

const Main = () => {
	return (
		<div className='main'>
			<div className='filter embed-responsive embed-responsive-16by9' />
			<video className='flores embed-responsive-item' src={Flowers} autoPlay loop muted />
			{/* Para fondo o algo fijo */}
			<div>
				<Routes>
					<Route path='/' element={<Welcome />} />
					<Route path='/Introduccion' element={<Intro />} />
					<Route path='/Home' element={<Home />} />
					<Route path='/Map' element={<Map />} />
					<Route path='/Mapa' element={<Mapa />} />
					<Route path='/About' element={<About />} />
					<Route path='/Galery' element={<Galery />} />
					<Route path='/Contact' element={<Contact />} />
					<Route path='/*' element={<Error404 />} />
				</Routes>
			</div>
		</div>
	);
};

export default Main;
