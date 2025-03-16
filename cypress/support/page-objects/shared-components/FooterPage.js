class Footer {

    /**
     * Page elements Mapping
     */
    #footerPanelSelector = '#footerPanel';

    /**
     * Returns the footer
     * @author Pâmela Inacio Almeida
     */
    get footer(){
        return cy.get(this.#footerPanelSelector);
    }

     /**
     * Function to click on the Home link displayed on footer and access Home page
     * @author Pâmela Inacio Almeida
     */
    goToHomePage(){
        this.footer.contains('a', 'Home').click();
    }

     /**
     * Function to click on the About Us link displayed on footer and access About Us page
     * @author Pâmela Inacio Almeida
     */
     goToAboutUsPage(){
        this.footer.contains('a', 'About Us').click();
    }

     /**
     * Function to click on the Services link displayed on footer and access Services page
     * @author Pâmela Inacio Almeida
     */
     goToServicesPage(){
        this.footer.contains('a', 'Services').click();
    }
    
     /**
     * Function to click on the Products link displayed on footer and access Products page
     * @author Pâmela Inacio Almeida
     */
     goToProductsPage(){
        this.footer.contains('a', 'Services').click();
    }
    
     /**
     * Function to click on the Locations link displayed on footer and access Locations page
     * @author Pâmela Inacio Almeida
     */
     goToLocationsPage(){
        this.footer.contains('a', 'Locations').click();
    }
    
     /**
     * Function to click on the Forum link displayed on footer and access Forum page
     * @author Pâmela Inacio Almeida
     */
     goToForumPage(){
        this.footer.contains('a', 'Forum').click();
    }   

     /**
     * Function to click on the Site Map link displayed on footer and access Site Map page
     * @author Pâmela Inacio Almeida
     */
     goToSiteMapPage(){
        this.footer.contains('a', 'Site Map').click();
    }   

     /**
     * Function to click on the Contact Us link displayed on footer and access Contact Us page
     * @author Pâmela Inacio Almeida
     */
     goToContactUsPage(){
        this.footer.contains('a', 'Contact Us').click();
    }   
    
}

export default new Footer()