import Utils from "../../support/utils/Utils";
import loginPage from "../../support/page-objects/authentication/LoginPage";
import menu from "../../support/page-objects/shared-components/MenuPage";

describe('Login Testing', () => {
    let userData;
    let username;
    let password;

    before(() => {
        userData = Utils.registerUser();
        username = userData.find((field) => field.fieldName === 'Username')?.value;
        password = userData.find((field) => field.fieldName === 'Password')?.value;
     });

    beforeEach(() => {
        loginPage.visit();      
    });

    it('AD-13 Should not perform login and should diplay error message when no credentials are provided when trying to log in', () => {
        loginPage.login();

        loginPage.pageTitle.should('contain', 'Error!');
        loginPage.pageText.should('contain', 'Please enter a username and password.');
    });

    it('AD-14 Should not perform login and should diplay error message when username is not provided when trying to log in', () => {
        loginPage.login("", password);

        loginPage.pageTitle.should('contain', 'Error!');
        loginPage.pageText.should('contain', 'Please enter a username and password.');
    });

    it('AD-15 Should not perform login and should diplay error message when password is not provided when trying to log in', () => {
        loginPage.login(username);

        loginPage.pageTitle.should('contain', 'Error!');
        loginPage.pageText.should('contain', 'Please enter a username and password.');
    });

    it('AD-16 Should not perform login and should diplay error message when providing invalid credentials when trying to log in', () => {
        loginPage.login('nonRegistredUserName', 'nonRegistredPassword');

        loginPage.pageTitle.should('contain', 'Error!');
        loginPage.pageText.should('contain', 'The username and password could not be verified.');
        //loginPage.pageText.should('contain', 'An internal error has occurred and has been logged.');
    });

    it('AD-17 Should not perform login and should diplay error message when providing invalid username when trying to log in', () => {
        loginPage.login('nonRegistredUserName', password);

        loginPage.pageTitle.should('contain', 'Error!');
        loginPage.pageText.should('contain', 'The username and password could not be verified.');
        //loginPage.pageText.should('contain', 'An internal error has occurred and has been logged.');
    });

    it('AD-18 Should not perform login and should diplay error message when providing invalid password when trying to log in', () => {
        loginPage.login(username, 'nonRegistredPassword');

        loginPage.pageTitle.should('contain', 'Error!');
        loginPage.pageText.should('contain', 'The username and password could not be verified.');
        //loginPage.pageText.should('contain', 'An internal error has occurred and has been logged.');
    });

    it('AD-19 Should login correctly when valid credentials are provided', () => {
        loginPage.login(username, password);

        let userFirstName = userData.find((field) => field.fieldName === 'First name')?.value;  
        let userLastName = userData.find((field) => field.fieldName === 'Last name')?.value;

        menu.menuMessage.should('contain', `Welcome ${userFirstName} ${userLastName}`);
    });

});