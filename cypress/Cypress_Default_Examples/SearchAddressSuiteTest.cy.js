import homePage from "../Pages/homepage";

const homep = new homePage();

beforeEach('Launch Base Test URL',()=>{
    cy.visit("https://www.anytimemailbox.com/");
    //assert that it contains a certain title called Manage Your Postal Mail Online
    cy.get(homep.ManageYourPostalMailOnline).contains("Manage Your Postal Mail Online");
    //assert browser usa location button
    cy.get(homep.browseusalocationButton)
      .should('be.visible')
      .should('have.attr', 'href', 'https://www.anytimemailbox.com/l/usa')
      .and('be.enabled')
      .and('contains', 'Browse USA Locations')
})

describe('Search Address Test Suite',()=>{
    
    it.only('Address or City search successfully returns a location',()=>{
      const thisaddress = "Santa Clara Ave Alameda"

      //input address
      homep.enterAddress(thisaddress);

      //assert that the populated result should be visible
      cy.get(homep.populatedlistbox).should('be.visible')

      //assert that each list under the populated listbox are like terms based on what I entered
      cy.get(homep.populatedlistbox).then(($result_suggestions)=>{
        //iterate through each given suggestion and assert each that it includes the searched word
        $result_suggestions.each((index, $element)=>{
          const suggestionText = $element.textContent.toLowerCase();
          expect(suggestionText).to.include(thisaddress.toLowerCase());
        });

      });
        
    });

})