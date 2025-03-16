import accountsOverviewPage from "../../support/page-objects/accounts/AccountsOverviewPage";
import Utils from "../../support/utils/Utils";
import loginPage from "../../support/page-objects/authentication/LoginPage";
import menu from "../../support/page-objects/shared-components/MenuPage";

describe('Accounts Overview Testing', () => {

    let userData;

    before(() => {
        userData = Utils.registerUser();
        let username = userData.find((field) => field.fieldName === 'Username')?.value;
        let password = userData.find((field) => field.fieldName === 'Password')?.value;

        loginPage.login(username, password);
    });

    beforeEach(() => {
        menu.goToAccountsOverview();
    });

    it.only('Should display Account Overview page according to the design', () => {
        accountsOverviewPage.pageTextTitle.should('contain', 'Accounts Overview');
        accountsOverviewPage.accountsTable.should('contain', 'Account').and('contain', 'Balance*').and('contain', 'Available Amount');
        accountsOverviewPage.totalBalance.should('contain', '$515.50');
        accountsOverviewPage.accountsTable.should('contain', '*Balance includes deposits that may be subject to holds');
    });

});