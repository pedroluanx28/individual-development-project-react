type PostRegistrationFormFields = {
	name: string;
	email: string;
	phone: string;
	identifier: string;
	password: string;
	confirmPassword: string;
};

type PostRegistrationFormFieldsPartial = Partial<PostRegistrationFormFields>;

describe("register user", () => {
	const selectors = {
		name: "[data-cy=name]",
		email: "[data-cy=email]",
		phone: "[data-cy=phone]",
		identifier: "[data-cy=identifier]",
		password: "[data-cy=password]",
		confirmPassword: "[data-cy=confirmPassword]"
	};

	const validData: PostRegistrationFormFields = {
		name: "Usuário teste",
		email: "usuario@teste.com",
		phone: "85924117820",
		identifier: "54544140005",
		password: "senha123",
		confirmPassword: "senha123"
	};

	function fillForm(overrides: PostRegistrationFormFieldsPartial = {}) {
		const data = { ...validData, ...overrides };

		Object.entries(data).forEach(([key, value]) => {
			if (Boolean(value)) {
				cy.get(selectors[key]).clear().type(value);
			}
		});
	}

	beforeEach(() => {
		cy.visit("/");
	});

	it("should submit form successfully", () => {
		fillForm();

		cy.get("[data-cy=post-registration-form]").submit();

		cy.get(".swal2-container").should("contain", "Formulário enviado com sucesso.");

		Object.values(selectors).forEach((selector) => {
			cy.get(selector).should("have.value", "");
		});
	});

	const errorCases = [
		{
			field: "name",
			value: "Us",
			errorSelector: "[data-cy=name-error]",
			expected: "O nome deve ter no mínimo 3 caracteres.",
			testName: "should show error when name has less than 3 characters"
		},
		{
			field: "email",
			value: "invalid-email",
			errorSelector: "[data-cy=email-error]",
			expected: "O e-mail deve ser válido.",
			testName: "should show error when email is invalid"
		},
		{
			field: "phone",
			value: "85924",
			errorSelector: "[data-cy=phone-error]",
			expected: "O número de telefone de ter 11 digitos",
			testName: "should show error when phone does not have 11 digits"
		},
		{
			field: "identifier",
			value: "11111111111",
			errorSelector: "[data-cy=identifier-error]",
			expected: "CPF inválido",
			testName: "should show error when identifier (CPF) is invalid"
		},
		{
			field: "password",
			value: "sen",
			errorSelector: "[data-cy=password-error]",
			expected: "A senha deve ter no mínimo 4 caracteres",
			testName: "should show error when password has less than 4 characters"
		},
		{
			field: "confirmPassword",
			value: "different123",
			errorSelector: "[data-cy=confirm-password-error]",
			expected: "As senhas devem ser iguais",
			testName: "should show error when confirmation password does not match"
		},
		{
			field: "password",
			value: "",
			errorSelector: "[data-cy=password-error]",
			expected: "A senha deve ter no mínimo 4 caracteres",
			testName: "should show error when password is empty"
		},
		{
			field: "confirmPassword",
			value: "",
			errorSelector: "[data-cy=confirm-password-error]",
			expected: "As senhas devem ser iguais",
			testName: "should show error when confirmation password is empty"
		},
	];

	errorCases.forEach(({ field, value, errorSelector, expected, testName }) => {
		const errorData: PostRegistrationFormFieldsPartial = { [field]: value };

		it(testName, () => {
			fillForm(errorData);
			cy.get("form").submit();
			cy.get(errorSelector).should("contain", expected);
		});
	});
});
