/// <reference types="cypress" />
import header from "../../support/page-objects/shared-components/HeaderPage";
import loginPage from "../../support/page-objects/authentication/LoginPage";

describe('Header Testing', ()=> {
    beforeEach(() => {
        loginPage.visit();
    });

    it('AD-31 Should display the Header according to the design', () => {
        header.homeIcon.should('be.visible');
        header.aboutUsIcon.should('be.visible');
        header.aboutUsIcon.should('be.visible');
    });

    it('AD-32 Should navigate to the About page when clicking on About icon', () => {
        header.goToAboutUsPage();
        cy.url().should('contain', '/about.htm');
    });

    it('AD-33 Should navigate to the Contact Us page when clicking on Contact Us icon', () => {
        header.goToContactUsPage();
        cy.url().should('contain', '/contact.htm');
    });

    it('AD-34 Should navigate back to non logged Home page when clicking on Home icon', () => {
        header.goToAboutUsPage();
        header.goToHomePage();
        cy.url().should('contain', '/index.htm');
    });
});