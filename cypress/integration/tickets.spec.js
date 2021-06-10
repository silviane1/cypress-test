describe("Tickets", () => {
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));
    it.only("fells all the text input fields", () => {
        const firstName = "Silviane";
        const lastName = "Brito";

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("silviane@gmail.com");
        cy.get("#requests").type("Tester");
        cy.get("#signature").type(`${firstName} ${lastName}`);

    });
    
    it("has 'TICKETBOX' header's heading", () => {});
});