import React from 'react';
import logoNavbar from '../images/ajenjo.png';
import { Link } from 'react-router-dom';
import '../stylesheets/navbar.css';

const Navbar = () => {
	return (
		<div>
			<nav className='navbar navbar-expand-lg navbar-dark fixed-top'>
				<a className='navbar-brand' href='/'>
					<img src={logoNavbar} width='30' height='30' alt='' />
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav mr-auto'>
						<li className='nav-item active'>
							<Link className='nav-link' to='/Home'>
								Home <span className='sr-only'></span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/About'>
								About
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/Map'>
								Map
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/Galery'>
								Galery
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/Contact'>
								Contact
							</Link>
						</li>
					</ul>
					{/* <form className='form-inline my-2 my-lg-0'>
						<input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search'></input>
						<button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
							Search
						</button>
					</form> */}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
