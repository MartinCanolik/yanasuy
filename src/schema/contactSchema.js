import * as Yup from "yup";

const phoneRx =
	/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
const noSpaceAllowedRx = /^\S*$/;

export const contactSchema = Yup.object({
	firstName: Yup.string()
		.max(20, "(No puede contener más de 20 caracteres)")
		.min(3, "(Al menos debe contener 3 caracteres)")
		.required("*"),

	email: Yup.string().email("(Direccion de mail invalida)").required("*"),

	phone: Yup.string().matches(phoneRx, "(Número no válido)").required("*"),
	query: Yup.string().max(400, "(consulta demasiado extensa)").required("*"),
});
