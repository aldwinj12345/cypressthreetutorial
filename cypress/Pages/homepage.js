/// <reference types="cypress" />


class homePage
{
    browseusalocationButton = "div.is-style-fill a.wp-block-button__link";
    ManageYourPostalMailOnline  = ".wp-block-column h2.Roboto-condensed"
    lookupInputfield = "#lookup"
    submitButtoni = "button[type='submit'] i"
    populatedlistbox = "ul[role='listbox']"

    clicksubmitbuttoni(){
        cy.get(this.submitButtoni).click();
    }

    enterAddress(address){
        cy.get(this.lookupInputfield).clear().type(address)
    }

}
export default homePage;