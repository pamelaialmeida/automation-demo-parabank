class MenuPage {

    /**
     * Page elements Mapping
     */
    #leftPanelmessageText = '#leftPanel .smallText';

    /**
     * Retuns the message displayed on the top of the menu on the left side of the page
     * @author Pâmela Inacio Almeida
     */
    get menuMessage() {
        return cy.get(this.#leftPanelmessageText);
    }

    /**
     * Function to click on the Log out link
     * @author Pâmela Inacio Almeida
     */
    logOut() {
        cy.contains('a', 'Log Out').click();
    }

    /**
     * Function to click on the Open new account link
     * @author Pâmela Inacio Almeida
     */
    goToOpenNewAccount() {
        cy.contains('a', 'Open New Account').click();
    }
    
    /**
     * Function to click on the Accounts Overview link
     * @author Pâmela Inacio Almeida
     */
    goToAccountsOverview() {
        cy.contains('a', 'Accounts Overview').click();
    }
    
    /**
     * Function to click on the Transfer Funds link
     * @author Pâmela Inacio Almeida
     */
    goToTransferFunds() {
        cy.contains('a', 'Transfer Funds').click();
    }
    
    /**
     * Function to click on the Bill Pay link
     * @author Pâmela Inacio Almeida
     */
    goToBillPay() {
        cy.contains('a', 'Bill Pay').click();
    }
    
    /**
     * Function to click on the Find Transactions link
     * @author Pâmela Inacio Almeida
     */
    goToFindTransactions() {
        cy.contains('a', 'Find Transactions').click();
    }
    
    /**
     * Function to click on the Update Contact Info link
     * @author Pâmela Inacio Almeida
     */
    goToUpdateContactInfo() {
        cy.contains('a', 'Update Contact Info').click();
    }

    /**
     * Function to click on the Request Loan link
     * @author Pâmela Inacio Almeida
     */
    goToRequestLoan() {
        cy.contains('a', 'Request Loan').click();
    }    

}

export default new MenuPage()