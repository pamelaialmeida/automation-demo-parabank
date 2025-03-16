/// <reference types="cypress" />
import registerPage from "../../support/page-objects/authentication/RegisterPage";
import menu from "../../support/page-objects/shared-components/MenuPage";
import { faker } from '@faker-js/faker';


describe('Register Testing', () => {

    const requiredFields = [
        "First name", "Last name", "Address", "City", "State", "Zip Code", 
        "Social Security Number", "Username", "Password", "Password confirmation"
    ];

    let password;
    let userData;
    let username;

    beforeEach(() => {
        registerPage.visit();

        username = faker.internet.username() + faker.number.int({ min: 1, max: 999 });
        password = faker.internet.password();

        userData = [
            { fieldName : "First name", value : faker.person.firstName() },
            { fieldName : "Last name", value : faker.person.lastName() },
            { fieldName : "Address", value : faker.location.streetAddress() },
            { fieldName : "City", value : faker.location.city() },
            { fieldName : "State", value : faker.location.state() },
            { fieldName : "Zip Code", value : faker.location.zipCode() },
            { fieldName : "Phone", value : faker.phone.number() },
            { fieldName : "Social Security Number", value : faker.number.int({max: 1000}) },
            { fieldName : "Username", value : username },
            { fieldName : "Password", value : password },
            { fieldName : "Password confirmation", value : password }
        ];
    });

    it('AD-2 Should display all expected fields', () => {
        registerPage.pageTitle.should('have.text', 'Signing up is easy!');
        registerPage.pageText.should('have.text', 'If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.');

        const registerPageFields = [
            "First Name", "Last Name", "Address", "City", "State", "Zip Code", 
            "Phone", "SSN", "Username", "Password", "Confirm"
        ];
        
        registerPageFields.forEach((field) => {
            registerPage.registerForm
                .find('td')
                .contains(field)
                .should('be.visible')
        });            
    });

    it('AD-3 Should register the user when phone number is not provided', () => {
        let fieldsToBeFilled = userData.filter((field) => field.fieldName !== 'Phone');

        registerPage.fillRegisterForm(fieldsToBeFilled);
        registerPage.submitForm();

        let userName = userData.find((field) => field.fieldName === 'Username')?.value;
        let firstName = userData.find((field) => field.fieldName === 'First name')?.value;
        let lastName = userData.find((field) => field.fieldName === 'Last name')?.value;

        registerPage.pageTitle.should('contain', `Welcome ${userName}`);
        registerPage.pageText.should('contain', 'Your account was created successfully. You are now logged in.');
        menu.menuMessage.should('contain', `Welcome ${firstName} ${lastName}`);

    });

    it('AD-4 Should register the user when all fields are provided with valid data', () => {
        registerPage.fillRegisterForm(userData);
        registerPage.submitForm();

        let userName = userData.find((field) => field.fieldName === 'Username')?.value;
        let firstName = userData.find((field) => field.fieldName === 'First name')?.value;
        let lastName = userData.find((field) => field.fieldName === 'Last name')?.value;

        registerPage.pageTitle.should('contain', `Welcome ${userName}`);
        registerPage.pageText.should('contain', 'Your account was created successfully. You are now logged in.');
        menu.menuMessage.should('contain', `Welcome ${firstName} ${lastName}`);
    });

    it('AD-5 Should display the correct error message when trying to register new account without providing any required fields', () => {
        registerPage.submitForm();

        requiredFields.forEach((field) => {
            registerPage.registerForm
                .find('span')
                .contains(`${field} is required.`)
                .should('be.visible')
        });
    });

    requiredFields.forEach((field) => {
        it(`AD-6 Should not register the user and should display error message when ${field} field is migging`, () => {
            let fieldsToBeFilled = userData.filter((item) => item.fieldName !== field);

            registerPage.fillRegisterForm(fieldsToBeFilled);
            registerPage.submitForm();

            cy.contains('span', `${field} is required.`);
        });
    });
    
    it('AD-7 Should not register the user and should display error message when the value provided for Password and Confirm password fields are differente', () => {
        let differentPassword = faker.internet.password();

        let confirmPasswordField = userData.find((field) => field.fieldName === 'Password confirmation');

        if(confirmPasswordField){
            confirmPasswordField.value = differentPassword;
        }

        registerPage.fillRegisterForm(userData);
        registerPage.submitForm();

        cy.contains('span', 'Passwords did not match.');
    });
	
});