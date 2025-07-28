describe("register user", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("should register user correctly", () => {
		cy.get("#name").type("Usuário teste");
		cy.get("#email").type("usuario@teste.com");
		cy.get("#phone").type("85924117820");
		cy.get("#identifier").type("54544140005");
		cy.get("#password").type("senha123");
		cy.get("#confirm-password").type("senha123");
		cy.get("form").submit();

		cy.get(".swal2-container").should("contain", "Formulário enviado com sucesso.");
	});

	it("should show error when fields are invalid", () => {
		cy.get("#name").type("Us");
		cy.get("#email").type("usuario teste com");
		cy.get("#phone").type("85924");
		cy.get("#identifier").type("11111111111");
		cy.get("#password").type("sen");
		cy.get("#confirm-password").type("senha321");
		cy.get("form").submit();

		cy.get("#name-error").should("contain", "O nome deve ter no mínimo 3 caracteres.");
		cy.get("#email-error").should("contain", "O e-mail deve ser válido.");
		cy.get("#phone-error").should("contain", "O número de telefone de ter 11 digitos");
		cy.get("#identifier-error").should("contain", "CPF inválido");
		cy.get("#password-error").should("contain", "A senha deve ter no mínimo 4 caracteres");
		cy.get("#confirm-password-error").should("contain", "As senhas devem ser iguais");
	});
});
