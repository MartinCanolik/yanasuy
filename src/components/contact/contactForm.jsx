import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../../schema/schema";
import axios from "axios";
import Swal from "sweetalert2";

const ContactForm = () => {
	const swappUpSuccess = (name) => {
		Swal.fire({
			icon: "success",
			title: `Gracias ${name} por enviar su consulta! <br> Su solicitud sera respondida a la brevedad.`,
			showConfirmButton: false,
			timer: 2500,
		});
	};
	const swappUpError = () => {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Ha ocurrido un error al intentar enviar el email",
			footer: '<a href="">Intente con algun medio de contacto alternativo</a>',
		});
	};

	const submitForm = async (values) => {
		try {
			const response = await axios({
				method: "post",
				url: "https://api.sendinblue.com/v3/smtp/email",
				data: {
					sender: {
						name: `${values.firstName} ${values.lastName}`,
						email: "martin.canolik@gmail.com",
					},
					to: [
						{
							email: "martin.canolik@gmail.com",
							name: "Martin Canolik",
						},
					],
					subject: "Solicitud De Reserva !",
					htmlContent: `<html><head></head><body>
						<h2>Consulta: </h2>
						<p>${values.query}</p>
						<span><b>Adultos: </b> ${values.adults}</span><br>
						<span><b>Niños: </b> ${values.children}</span><br>
						<span><b>Email: </b> ${values.email}</span><br>
						<span><b>Telefono: </b> ${values.phone}</span><br>
						<span><b>Desde: </b> ${values.startDate} <b>Hasta: </b> ${values.endDate}</span><br>
						</body></html>`,
				},
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					"api-key": process.env.REACT_APP_API_KEY,
				},
			});
			swappUpSuccess(values.firstName);

			console.log(response);
		} catch (err) {
			swappUpError();
			console.log(err);
		}
	};
	return (
		<div className='lg:w-1/2 w-full flex flex-col'>
			<Formik
				initialValues={{
					firstName: "",
					email: "",
					phone: "",
					query: "",
				}}
				onSubmit={(values, { resetForm }) => {
					submitForm({ ...values });
					resetForm();
				}}
				validationSchema={validationSchema}>
				<Form>
					<h1 className='font-semibold text-3xl text-teal-700'>Contactenos</h1>
					<hr className='border-2 border-slate-300 my-5 w-[20%]' />

					<label
						htmlFor='firstName '
						className='font-semibold text-headerBlack'>
						Nombre
					</label>
					<Field
						type='text'
						name='firstName'
						className='appearance-none text-sm mt-2 py-2 px-3 w-full text-sm mt-2 py-2 px-3  text-gray-700 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
					/>
					<ErrorMessage name='firstName'>
						{(msg) => (
							<div className='text-customRed italic pl-1 text-xs font-semibold'>
								{msg}
							</div>
						)}
					</ErrorMessage>
					<div>
						<label htmlFor='email' className=''>
							Email
						</label>
						<Field
							type='text'
							name='email'
							className='appearance-none text-sm mt-2 py-2 px-3 w-full text-sm mt-2 py-2 px-3 text-gray-700 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
						/>
						<ErrorMessage name='email'>
							{(msg) => (
								<div className='text-customRed italic pl-1 text-xs font-semibold'>
									{msg}
								</div>
							)}
						</ErrorMessage>
					</div>
					<div>
						<label htmlFor='phone' className=''>
							Telefono
						</label>
						<Field
							type='text'
							name='phone'
							className='appearance-none text-sm mt-2 py-2 px-3 w-full text-sm mt-2 py-2 px-3  text-gray-700 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
						/>
						<ErrorMessage name='phone'>
							{(msg) => (
								<div className='text-customRed italic pl-1 text-xs font-semibold'>
									{msg}
								</div>
							)}
						</ErrorMessage>
					</div>
					<label htmlFor='query' className=''>
						Consulta
					</label>
					<div>
						<Field
							placeholder='Deje su consulta...'
							component='textarea'
							name='query'
							className='appearance-none text-sm mt-2 py-2 px-3 w-full  h-20 bg-slate-100 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 scroll-y'
						/>
					</div>

					<button
						type='submit'
						// disabled={isSubmitting}
						className=' bg-red-400 hover:bg-nav text-white font-bold mx-auto mt-2 py-2 px-4 rounded border-2 border-transparent focus:outline-none focus:shadow-outline hover:text-green-800 hover:border-green-800 disabled:opacity-5'>
						Enviar
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default ContactForm;
