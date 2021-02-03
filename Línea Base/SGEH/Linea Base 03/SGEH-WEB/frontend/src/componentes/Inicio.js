import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import fondo4 from '../assets/img/Boda1.jpg';
import fondo3 from '../assets/img/cumple1.jpg';
//Poner imagen de fondo!
import fondo1 from '../assets/img/infantil1.jpg';
import logo1 from '../assets/img/logoHolimori.svg';
//Imagenes para testimonio
import testimonio1 from '../assets/img/persona1.jpg';
import testimonio2 from '../assets/img/persona2.jpg';
import testimonio3 from '../assets/img/persona3.jpg';
import fondo2 from '../assets/img/quince1.jpg';
import { Footer } from './Footer';
import { NavBar } from './NavBar';





export const Inicio = () => {
	return (
		<>
			<NavBar />

			<div className="bg-gray-100 pb-10">
				<div className="slide-container">
					<Slide>
						<div className="each-slide">
							<div
								className="flex flex-col items-center justify-center"
								style={{ backgroundImage: `url(${fondo1})`, height: `calc(100vh - 60px)`, backgroundSize: `cover` }}
							></div>
						</div>
						<div className="each-slide">
							<div
								className="flex flex-col items-center justify-center"
								style={{ backgroundImage: `url(${fondo2})`, height: `calc(100vh - 60px)`, backgroundSize: `cover` }}
							></div>
						</div>
						<div className="each-slide">
							<div
								className="flex flex-col items-center justify-center"
								style={{ backgroundImage: `url(${fondo3})`, height: `calc(100vh - 60px)`, backgroundSize: `cover` }}
							></div>
						</div>
						<div className="each-slide">
							<div
								className="flex flex-col items-center justify-center"
								style={{ backgroundImage: `url(${fondo4})`, height: `calc(100vh - 60px)`, backgroundSize: `cover` }}
							></div>
						</div>
					</Slide>
				</div>
				<div className="sm:flex flex-wrap justify-center items-center text-center gap-8">
					<div className="transform duration-500 ease-in-out hover:rotate-3 hover:scale-95 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
						<div className="flex-shrink-0">
							<div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="h-6 w-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
									/>
								</svg>
							</div>
						</div>
						<h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
							Cumpleaños 
						</h3>
						<p className="text-md  text-gray-500 dark:text-gray-300 py-2">
							Ofrecemos tanto shows infantiles como fiestas para jóvenes centrándonos en la temática que
							sea de la preferecia del cliente.
						</p>
					</div>
					<div className="transform duration-500 ease-in-out hover:-rotate-3 hover:scale-95 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
						<div className="flex-shrink-0">
							<div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="h-6 w-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
									/>
								</svg>
							</div>
						</div>
						<h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
							15 años
						</h3>
						<p className="text-md text-gray-500 dark:text-gray-300 py-2">
							Nos encargamos de planear cada aspecto de la celebración del 15 años soñado brindando
							catering, decoración, show de luces, entre otros servicios.
						</p>
					</div>
					<div className="transform duration-500 ease-in-out hover:rotate-3 hover:scale-95 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
						<div className="flex-shrink-0">
							<div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="h-6 w-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
									/>
								</svg>
							</div>
						</div>
						<h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">Bodas</h3>
						<p className="text-md  text-gray-500 dark:text-gray-300 py-2">
							Somos expertos en el diseño, decoración y organización tanto de bodas civiles como
							religiosas para que ese día especial siempre quede guardado.
						</p>
					</div>
				</div>
				<div className="mt-20 px-6 py-6 bg-yellow-600 dark:bg-gray-800 rounded-lg md:mx-12 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
					<div className="xl:w-0 xl:flex-1">
						<h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
							Recibe notificaciones sobre promociones u ofertas de tu evento ideal
						</h2>
						<p className="mt-3 max-w-3xl text-lg leading-6 text-gray-100">
							Se necesita el registro de un email personal para poder enviar semanalmente cada nueva
							promoción existente en nuestro catálogo de eventos.
						</p>
					</div>
					<div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
						<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
							<button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-lg rounded-md text-white bg-yellow-700 hover:bg-yellow-500 focus:outline-none transition duration-500 ease-in-out transform hover:scale-105">
								¡Notifícame!
							</button>
						</div>
						<p className="mt-3 text-sm leading-5 text-yellow-100">
							Nos preocupamos por la protección de sus datos por lo que están seguros y nunca se utilizarán
							con fines comerciales.
						</p>
					</div>
				</div>
				<p className="text-center font-serif text-5xl mt-10 py-4">Testimonios</p>
				<hr />
				<div className="w-full flex flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-8 ">
					<div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
						<p className="text-gray-600 dark:text-white">
							<span className="font-bold text-yellow-500 text-lg">“</span>
							Mi experiencia trabajando con HoliMori fue realmente buena, me ayudaron a organizar el
							cumpleaños 50 de mi madre logrando traducir todas mis ideas en realidad
							<span className="font-bold text-yellow-500 text-lg">”</span>
						</p>
						<div className="flex items-center mt-4">
							<Link to="/" className="block relative">
								<img alt="profil" src={testimonio1} className="mx-auto rounded-full h-10 w-10 " />
							</Link>
							<div className="flex flex-col ml-2 justify-between">
								<span className="font-semibold text-yellow-500 text-sm">Andrea Gomez</span>
								<span className="dark:text-gray-400 text-xs flex  items-center">
									Usuaria de HoliMori
									<img src={logo1} className="ml-3 h-12 w-12" alt=""/>
								</span>
							</div>
						</div>
					</div>
					<div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
						<p className="text-gray-600 dark:text-white">
							<span className="font-bold text-yellow-500 text-lg">“</span>
							¡Mi experiencia con HoliMori fue increíble! Desde la primera reunión para organizar el
							cumpleaños de mi pequeña hija mostraron el gran profesionalismo que tienen. Realmente los
							recomiendo.
							<span className="font-bold text-yellow-500 text-lg">”</span>
						</p>
						<div className="flex items-center mt-4">
							<Link to="/" className="block relative">
								<img alt="profil" src={testimonio2} className="mx-auto rounded-full h-10 w-10 " />
							</Link>
							<div className="flex flex-col ml-2 justify-between">
								<span className="font-semibold text-yellow-500 text-sm">Rodrigo Salazar</span>
								<span className="dark:text-gray-400 text-xs flex items-center">
									Usuario de HoliMori
									<img src={logo1} className="ml-3 h-12 w-12" alt=""/>
								</span>
							</div>
						</div>
					</div>
					<div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
						<p className="text-gray-600 dark:text-white">
							<span className="font-bold text-yellow-500 text-lg">“</span>
							Sólo quiero definir mi experiencia bajo la siguiente frase: “mi boda fue mejor en todos los
							sentidos que en mis sueños”. Todo lo que pedimos lo pudieron conseguir con la mejor calidad
							<span className="font-bold text-yellow-500 text-lg">”</span>
						</p>
						<div className="flex items-center mt-4">
							<Link to="/" className="block relative">
								<img alt="profil" src={testimonio3} className="mx-auto rounded-full h-10 w-10 " />
							</Link>
							<div className="flex flex-col ml-2 justify-between">
								<span className="font-semibold text-yellow-500 text-sm">Alexandra Robles</span>
								<span className="dark:text-gray-400 text-xs flex items-center">
									Usuaria de HoliMori
									<img src={logo1} className="ml-3 h-12 w-12" alt=""/>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};
