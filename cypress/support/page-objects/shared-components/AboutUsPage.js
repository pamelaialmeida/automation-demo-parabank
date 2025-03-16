class AboutUsPage {

    /**
     * Page elements Mapping
     */
    #aboutUsTextTitle = '#rightPanel .title';

    /**
     * Returns the Title of the About text displayed on the page
     * @author Pâmela Inacio Almeida
     */
    get aboutUsTextTitle(){
        return cy.get(this.#aboutUsTextTitle);
    }

}

export default new AboutUsPage()