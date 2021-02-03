import React from 'react';
import { Footer } from './Footer';
import { NavBar } from './NavBar';

export const AboutUs = () => {
	return (
		<>
			<NavBar />

			<div className="container mx-auto px-6 p-6 bg-white dark:bg-gray-800">
				<div className="mb-16 text-center">
					<h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">HoliMori</h2>
					<p className="mt-2 text-1xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
						Empresa de eventos
					</p>
				</div>
				<div className="flex flex-wrap my-12 dark:text-white">
					<div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
						<div className="flex items-center mb-6">
							<svg
								width="20"
								height="20"
								fill="currentColor"
								className="h-6 w-6 text-indigo-500"
								viewBox="0 0 1792 1792"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
							</svg>
							<div className="ml-4 text-xl">Consiga promociones de eventos</div>
						</div>
						<p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
						Lo más probable es que en su próximo evento requiera 
						que sus reservas tengan promociones únicas por lo que 		
						puede encontrarlas aquí.

						</p>
					</div>
					<div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
						<div className="flex items-center mb-6">
							<svg
								width="20"
								height="20"
								fill="currentColor"
								className="h-6 w-6 text-indigo-500"
								viewBox="0 0 1792 1792"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
							</svg>
							<div className="ml-4 text-xl">Gane credenciales </div>
						</div>
						<p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
						Consiga credenciales y gane puntos por cada reserva de evento		
						para mejorar sus promociones.
						</p>
					</div>
					<div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
						<div className="flex items-center mb-6">
							<svg
								width="20"
								height="20"
								fill="currentColor"
								className="h-6 w-6 text-indigo-500"
								viewBox="0 0 1792 1792"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
							</svg>
							<div className="ml-4 text-xl">Conecte con más oportunidades </div>
						</div>
						<p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
						Regístrese en nuestra página para recibir asesoramiento y 	
						ayuda para encontrar mejores oportunidades.
						</p>
					</div>
					<div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
						<div className="flex items-center mb-6">
							<svg
								width="20"
								height="20"
								fill="currentColor"
								className="h-6 w-6 text-indigo-500"
								viewBox="0 0 1792 1792"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
							</svg>
							<div className="ml-4 text-xl">Ponga en marcha su evento</div>
						</div>
						<p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
						Hay diversos tipos de eventos en los que se puede interesar para tu posterior reserva.
					    Independientemente 	de sus preferencias, hay una cotización ideal para usted.
						</p>
					</div>
					<div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
						<div className="flex items-center mb-6">
							<svg
								width="20"
								height="20"
								fill="currentColor"
								className="h-6 w-6 text-indigo-500"
								viewBox="0 0 1792 1792"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
							</svg>
							<div className="ml-4 text-xl">Consiga beneficios</div>
						</div>
						<p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
						Complete su reserva y podrá conseguir mejores 		
						beneficios en sus próximas cotizaciones.

						</p>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 p-8">
						<div className="flex items-center mb-6">
							<svg
								width="20"
								height="20"
								fill="currentColor"
								className="h-6 w-6 text-indigo-500"
								viewBox="0 0 1792 1792"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
							</svg>
							<div className="ml-4 text-xl">Explore HoliMori</div>
						</div>
						<p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
						Encuentre reservas, promociones, beneficios y todo lo 	
						que necesite para su evento.

						</p>
					</div>
				</div>
			</div>

			<p className='text-center text-5xl	py-4'>¡Conócenos!</p>
            <hr/>
			<div className="bg-lightblue py-20 px-4">
				<div className="mx-auto max-w-6xl flex flex-col md:flex-row">
					<h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
						Nosotros
					</h2>
					<dl className="w-full md:w-2/3">
						<dt className="mb-4">
							<h3 className="text-xl font-semibold">
							Misión
							</h3>
						</dt>
						<dd className="mb-16">
							<p>
							Contribuir a la automatizacion de reservaciones, poniendo a su disposición
							productos de la máxima calidad para cualquier momento del día  y gestionando 
							los negocios de manera que creen valor para la compañía a la vez que para la sociedad.
							</p>
						</dd>
						<dt className="mb-4">
							<h3 className="text-xl font-semibold">
							Visión
							</h3>
						</dt>
						<dd className="mb-16">
							<p>
							Ser la empresa reconocida como líder en reserva de eventos por parte de sus consumidores,
							empleados, clientes, proveedores y todos los grupos de interés relacionados con la actividad de la compañía.

							</p>
						</dd>
						<dt className="mb-4">
							<h3 className="text-xl font-semibold">Valores</h3>
						</dt>
						<dd className="mb-16">
							<p>- Trabajo en equipo</p>
							<p>- Flexibilización y adaptación al cambio</p>
							<p>- Innovación permanente </p>
							<p>- Orientación hacia el cliente en productos y servicios </p>
							<p>- Responsabilidad Social Empresarial </p>
						</dd>
					</dl>
				</div>
			</div>
			<Footer />
		</>
	);
};
