import React from 'react';
import '../stylesheets/intro.css';
import { Link } from 'react-router-dom';
//http://localhost:3000/Introduccion

const Intro = () => {
	return (
		<div className='content'>
			<div className='intro'>
				<div className='intro-inside'>
					<h4>Conoce nuestra Iniciativa</h4>

					<p>Nuestra pagina tiene como finalidad enseñar parte de la biodiversidad que alberga México.</p>
					<img
						src='https://media.admagazine.com/photos/618a607baf428eae6e0b5871/master/w_1600%2Cc_limit/90442.jpg'
						className='img-fluid intro-pics'
						alt='Flores_01'
					/>
					<p>
						Explora la republica mexicana y sus maravillosos 32 estados en busqueda de las flores y plantas endemicas de
						cada localidad.
					</p>
					<img
						src='https://www.hogarmania.com/archivos/201903/dalias-origen-mexicano-xl-1280x720x80xX.jpg'
						className='img-fluid intro-pics'
						alt='Flores_02'
					/>
					<p>Apoyate en el mapa interactivo y descubre todo lo que México puede ofrecerte.</p>
					<img
						src='https://www.lareserva.com/sites/default/files/styles/article_image/public/field/image/mexff6.jpg?itok=QFzEc8WJ'
						className='img-fluid intro-pics'
						alt='Flores_03'
					/>
					<nav className='intro-link'>
						<Link to='/Home'>
							<button type='button' className='btn btn-outline-danger'>
								<h6>Explorando Mexico</h6>
							</button>
						</Link>
					</nav>
				</div>
			</div>
		</div>
	);
};
export default Intro;
