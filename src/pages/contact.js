import React from 'react';
import Navbar from '../components/navbar';
import '../stylesheets/contact.css';
import git from '../images/icons/github.png';
import code from '../images/icons/codepen.png';
import inst from '../images/icons/instagram.png';
import twit from '../images/icons/twitter.png';

const Contact = () => {
	return (
		<div className='content'>
			<Navbar />
			<div className='contact'>
				<h2 className='contact-h2'>Contactame</h2>
				<h3 className='contact-h3'>Buscame en redes sociales...</h3>
				<div className='container-contact'>
					<div className='contact-c1 d-flex'>
						<a
							className='text-danger contact-c1-a'
							href='https://github.com/LukitaChan'
							rel='noopener noreferrer'
							target='_blank'>
							<img src={git} alt='Github' />
							<p>Github</p>
						</a>

						<a
							className='text-danger contact-c1-a'
							href='https://codepen.io/lucy-chable'
							rel='noopener noreferrer'
							target='_blank'>
							<img src={code} alt='Codepen' />
							<p>Codepen</p>
						</a>

						<a
							className='text-danger contact-c1-a'
							href='https://www.instagram.com/lukitachan/'
							rel='noopener noreferrer'
							target='_blank'>
							<img src={inst} alt='Instagram' />
							<p>Instagram</p>
						</a>

						<a
							className='text-danger contact-c1-a'
							href='https://twitter.com/Lukita_Chan'
							rel='noopener noreferrer'
							target='_blank'>
							<img src={twit} alt='Twitter' />
							<p>Twitter</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
