class ForgotLoginPage {

    /**
     * Page elements Mapping
     */
    #pageTitleSelector = '#rightPanel .title';
    #pageIntroSelector = '#rightPanel p';

    #lookupFormSelector = '#lookupForm';

    #firstNameInputSelector = '#firstName';
    #lastNameInputSelector = '#lastName';
    #addressInputSelector = '#address\\.street';
    #cityInputSelector = '#address\\.city';
    #stateInputSelector = '#address\\.state';
    #zipCodeInputSelector = '#address\\.zipCode';
    #ssnInputSelector = '#ssn';

    #findLoginInfoButtonSelector = 'input[value="Find My Login Info"]';

    /**
     * Returns the Title displayed on the top of the sign in form
     * @author Pâmela Inacio Almeida
     */
    get pageTitle() {
        return cy.get(this.#pageTitleSelector);
    }

    /**
     * Returns the introduction text displayed on the top of the sign in form
     * @author Pâmela Inacio Almeida
     */
    get pageText() {
        return cy.get(this.#pageIntroSelector);
    }

    /**
     * Returns the whole lookup form
     * @author Pâmela Inacio Almeida
     */
    get lookupForm() {
        return cy.get(this.#lookupFormSelector);
    }

    /**
     * Function to navigate to the Forgot Login Page
     * @author Pâmela Inacio Almeida
     */
    visit() {
        cy.visit('/lookup.htm');
    }       

    /**
     * Fill in the fields of the find my login info form, according to the values sent
     * @author Pâmela Inacio Almeida
     * @param {Array} fieldsToFillIn - Array of objects with format [{field name : value}]; each object contains:
     * - The name of the field to fill in
     * - The value to send to the field
     */
    fillLookupForm(fieldsToFillIn) {

        // Mapping the fields of the form and its locators
        const locators = {
            "First name": this.#firstNameInputSelector,
            "Last name": this.#lastNameInputSelector,
            "Address": this.#addressInputSelector,
            "City": this.#cityInputSelector,
            "State": this.#stateInputSelector,
            "Zip Code": this.#zipCodeInputSelector,
            "Social Security Number": this.#ssnInputSelector
        }

        fieldsToFillIn.forEach((field) => {
            const locator = locators[field.fieldName];
            if (locator) {
                cy.get(locator).should('exist').clear().type(field.value);
            }
        });

    }

    /**
     * Clicks on Find my login info button to send sent the user data
     * @author Pâmela Inacio Almeida
     */
    submitForm() {
       // cy.get(this.#findLoginInfoButtonSelector).click();
       this.lookupForm.find(this.#findLoginInfoButtonSelector).click();
    }

}

export default new ForgotLoginPage()