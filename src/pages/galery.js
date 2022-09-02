import React from 'react';
import Carousell from '../components/carousel';
import Navbar from '../components/navbar';
import '../stylesheets/galery.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Galery = () => {
	return (
		<div className='content'>
			<Navbar />
			<div className='galery d-flex row'>
				<h2 className='galery-h2'>Galeria</h2>
				<h3 className='galery-h3 p-2 mb-3 shadow-sm '>Flora de México</h3>

				<div className='container-galery'>
					<Carousell />
				</div>
			</div>
		</div>
	);
};
export default Galery;
