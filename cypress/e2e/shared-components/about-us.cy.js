/// <reference types="cypress" />
import aboutUsPage from "../../support/page-objects/shared-components/AboutUsPage";
import header from "../../support/page-objects/shared-components/HeaderPage";
import loginPage from "../../support/page-objects/authentication/LoginPage";

describe('About Us Page Testing', () => {
    beforeEach(() => {
        loginPage.visit();
        header.goToAboutUsPage();
    });

    it('AD-01 Should display the correct about us text', () => {
        const expectedAboutUsText = "ParaBank is a demo site used for demonstration of Parasoft software solutions. All materials herein are used solely for simulating a realistic online banking website. In other words: ParaBank is not a real bank! For more information about Parasoft solutions please visit us at: www.parasoft.com or call 888-305-0041";
        
        aboutUsPage.aboutUsTextTitle.should('have.text', 'ParaSoft Demo Website');

        cy.contains(expectedAboutUsText);
    });

});