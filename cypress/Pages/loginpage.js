/// <reference types="cypress" />

class loginPage
{
    orangehrmlogo = ".orangehrm-login-branding > img";
    loginformtitle = "div > h5";
    usernamelabel = "form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > label:nth-child(2)";
    usernameinputfield = "input[name='username']"; 
    passwordlabel = "form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > label:nth-child(2)";
    passwordinputfield = "input[name='password']";
    loginsubmitbutton = "button[type='submit']";
    invalidcredentialsAlert = "div.oxd-alert > div.oxd-alert-content > p";


    enterUsername(username){
        cy.get(this.usernameinputfield).clear().type(username);
    }

    enterPassword(password){
        cy.get(this.passwordinputfield).clear().type(password);
    }

    clickLoginSubmitbutton(){
        cy.get(this.loginsubmitbutton).click();
    }



}
export default loginPage