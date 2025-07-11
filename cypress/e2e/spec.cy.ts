describe("template spec", () => {
	it("passes", () => {
		expect(1 + 1).to.equal(2);
		cy.visit("https://google.com");
	});
});
