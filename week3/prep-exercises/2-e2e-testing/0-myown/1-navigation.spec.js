/// <reference types="cypress" />

describe("Navigation", () => {
  it("Can go to the details page and back", () => {
    cy.visit("https://hyf-react-w2-example.netlify.app/");
    cy.get('[data-testid="product-link"]').should("have.length", 20);
    cy.get('[data-testid="product-link"]').first().click();
    cy.get('[data-testid="product-details-page"]').should("be.visible");
    cy.go("back");
    cy.get('[data-testid="products-page"]').should("be.visible");
  });
});
