const logoBooking =
	"https://res.cloudinary.com/drhj3sc2o/image/upload/v1678401479/bookingcom-1_br2vnl.svg";
const logoGoogle =
	"https://res.cloudinary.com/drhj3sc2o/image/upload/v1678472737/google-maps-2020_kcnwqz.jpg";

export const Reviews = [
	{
		name: "Romina",
		logo: logoBooking,
		rating: "10",
		stars: null,
		review:
			'Una paz increible y una belleza unica. Si tengo que comparalo con "algo", seria con la receta de la abuela que mas me gusta. Volveria siempre.',
	},
	{
		name: "Maria",
		logo: logoBooking,
		rating: "9",
		stars: null,
		review:
			"Impecable y muy cálida la atención de Marcela. Hermosa la propiedad y las vistas de las sierras y del valle. Los chicos disfrutaron muchísimo de la pileta y de la mesa de ping-pong. Muy tranquilo.",
	},
	{
		name: "Ricardo",
		logo: logoBooking,
		rating: "9",
		stars: null,
		review: "Excelente lugar !!!!!",
	},
	{
		name: "andreagabriela1978 castex",
		logo: logoGoogle,
		rating: null,
		stars: (
			<div className='flex'>
				<img
					src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678474301/descarga_1_jwuvof.jpg'
					alt='star'
				/>
				<img
					src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678474301/descarga_1_jwuvof.jpg'
					alt='star'
				/>
				<img
					src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678474301/descarga_1_jwuvof.jpg'
					alt='star'
				/>
				<img
					src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678474301/descarga_1_jwuvof.jpg'
					alt='star'
				/>
				<img
					src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678474301/descarga_1_jwuvof.jpg'
					alt='star'
				/>
			</div>
		),
		review:
			"Un lugar soñado! La atención de Marcela y su familia es espectacular! Muy cordiales y bien predispuestos! Las cabañas son hermosas y súper cómodas, la pileta y el jacuzzi espectaculares!! Para volver a visitar sin dudarlo!!",
	},
	{
		name: "Lía Bedatou",
		logo: logoGoogle,
		rating: null,
		stars: (
			<div className='flex'>
				<img
					src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678474301/descarga_1_jwuvof.jpg'
					alt='star'
				/>
				<img
					src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678474301/descarga_1_jwuvof.jpg'
					alt='star'
				/>
				<img
					src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678474301/descarga_1_jwuvof.jpg'
					alt='star'
				/>
				<img
					src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678474301/descarga_1_jwuvof.jpg'
					alt='star'
				/>
				<img
					src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678474301/descarga_1_jwuvof.jpg'
					alt='star'
				/>
			</div>
		),
		review:
			"Hermoso lugar! Súper recomendable! Las cabañas completas y muy cómodas. La atención de Marcela y Laurita: un lujo! Nos atendieron con mucha amabilidad y cariño, incluso a Lupita ( nuestra mascota). Un lugar para disfrutar a full la belleza y la naturaleza de Merlo. Volveremos seguramente!",
	},
	{
		name: "Nicolas Alejandro Fringes",
		logo: logoGoogle,
		rating: null,
		stars: (
			<div className='flex'>
				<img
					src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678474301/descarga_1_jwuvof.jpg'
					alt='star'
				/>
				<img
					src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678474301/descarga_1_jwuvof.jpg'
					alt='star'
				/>
				<img
					src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678474301/descarga_1_jwuvof.jpg'
					alt='star'
				/>
				<img
					src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678474301/descarga_1_jwuvof.jpg'
					alt='star'
				/>
				<img
					src='https://res.cloudinary.com/drhj3sc2o/image/upload/v1678474301/descarga_1_jwuvof.jpg'
					alt='star'
				/>
			</div>
		),
		review:
			"Un lugar encantador, la vista es hermosa, las cabañas un espectáculo, y los dueños excelentes y muy atentos. Totalmente recomendable.",
	},
];

//La idea es renderizar de a 3 comentarios por lo que divido el arr en 3 y guardo el codigo html agrupado de a 3 reviews,
// para luego con un solo map renderizar en el carousel en ese formato

// const formatedReviews = [];

// const handleFormatReviews = () => {
// 	for (let i = 0; i < Reviews.length / 3; i++) {
// 		const groupedReviews = `<div className='w-1/3 border-2 border-white p-3 px-3'>
// 		<img
// 		src=${Reviews[i].logo}
// 			alt='logo'
// 			className='h-20 opacity-70 my-3'
// 		/>
// 		<h2 className='text-white text-xl my-3'>${Reviews[i].name}</h2>
// 		<p className='text-xm text-white my-3 text-center'>
// 		${Reviews[i].review}
// 		</p>
// 		<h2 className='text-white text-3xl my-3'>${Reviews[i].rating}</h2>
// 		<div>${Reviews[i].stars}</div>

// 	</div>
// 	<div className='w-1/3 border-2 border-white p-3 px-3'>
// 		<img
// 		src=${Reviews[i + 1].logo}
// 			alt='logo'
// 			className='h-20 opacity-70 my-3'
// 		/>
// 		<h2 className='text-white text-xl my-3'>${Reviews[i + 1].name}</h2>
// 		<p className='text-xm text-white my-3 text-center'>
// 			${Reviews[i + 1].review}
// 		</p>
// 		<h2 className='text-white text-3xl my-3'>${Reviews[i + 1].rating}</h2>
// 		<div>${Reviews[i + 1].stars}</div>

// 	</div>
// 	<div className='w-1/3 border-2 border-white p-3 px-3'>
// 		<img
// 		src=${Reviews[i + 2].logo}
// 			alt='logo'
// 			className='h-20 opacity-70 my-3'
// 		/>
// 		<h2 className='text-white text-xl my-3'>${Reviews[i + 2].name}</h2>
// 		<p className='text-xm text-white my-3 text-center'>
// 			${Reviews[i + 2].review}
// 		</p>
// 		<h2 className='text-white text-3xl my-3'>${Reviews[i + 2].rating}</h2>
// 		<div>${Reviews[i + 2].stars}</div>

// 	</div>
// 	`;
// 		formatedReviews.push(groupedReviews);
// 	}
// };
// function convertToPlain(html) {
// 	// Create a new div element
// 	var tempDivElement = document.createElement("div");

// 	// Set the HTML content with the given value
// 	tempDivElement.innerHTML = html;

// 	// Retrieve the text property of the element
// 	return tempDivElement.textContent || tempDivElement.innerText || "";
// }
