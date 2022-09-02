import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/welcome.css';
//http://localhost:3000/

const Welcome = () => {
	return (
		<main className='welkome'>
			<nav className='welkome-link'>
				<Link to='/Introduccion' className='welkome-link'>
					<div className='filter-welkome' />
					<h1>Bienvenido</h1>
					<p>Haz click</p>
				</Link>
			</nav>
		</main>
	);
};

export default Welcome;
