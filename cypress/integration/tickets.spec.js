describe("Tickets", () => {
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));
    
    it("fells all the text input fields", () => {
        const firstName = "Silviane";
        const lastName = "Brito";

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("silviane@gmail.com");
        cy.get("#requests").type("Tester");
        cy.get("#signature").type(`${firstName} ${lastName}`);

    });
    
    it("select two tickets", () => {
        cy.get("#ticket-quantity").select("2");
    });

    it("select 'vip' ticket type", () => {
        cy.get("#vip").check();
    });

    it.only("selects 'social media' and 'publication', then uncheck 'publication'", () => {
        cy.get("#social-media").check();
        cy.get("#publication").check();
        cy.get("#publication").uncheck();
    });

    it("has 'TICKETBOX' header's heading", () => {});
});