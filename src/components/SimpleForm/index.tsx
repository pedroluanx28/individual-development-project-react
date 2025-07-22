import Form from "react-bootstrap/Form";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../Input";
import { simpleFormValidationSchema } from "@/validationSchemas/simpleFormValidationSchema";

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
	console.log(errors);
    
    const onSubmit: SubmitHandler<SimpleFormFields> = (data) => {
		console.log(data);
	};

	return (
		<Form className="px-4" onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-4">
				<Input
					containerClassName="mb-3"
					placeholder="Nome"
					label="Nome"
					{...register("name")}
				/>
				<Input
					containerClassName="mb-3"
					placeholder="E-mail"
					label="E-mail"
					{...register("email")}
				/>
				<Input
					containerClassName="mb-3"
					placeholder="Telefone"
					label="Telefone"
					{...register("phone")}
				/>
				<Input
					containerClassName="mb-3"
					placeholder="CPF"
					label="CPF"
					{...register("identifier")}
				/>
				<Input
					containerClassName="mb-3"
					placeholder="Senha"
					label="Senha"
					type="password"
					{...register("password")}
				/>
				<Input
					containerClassName="mb-3"
					placeholder="Confirmar Senha"
					label="Confirmar Senha"
					type="password"
					{...register("confirmPassword")}
				/>
			</div>

			<button type="submit" className="btn btn-success">
				Enviar
			</button>
		</Form>
	);
}
