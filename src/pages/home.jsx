import React from 'react';
import Navbar from '../components/navbar';
import '../stylesheets/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='content'>
			<Navbar />
			<div className='home'>
				<h1 className='home-h1'>Explorando la flora en México</h1>
				<h3 className='home-h3 p-2 mb-3 shadow-sm '>Biodiversidad en México</h3>
				<div className='home-c1 row justify-content-around'>
					<div className='home-c1-c1 text-center col col-sm-4'>
						<p>
							México es uno de los 12 países con mayor diversidad biológica (10 -15% del total de la biodiversidad
							mundial). El pais enfrenta procesos de degradación que afectan al ecosistema: el desarrollo de centros
							urbanos, la contaminación ambiental, la práctica de monocultivos, la caza, captura y colecta ilegales de
							especies, etc.
						</p>
						<img
							src='https://desinformemonos.org/wp-content/uploads/2019/04/mexico2.jpg'
							className='img-fluid home-pics'
							alt='Contaminacion_01'
						/>
					</div>
					<div className='home-c1-c1 text-center col col-sm-4'>
						<p>
							En lo que respecta a la flora nacional, México está entre los cinco países con mayor número de especies de
							plantas vasculares: se han descrito poco más de 25 mil especies (la mayoría angiospermas: 23 791
							especies), lo que equivale aproximadamente al 9.1% de las especies descritas en el mundo (alrededor de 272
							mil).
						</p>
						<img
							src='https://img.ev.mu/images/attractions/2427/960x640/1241.jpg'
							className='img-fluid home-pics'
							alt='Flora_Mx_01'
						/>
					</div>
					<div className='home-c1-c1 text-center col col-sm-4'>
						<p>
							La biodiversidad nacional esta presente en regiones particularmente ricas en especies; Eje Neovolcánico
							Transversal, las Sierras Madre Oriental y Occidental y las zonas donde confluyen las regiones Néartica y
							Neotropical. Oaxaca, Veracruz y Chiapas son las entidades con más especies de vertebrados, plantas
							vasculares y artrópodos.
						</p>
						<img
							src='https://i0.wp.com/hipertextual.com/wp-content/uploads/2015/10/Paisaje_de_la_Sierra_Madre_Occidental-scaled.jpg?fit=2560%2C1707&ssl=1'
							className='img-fluid home-pics'
							alt='Sierra_Madre_01'
						/>
					</div>
				</div>
				<div className='home-c2 text-center justify-content-md-center '>
					<p>
						Las cifras citadas anteriormente no son definitivas; la riqueza de especies aumentará para muchos grupos
						taxonómicos en la medida en que se profundice el estudio de la diversidad y de zonas del país que hasta el
						momento han sido poco exploradas.
					</p>
					<div className='container-home d-flex'>
						<div className='container-home-img'>
							<img
								src='https://i.pinimg.com/550x/ff/f8/c5/fff8c5b941db40e0c455ecb67e7861f2.jpg'
								className='img-fluid home-pics'
								alt='Mexico_01'
							/>
							<div className='middle'>
								<div className='text'>Loreto, B.C.S. </div>
							</div>
						</div>

						<div className='container-home-img'>
							<img
								src='https://padondenosvamos.com/wp-content/uploads/2018/01/hidden-beach-marieta-islands-8.jpg'
								className='img-fluid home-pics'
								alt='Mexico_02'
							/>
							<div className='middle'>
								<div className='text'>Pto. Vallarta, Jalisco.</div>
							</div>
						</div>

						<div className='container-home-img'>
							<img
								src='https://farm8.staticflickr.com/7218/6897127618_8b9354e253.jpg'
								className='img-fluid home-pics'
								alt='Mexico_03'
							/>
							<div className='middle'>
								<div className='text'>Chichen Itza, Yucatan.</div>
							</div>
						</div>
					</div>
				</div>
				<div className='home-c3'>
					<Link className='link' to='/About'>
						<button type='button' className='btn btn-outline-danger'>
							<h6>About</h6>
						</button>
					</Link>
					<Link className='link' to='/Map'>
						<button type='button' className='btn btn-outline-danger'>
							<h6>Map</h6>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
