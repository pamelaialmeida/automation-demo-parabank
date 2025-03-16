class Header {

    /**
     * Page elements Mapping
     */
    #headerPanelSelector = '#headerPanel';
    #homeIconSelector = '.home > a';
    #aboutUsIconSelector = '.aboutus > a';
    #contactUsIconSelector = '.contact > a';

    /**
     * Returns the header panel
     * @author Pâmela Inacio Almeida
     */
    get header() {
        return cy.get(this.#headerPanelSelector);
    }

    /**
     * Returns the Home icon displayed on the Header
     * @author Pâmela Inacio Almeida
     */
    get homeIcon(){
        return cy.get(this.#headerPanelSelector).find(this.#homeIconSelector);
    }

    /**
     * Returns the About us icon displayed on the Header
     * @author Pâmela Inacio Almeida
     */
    get aboutUsIcon(){
       return cy.get(this.#headerPanelSelector).find(this.#aboutUsIconSelector);
    }

    /**
     * Returns the Contact Us icon displayed on the Header
     * @author Pâmela Inacio Almeida
     */
    get contactUsIcon(){
        return cy.get(this.#headerPanelSelector).find(this.#contactUsIconSelector);
    }

    /**
     * Function to click on the About Us icon and access About Us page
     * @author Pâmela Inacio Almeida
     */
    goToAboutUsPage(){
        this.aboutUsIcon.click();
    }

    /**
     * Function to click on the Contact Us icon and access About Us page
     * @author Pâmela Inacio Almeida
     */
    goToContactUsPage(){
        this.contactUsIcon.click();
    }

    /**
     * Function to click on the Home icon and access Home page
     * @author Pâmela Inacio Almeida
     */
    goToHomePage(){
        this.homeIcon.click();
    }
    
}

export default new Header()