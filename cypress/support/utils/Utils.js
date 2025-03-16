import registerPage from "../page-objects/authentication/RegisterPage";
import menu from "../page-objects/shared-components/MenuPage";
import { faker } from '@faker-js/faker';

class Utils {

    /**
     * Helper function to create a new user
     * @author Pâmela Inacio Almeida
     * @returns userData
     */
    static registerUser() {
        let password = faker.internet.password();
        let username = faker.internet.username() + faker.number.int({ min: 1, max: 999 });

        let userData = [
            { fieldName : "First name", value : faker.person.firstName() },
            { fieldName : "Last name", value : faker.person.lastName() },
            { fieldName : "Address", value : faker.location.streetAddress() },
            { fieldName : "City", value : faker.location.city() },
            { fieldName : "State", value : faker.location.state() },
            { fieldName : "Zip Code", value : faker.location.zipCode() },
            { fieldName : "Phone", value : faker.phone.number() },
            { fieldName : "Social Security Number", value : faker.number.int({max: 1000}) },
            { fieldName : "Username", value :  username},
            { fieldName : "Password", value : password },
            { fieldName : "Password confirmation", value : password }
        ];

        registerPage.visit();
        registerPage.fillRegisterForm(userData);
        registerPage.submitForm();

        cy.get('body', { timeout: 5000 }).then(($body) => {
            if ($body.text().includes('This username already exists.')) {
                Utils.registerUser();  
            } else {
                menu.logOut();
            }
        });

        return userData;
    }

}

export default Utils;