describe("The Home Page", function() {
    it("visits the home page", function () {
        cy.visit("/")
    })
    it("has a header", function() {
        cy.get("#header>h6").should("exist")
    })
    it("says 'home page'", function() {
        cy.get("#header").should("exist")
    })
    it("has a button", function() {
        cy.get("button").should("exist")
    })
    it("has an image", function() {
        cy.get("img").should("exist")
    })
})

