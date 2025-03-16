import menu from "../../support/page-objects/shared-components/MenuPage";
import registerPage from "../../support/page-objects/authentication/RegisterPage";
import { faker } from '@faker-js/faker';

describe('Log Out Testing', () => {

    it('AD-13 Should log out correctly', () => {
        let password = faker.internet.password();

        let userData = [
            { fieldName : "First name", value : faker.person.firstName() },
            { fieldName : "Last name", value : faker.person.lastName() },
            { fieldName : "Address", value : faker.location.streetAddress() },
            { fieldName : "City", value : faker.location.city() },
            { fieldName : "State", value : faker.location.state() },
            { fieldName : "Zip Code", value : faker.location.zipCode() },
            { fieldName : "Phone", value : faker.phone.number() },
            { fieldName : "Social Security Number", value : faker.number.int({max: 1000}) },
            { fieldName : "Username", value : faker.internet.username() },
            { fieldName : "Password", value : password },
            { fieldName : "Password confirmation", value : password }
        ];

        registerPage.visit();
        registerPage.fillRegisterForm(userData);
        registerPage.submitForm();

        registerPage.pageTitle.should('be.visible');
        registerPage.pageText.should('be.visible');

        menu.menuMessage.should('be.visible');

        menu.logOut();
    });

});