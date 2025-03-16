class RegisterPage {

    /**
     * Page elements Mapping
     */
    #pageTitleSelector = '#rightPanel .title';
    #pageTextSelector = '#rightPanel p';

    #registerFormSelector = '#customerForm';

    #firstNameInputSelector = '#customer\\.firstName';
    #lastNameInputSelector = '#customer\\.lastName';
    #addressInputSelector = '#customer\\.address\\.street';
    #cityInputSelector = '#customer\\.address\\.city';
    #stateInputSelector = '#customer\\.address\\.state';
    #zipCodeInputSelector = '#customer\\.address\\.zipCode';
    #phoneNumberInputSelector = '#customer\\.phoneNumber';
    #ssnInputSelector = '#customer\\.ssn';
    #usernameInputSelector = '#customer\\.username';
    #passwordInputSelector = '#customer\\.password';
    #confirmPasswordInputSelector = '#repeatedPassword';

    #registerButtonSelector = 'input[value="Register"]';

    /**
     * Returns the Title displayed on the top of the sign in form
     * @author Pâmela Inacio Almeida
     */
    get pageTitle(){
        return cy.get(this.#pageTitleSelector);
    }

    /**
     * Returns the text displayed on the top of the sign in form
     * @author Pâmela Inacio Almeida
     */
    get pageText(){
        return cy.get(this.#pageTextSelector);
    }

    /**
     * Returns the whole sign up form
     * @author Pâmela Inacio Almeida
     */
    get registerForm(){
        return cy.get(this.#registerFormSelector);
    }

    /**
     * Function to navigate to the Register Page
     * @author Pâmela Inacio Almeida
     */
    visit() {
        cy.visit('/register.htm');
    }    
    
    /**
     * Fill in the fields of the form, according to the values sent
     * @author Pâmela Inacio Almeida
     * @param {Array} fieldsToFill - Array of objects with format [{field name : value}]; each object contains:
     * - The name of the field to fill in
     * - The value to send to the field
     */
    fillRegisterForm(fieldsToFill){
        
        // Mapping the fields of the form and its locators
        const locators = {
            "First name" : this.#firstNameInputSelector, 
            "Last name" : this.#lastNameInputSelector, 
            "Address" : this.#addressInputSelector, 
            "City" : this.#cityInputSelector, 
            "State" : this.#stateInputSelector, 
            "Zip Code" : this.#zipCodeInputSelector, 
            "Phone" : this.#phoneNumberInputSelector, 
            "Social Security Number" : this.#ssnInputSelector, 
            "Username" : this.#usernameInputSelector, 
            "Password" : this.#passwordInputSelector, 
            "Password confirmation" : this.#confirmPasswordInputSelector
        }

        fieldsToFill.forEach((field) => {
            const locator = locators[field.fieldName];
            if(locator) {
                cy.get(locator).should('exist').clear().type(field.value);
            }
        })

    }

    /**
     * Clicks on Regiter button to send sent sign up form with user data
     * @author Pâmela Inacio Almeida
     */
    submitForm(){
       this.registerForm.find(this.#registerButtonSelector).click();
    }

}

export default new RegisterPage()