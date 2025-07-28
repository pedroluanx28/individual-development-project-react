import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import Form from "react-bootstrap/Form";

import { simpleFormValidationSchema } from "@/utils/validationSchemas/simpleFormValidationSchema";
import { Toast } from "@/utils/mixins/swal";

import { Input } from "../Input";

type SimpleFormFields = {
	name: string;
	email: string;
	phone: string;
	identifier: string;
	password: string;
	confirmPassword: string;
};

export function SimpleForm() {
	const { register, handleSubmit, formState } = useForm<SimpleFormFields>({
		resolver: zodResolver(simpleFormValidationSchema)
	});

	const { errors } = formState;

	const onSubmit: SubmitHandler<SimpleFormFields> = async (data) => {
		try {
			await axios.post("https://jsonplaceholder.typicode.com/posts", data);

			Toast.fire({
				icon: "success",
				text: "Formulário enviado com sucesso."
			});
		} catch {
			Toast.fire({
				icon: "error",
				text: "Erro ao enviar o formulário."
			});
		}
	};

	return (
		<Form className="px-4" onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-4">
				<Input
					containerClassName="mb-3"
					placeholder="Nome"
					label="Nome"
					errorMessage={errors.name?.message}
					controlId="name"
					{...register("name")}
				/>
				<Input
					containerClassName="mb-3"
					placeholder="E-mail"
					label="E-mail"
					errorMessage={errors.email?.message}
					controlId="email"
					{...register("email")}
				/>
				<Input
					containerClassName="mb-3"
					placeholder="Telefone"
					label="Telefone"
					errorMessage={errors.phone?.message}
					controlId="phone"
					{...register("phone")}
				/>
				<Input
					containerClassName="mb-3"
					placeholder="CPF"
					label="CPF"
					errorMessage={errors.identifier?.message}
					controlId="identifier"
					{...register("identifier")}
				/>
				<Input
					containerClassName="mb-3"
					placeholder="Senha"
					label="Senha"
					type="password"
					errorMessage={errors.password?.message}
					controlId="password"
					{...register("password")}
				/>
				<Input
					containerClassName="mb-3"
					placeholder="Confirmar Senha"
					label="Confirmar Senha"
					type="password"
					errorMessage={errors.confirmPassword?.message}
					controlId="confirm-password"
					{...register("confirmPassword")}
				/>
			</div>

			<button type="submit" className="btn btn-success">
				Enviar
			</button>
		</Form>
	);
}
