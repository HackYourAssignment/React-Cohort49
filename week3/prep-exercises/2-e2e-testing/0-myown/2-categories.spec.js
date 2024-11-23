/// <reference types="cypress" />

describe("Categories", () => {
  beforeEach(() => {
    cy.visit("https://hyf-react-w2-example.netlify.app/");
  });

  it("Starts with no categories selected", () => {
    cy.get('[data-testid="categories-list"]').within(() => {
      cy.get('[data-testid="category-item"]').should("have.length", 4);
      cy.get('[data-selected="false"]').should("have.length", 4);
    });
  });

  it("Selecting a category should filter the list", () => {
    cy.get('[data-testid="categories-list"]').within(() => {
      cy.get('[data-selected="false"]').should("have.length", 4);
    });
    cy.get('[data-testid="product-link"]').should("have.length", 20);
    cy.get('[data-testid="categories-list"]').within(() => {
      cy.get('[data-elementid="electronics"]').click();
      cy.get('[data-selected="true"]').should("have.length", 1);
      cy.get('[data-selected="false"]').should("have.length", 3);
    });
    cy.get('[data-testid="product-link"]').should("have.length", 6);
  });

  it("Selecting a new category should deselect the old one", () => {
    cy.get('[data-testid="categories-list"]').within(() => {
      cy.get('[data-selected="false"]').should("have.length", 4);
      cy.get('[data-selected="true"]').should("have.length", 0);
    });
    cy.get('[data-elementid="electronics"]').click();
    cy.get('[data-testid="categories-list"]').within(() => {
      cy.get('[data-selected="true"]').should("have.length", 1);
      cy.get('[data-selected="false"]').should("have.length", 3);
    });
    cy.get('[data-elementid="clothing"]').click();
    cy.get('[data-testid="categories-list"]').within(() => {
      cy.get('[data-selected="true"]').should("have.length", 1);
      cy.get('[data-selected="false"]').should("have.length", 3);
    });
  });
});
