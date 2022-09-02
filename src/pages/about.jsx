import React from 'react';
import Navbar from '../components/navbar';
import '../stylesheets/about.css';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div className='content'>
			<Navbar />
			<div className='about'>
				<h2 className='about-h2'>Acerca</h2>
				<h3 className='about-h3 p-2 mb-3 shadow-sm '>¿Que deseamos compartir?</h3>
				<div className='about-c1 d-flex justify-content-center'>
					<p className='about-c1-p col-sm-8'>
						Es importante decir que aunque el inventario de la riqueza biológica nacional ha avanzado
						significativamente, grupos como los hongos, los invertebrados y los organismos microscópicos no han sido
						suficientemente estudiados, así como también ciertas zonas geográficas y ecosistemas.
					</p>
					<img
						src='https://brunoticias.com/wp-content/uploads/2017/08/parque-micologico.jpg'
						className='about-pics col-sm-4 img-fluid'
						alt='hongo_01'
					/>
				</div>
				<div className='about-c1 d-flex justify-content-center'>
					<p className='about-c1-p col-sm-7'>
						La biodiversidad mexicana también resalta por su alto índice de endemismos, es decir, por la presencia de
						especies que solamente se encuentran dentro del territorio mexicano. Del total de vertebrados que habitan en
						nuestro territorio, 20% son endémicos; si se examina por grupos:
					</p>
					<ul className='about-c1-ul col-sm-5'>
						<li>El 46% de las especies de reptiles son endémicos (368 especies de 804 totales);</li>
						<li>30% de los mamíferos (161 de 535)</li>
						<li>48% de los anfibios (174 de 361)</li>
						<li>y 11% de las aves (125 de 1 096 especies.</li>
					</ul>
				</div>
				<div className='about-c1 d-flex justify-content-center'>
					<p className='about-c1-p col-sm-8'>
						Por su parte, de las especies de plantas vasculares que se conocen en el país, se calcula que entre 50 y 60%
						son endémicas con algunas familias botánicas excepcionalmente ricas en endemismos, como las orquídeas y
						cactáceas.
					</p>
					<img
						src='https://www.agromarketing.mx/wp-content/uploads/2018/03/donde-vive-la-orquidea-730x486.jpg'
						className='about-pics col-sm-4 img-fluid'
						alt='orquidea_01'
					/>
				</div>
				<div className='about-c2 d-flex justify-content-center'>
					<img
						className='about-pics2'
						src='https://www.eluniversal.com.mx/sites/default/files/2020/06/04/jaguar_especies_peligro.jpg'
						alt='jaguar_01'
					/>
					<div className='testo text-block d-flex'>
						<h5>Jaguar</h5>
						<p>Sureste de México</p>
					</div>
				</div>
				<div className='about-c2 d-flex justify-content-center'>
					<img
						className='about-pics2'
						src='https://invdes.com.mx/wp-content/uploads/2017/09/15-09-17-ajolote.jpg'
						alt='ajolote_01'
					/>
					<div className='testo text-block d-flex'>
						<h5>Ajolote</h5>
						<p>Xochimilco</p>
					</div>
				</div>
				<div className='about-c2 d-flex justify-content-center'>
					<img
						className='about-pics2'
						src='https://blog.xcaret.com/es/wp-content/uploads/2021/09/Antonio-Bello-Lobo-Mexicano.jpg'
						alt='lobo_01'
					/>
					<div className='testo text-block d-flex'>
						<h5>Lobo Mexicano</h5>
						<p>Desiertos, zonas semiáridas y bosques de México</p>
					</div>
				</div>
				<div className='home-c3'>
					<Link className='link' to='/Home'>
						<button type='button' className='btn btn-outline-danger'>
							<h6>Home</h6>
						</button>
					</Link>
					<Link className='link' to='/Galery'>
						<button type='button' className='btn btn-outline-danger'>
							<h6>Galery</h6>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default About;
