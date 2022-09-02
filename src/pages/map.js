import React from 'react';
import Navbar from '../components/navbar';
import Mapa from '../components/mapa.jsx';
import '../stylesheets/Map.css';

const Map = () => {
	return (
		<div className='content'>
			<Navbar />
			<div className='map'>
				<h2 className='map-h2'>Mapa</h2>
				<h3 className='map-h3'>Explora México</h3>

				<div className='map-c1'>
					<Mapa />
				</div>
			</div>
		</div>
	);
};
export default Map;
