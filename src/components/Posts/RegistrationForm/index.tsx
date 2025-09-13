import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/api/instace";

import Form from "react-bootstrap/Form";

import { Toast } from "@/utils/mixins/swal";
import { postRegistrationFormValidationSchema } from "@/utils/validationSchemas/postRegistrationForm";

import { Input } from "@/components/Input";

type PostRegistrationFormFields = {
	name: string;
	email: string;
	phone: string;
	identifier: string;
	password: string;
	confirmPassword: string;
};

export function RegistrationForm() {
	const {
		register,
		handleSubmit,
		formState,
		reset: resetForm
	} = useForm<PostRegistrationFormFields>({
		resolver: zodResolver(postRegistrationFormValidationSchema)
	});

	const { errors } = formState;

	const onSubmit: SubmitHandler<PostRegistrationFormFields> = async (data) => {
		try {
			await api.post("/posts", data);

			Toast.fire({
				icon: "success",
				text: "Formulário enviado com sucesso."
			});
		} catch {
			Toast.fire({
				icon: "error",
				text: "Erro ao enviar o formulário."
			});
		} finally {
			resetForm();
		}
	};

	return (
		<Form className="px-4" onSubmit={handleSubmit(onSubmit)} data-cy="post-registration-form">
			<div className="mb-4">
				<Input
					containerClassName="mb-3"
					placeholder="Nome"
					label="Nome"
					errorMessage={errors.name?.message}
					controlId="name"
					data-cy="name"
					{...register("name")}
				/>
				<Input
					containerClassName="mb-3"
					placeholder="E-mail"
					label="E-mail"
					errorMessage={errors.email?.message}
					controlId="email"
					data-cy="email"
					{...register("email")}
				/>
				<Input
					containerClassName="mb-3"
					placeholder="Telefone"
					label="Telefone"
					errorMessage={errors.phone?.message}
					controlId="phone"
					data-cy="phone"
					{...register("phone")}
				/>
				<Input
					containerClassName="mb-3"
					placeholder="CPF"
					label="CPF"
					errorMessage={errors.identifier?.message}
					controlId="identifier"
					data-cy="identifier"
					{...register("identifier")}
				/>
				<Input
					containerClassName="mb-3"
					placeholder="Senha"
					label="Senha"
					type="password"
					errorMessage={errors.password?.message}
					controlId="password"
					data-cy="password"
					{...register("password")}
				/>
				<Input
					containerClassName="mb-3"
					placeholder="Confirmar Senha"
					label="Confirmar Senha"
					type="password"
					errorMessage={errors.confirmPassword?.message}
					controlId="confirm-password"
					data-cy="confirmPassword"
					{...register("confirmPassword")}
				/>
			</div>

			<button type="submit" className="btn btn-success">
				Enviar
			</button>
		</Form>
	);
}
