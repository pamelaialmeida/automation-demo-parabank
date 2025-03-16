class LoginPage {

    /**
     * Page elements Mapping
     */
    #loginFormTitleSelector = '#leftPanel h2';

    #loginFormSelector = '#loginPanel';
    #usernameInputSelector = 'input[name="username"]';
    #passwordInputSelector = 'input[name="password"]';    
    #logInButtonSelector = 'input[value="Log In"]';

    #forgotLoginInfoLinkSelector = 'a[href="lookup.htm"]';
    #registerLinkSelector = 'a[href="register.htm"]';

    #pageTitleSelector = '#rightPanel .title';
    #pageTextSelector = '#rightPanel p';

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
     * Returns the Title displayed on the top of the log in form
     * @author Pâmela Inacio Almeida
     */
    get formTitle() {
        return cy.get(this.#loginFormTitleSelector);
    }

    /**
     * Returns the whole login form
     * @author Pâmela Inacio Almeida
     */
    get loginForm() {
        return cy.get(this.#loginFormSelector);
    }

    /**
     * Function to navigate to the Login Page
     * @author Pâmela Inacio Almeida
     */
    visit() {
        cy.visit('/index.htm');
    }

    /**
     * Function to perform login
     * @author Pâmela Inacio Almeida
     * @param {string} username
     * @param {*} password 
     */
    login(username, password) {

        if(username) { 
            //cy.get(this.#usernameInputSelector).clear().type(username);
            this.loginForm.find(this.#usernameInputSelector).clear().type(username);
        }

        if(password) {
           // cy.get(this.#passwordInputSelector).clear().type(password);
           this.loginForm.find(this.#passwordInputSelector).clear().type(password);
        }

       // cy.get(this.#logInButtonSelector).click();
        this.loginForm.find(this.#logInButtonSelector).click();
    }

    /**
     * Function to click on the Register link and access Register/Sign up page
     * @author Pâmela Inacio Almeida
     */
    goToRegisterPage() {
        //cy.contains('a', 'Register').click();
        this.loginForm.find(this.#registerLinkSelector).click();
    }

    /**
     * Function to click on the Forgot login info link and access Forgot login page
     * @author Pâmela Inacio Almeida
     */
    goToForgotLoginPage() {
        //cy.contains('a', 'Forgot login info?').click();
        this.loginForm.find(this.#forgotLoginInfoLinkSelector).click();
    }

}

export default new LoginPage()