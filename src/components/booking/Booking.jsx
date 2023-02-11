import React, { useState } from "react";
import DateRangeComp from "./DateRangeComp";
import { Formik, Form, Field, ErrorMessage } from "formik";
import format from "date-fns/format";
import axios from "axios";
import Swal from "sweetalert2";

const Booking = () => {
	const [stay, setStay] = useState([]);
	const swappUp = (name) => {
		console.log("entre!");
		Swal.fire({
			icon: "success",
			title: `Gracias ${name} por enviar su sonsulta! <br> Su solicitud sera respondida a la brevedad.`,
			showConfirmButton: false,
			timer: 2500,
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
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};
	const startDate = stay.length && format(stay[0].startDate, "dd/MM/yyyy");
	const endDate = stay.length && format(stay[0].endDate, "dd/MM/yyyy");

	return (
		<div>
			<Formik
				initialValues={{
					adults: "",
					children: "",
					firstName: "",
					lastName: "",
					email: "",
					query: "",
					phone: "",
				}}
				onSubmit={(values, { resetForm }) => {
					submitForm({ ...values, startDate, endDate });
					swappUp(values.firstName);

					resetForm();
				}}>
				{({ isSubmitting, errors }) => (
					<Form className='w-full max-w-2xl bg-primary mx-auto p-4 flex flex-col justify-center items-center gap-2 my-8 rounded'>
						<div className='w-full md:w-1/2 px-3 py-3'>
							<div className='flex'>
								<div className='w-1/2 cursor-pointer pr-5'>
									<label
										htmlFor='adults'
										className='block tracking-wide text-white text-s font-bold mb-2'>
										Adultos
									</label>
									<Field
										className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
										component='select'
										id='adults'
										name='adults'>
										<option value='0'>0</option>
										<option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
										<option value='5'>5</option>
									</Field>
								</div>
								<div className='w-1/2 cursor-pointer pl-5'>
									<label
										htmlFor='children'
										className='block tracking-wide text-white text-s font-bold mb-2'>
										Niños
									</label>
									<Field
										className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
										component='select'
										id='children'
										name='children'>
										<option value='0'>0</option>
										<option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
										<option value='5'>5</option>
									</Field>
								</div>
							</div>
						</div>
						<label
							htmlFor=''
							className='flex-start block tracking-wide text-white text-s font-bold mb-2'>
							Check in - Check out
						</label>
						<DateRangeComp setStay={setStay} />
						<div className='w-full md:w-1/2 px-3'>
							<label
								htmlFor='firstName'
								className='block tracking-wide text-white text-s font-bold mb-2'>
								Nombre
							</label>
							<Field
								type='text'
								name='firstName'
								placeholder='Nombre *'
								className={
									errors.firstName
										? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
										: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								}
							/>
							<ErrorMessage name='firstName'>
								{(msg) => (
									<div className='text-customRed italic pl-1 text-xs font-semibold'>
										{msg}
									</div>
								)}
							</ErrorMessage>
						</div>
						<div className='w-full md:w-1/2 px-3'>
							<label
								htmlFor='lastName'
								className='block tracking-wide text-white text-s font-bold mb-2'>
								Apellido
							</label>
							<Field
								type='text'
								name='lastName'
								placeholder='Apellido *'
								className={
									errors.lastName
										? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
										: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								}
							/>
							<ErrorMessage name='lastName'>
								{(msg) => (
									<div className='text-customRed italic pl-1 text-xs font-semibold'>
										{msg}
									</div>
								)}
							</ErrorMessage>
						</div>
						<div className='w-full md:w-1/2 px-3'>
							<label
								htmlFor='lastName'
								className='block tracking-wide text-white text-s font-bold mb-2'>
								Telefono
							</label>
							<Field
								type='text'
								name='phone'
								placeholder='Telefono *'
								className={
									errors.lastName
										? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
										: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								}
							/>
							<ErrorMessage name='phone'>
								{(msg) => (
									<div className='text-customRed italic pl-1 text-xs font-semibold'>
										{msg}
									</div>
								)}
							</ErrorMessage>
						</div>
						<div className='w-full md:w-1/2 px-3'>
							<label
								htmlFor='email'
								className='block tracking-wide text-white text-s font-bold mb-2'>
								Email
							</label>
							<Field
								type='email'
								name='email'
								placeholder='Email *'
								className={
									errors.email
										? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
										: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								}
							/>
							<ErrorMessage name='email'>
								{(msg) => (
									<div className='text-customRed italic pl-1 text-xs font-semibold'>
										{msg}
									</div>
								)}
							</ErrorMessage>
						</div>

						<div className='w-full md:w-1/2 p-3'>
							<Field
								placeholder='Deje su consulta...'
								className={
									errors.query
										? "appearance-none block w-full h-20 bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
										: "appearance-none block w-full h-20 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 scroll-y"
								}
								component='textarea'
								name='query'
							/>
						</div>
						<button
							type='submit'
							// disabled={isSubmitting}
							className='bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded border-2 border-transparent focus:outline-none focus:shadow-outline hover:text-secondary hover:border-secondary mt-4  disabled:opacity-5'>
							Enviar
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Booking;
