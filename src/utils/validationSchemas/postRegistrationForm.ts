import { object, string, email } from "zod";
import { cpf } from "cpf-cnpj-validator";

export const postRegistrationFormValidationSchema = object({
	name: string().min(3, "O nome deve ter no mínimo 3 caracteres."),
	email: email("O e-mail deve ser válido."),
	phone: string().length(11, "O número de telefone de ter 11 digitos"),
	identifier: string()
		.length(11, "O campo CPF deve ter 11 caracteres")
		.refine((value) => cpf.isValid(value), { message: "CPF inválido" }),
	password: string().min(4, "A senha deve ter no mínimo 4 caracteres"),
	confirmPassword: string()
}).refine(
	(object) => {
		const { password, confirmPassword } = object;

		if (!password || !confirmPassword) {
			return false;
		}

		return password === confirmPassword;
	},
	{
		message: "As senhas devem ser iguais",
		path: ["confirmPassword"]
	}
);
