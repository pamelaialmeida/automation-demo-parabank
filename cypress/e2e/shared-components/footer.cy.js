/// <reference types="cypress" />
import footer from "../../support/page-objects/shared-components/FooterPage";
import loginPage from "../../support/page-objects/authentication/LoginPage";

describe('Footer Testing', ()=> {
    beforeEach(() => {
       loginPage.visit();
    });

    it('AD-21 Should navigate to the Home page when clicking on Home link', () => {
        footer.goToHomePage();
        cy.url().should('contain', 'index.htm');
    });

    it('AD-22 Should navigate to the About Us page when clicking on About Us link', () => {
        footer.goToAboutUsPage();
        cy.url().should('contain', '/about.htm');
    });

    
    it('AD-23 Should navigate to the Services page when clicking on Services link', () => {
        footer.goToServicesPage();
        cy.url().should('contain', 'services.htm');
    });

    
    it.skip('AD-24 Should navigate to the Products page when clicking on Products link', () => {
        footer.goToProductsPage();
        cy.url().should('contain', 'products');
    });

    
    it.skip('AD-25 Should navigate to the Locations page when clicking on Locations link', () => {
        footer.goToLocationsPage();
        cy.url().should('contain', 'solutions');
    });

    it('AD-26 Should navigate to Site Map page when clicking on Site Map link', () => {
        footer.goToSiteMapPage();
        cy.url().should('contain', '/sitemap.htm');
    });

    it('AD-27 Should navigate to the Contact Us page when clicking on Contact Us link', () => {
        footer.goToContactUsPage();
        cy.url().should('contain', '/contact.htm');
    });
});