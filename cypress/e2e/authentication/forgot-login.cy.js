import Utils from "../../support/utils/Utils";
//import loginPage from "../../support/page-objects/authentication/LoginPage";
import forgotLoginPage from "../../support/page-objects/authentication/ForgotLoginPage";

describe('Forgot Login Info Testing', () => {

    const requiredFields = [
        "First name", "Last name", "Address", "City", "State", "Zip Code", "Social Security Number"
    ];

    beforeEach(() => {
        forgotLoginPage.visit();
    });

    it('AD-8 Should display all expected fields', () => {
        forgotLoginPage.pageTitle.should('have.text', 'Customer Lookup');
        forgotLoginPage.pageText.should('have.text', 'Please fill out the following information in order to validate your account.');

        const forgotLoginPageFields = [
            "First Name", "Last Name", "Address", "City", "State", "Zip Code", "SSN"
        ];

        forgotLoginPageFields.forEach((field) => {
            forgotLoginPage.lookupForm
                .find('td')
                .contains(field)
                .should('be.visible')
        });
    });

    it('AD-9 Should display the correct error message when all required fields are not provided', () => {
        forgotLoginPage.submitForm();

        requiredFields.forEach((field) => {
            forgotLoginPage.lookupForm
                .find('span')
                .contains(`${field} is required.`)
                .should('be.visible')
        });
    });

    describe('Testing error messages', () => {

        let userData;

        before(() => {
            userData = Utils.registerUser();
        });

        requiredFields.forEach((field) => {
            it(`AD-10 Should display error message when ${field} field is migging`, () => {
                let fieldsToBeFilled = userData.filter((item) => item.fieldName !== field);
    
                forgotLoginPage.fillLookupForm(fieldsToBeFilled);
                forgotLoginPage.submitForm();
    
                cy.contains('span', `${field} is required.`);
            });
        });

    });

    it('AD-11 Should display the correct message when login info related to the provided user cannot be found', () => {
        let nonUserData = [
            { fieldName : "First name", value : 'nonUserFirstName' },
            { fieldName : "Last name", value : 'nonUserLastName' },
            { fieldName : "Address", value : 'nonUserAddress' },
            { fieldName : "City", value : 'nonUserCity' },
            { fieldName : "State", value : 'nonUserState' },
            { fieldName : "Zip Code", value : 'nonUserZipCode' },
            { fieldName : "Social Security Number", value : 'nonUser321' }
        ];

        forgotLoginPage.fillLookupForm(nonUserData);
        forgotLoginPage.submitForm();

        forgotLoginPage.pageTitle.should('contain', 'Error!');
        forgotLoginPage.pageText.should('contain', 'The customer information provided could not be found.');        
    });

    it('AD-12 Should display the correct login info when valid data related to a registerd user is provided', () => {
        let userData = Utils.registerUser();
        forgotLoginPage.visit();
        
        forgotLoginPage.fillLookupForm(userData);
        forgotLoginPage.submitForm();

        let username = userData.find((field) => field.fieldName === 'Username')?.value;
        let password = userData.find((field) => field.fieldName === 'Password')?.value;
        let userFirstName = userData.find((field) => field.fieldName === 'First Name')?.value;
        let userLastName = userData.find((field) => field.fieldName === 'Last Name')?.value;

        cy.log(username)
        cy.log(password)
        cy.log(userFirstName)
        cy.log(userLastName)

        forgotLoginPage.pageTitle.should('contain', 'Customer Lookup');
        forgotLoginPage.pageText.should('contain', 'Your login information was located successfully. You are now logged in.');

    });

});