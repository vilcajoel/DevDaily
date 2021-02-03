import React from 'react';
import { Link } from 'react-router-dom';
import imagen1 from '../assets/img/logoHolimori.svg';
export const Footer = () => {
	return (
		<>
			<footer className="bottom-0 w-full ">
				<div className="bg-gray-500 flex flex-col md:flex-row md:justify-between text-center px-10 ">
					<div className="flex flex-col md:flex-row text-sm m-3 self-center">
						<div className="flex self-center ">
							<img
								src={imagen1}
								alt="LOGO EMPRESA"
								className="p-2 w-40 h-40 rounded-full md:w-21 md:h-21 "
							/>
						</div>
						<ul className="flex flex-col md:flex-row self-center md:ml-10">
							<li className="p-2 pl-3 font-thin text-white ">
								<Link className="border-b hover:text-gray-200" to="/">
									Términos y condiciones
								</Link>
							</li>
							<li className="p-2 pl-4 font-thin text-white">
								<Link className="border-b hover:text-gray-200" to="/">
									Políticas de privacidad
								</Link>
							</li>
							<li className="p-2 pl-4 font-thin text-white">
								<Link className="border-b hover:text-gray-200" to="/">
									Contáctanos
								</Link>
							</li>
						</ul>
					</div>
					<div className=" flex self-center">
						<ul className="flex flex-row text-2xl m-3 text-center">
							<li>
								<Link to="/" className="px-2 text-yellow-400  hover:text-yellow-500  ">
									<i className="fab fa-facebook transition duration-300  ease-in transform hover:scale-110"></i>
								</Link>
							</li>
							<li>
								<Link to="/" className="px-2 text-yellow-400 hover:text-yellow-500">
									<i className="fab fa-instagram-square transition duration-300 ease-in transform hover:scale-110 "></i>
								</Link>
							</li>
							<li>
								<Link to="/" className="px-2 text-yellow-400 hover:text-yellow-500">
									<i className="fab fa-twitter-square transition duration-300 ease-in transform hover:scale-110 "></i>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
};