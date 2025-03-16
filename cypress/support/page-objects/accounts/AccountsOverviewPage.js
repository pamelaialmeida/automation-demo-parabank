class AccountsOverviewPage {

    /**
    * Page elements Mapping
    */
    #pageTextTitle = '.title';
    #accountsTableSelector = '#accountTable';

    /**
     * Returns the text title displayed on the page
     * @author Pâmela Inacio Almeida
     */
    get pageTextTitle() {
        return cy.get(this.#pageTextTitle);
    }

    /**
     * Returns the accounts table
     * @author Pâmela Inacio Almeida
     */
    get accountsTable() {
        return cy.get(this.#accountsTableSelector);
    }

    /**
     * Returns the total balance displayed on the accounts table
     * @author Pâmela Inacio Almeida
     */
    get totalBalance() {
        return cy.get(this.#accountsTableSelector)
            .contains('td', 'Total')
            .next('td')
    }


}

export default new AccountsOverviewPage()