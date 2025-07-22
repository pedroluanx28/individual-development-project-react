import Zod from "zod";

export const simpleFormValidationSchema = Zod.object({
	name: Zod.string().min(3, "O nome deve ter no mínimo 3 caracteres."),
	email: Zod.email("O e-mail deve ser válido."),
	phone: Zod.string().length(11, "O número de telefone de ter 11 digitos"),
	identifier: Zod.string().length(11, "O campo CPF deve ter 11 caracteres"),
	password: Zod.string().min(4, "A senha deve ter no mínimo 4 caracteres"),
	confirmPassword: Zod.string()
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
