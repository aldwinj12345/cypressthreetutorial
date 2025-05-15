import loginPage from "../Pages/loginpage";

const loginpage = new loginPage();

beforeEach('Initialize baseUrl for each test',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.url().should('contain', '/auth/login'); 
});

describe('Login Page Test Suites',()=>{
    it('Test Company Logo: OrangeHRM Logo Image',()=>{
        cy.get(loginpage.orangehrmlogo)
          .should('be.visible')
          .should(([img])=>{
            expect(img.naturalWidth).to.equal(339);
            expect(img.naturalHeight).to.equal(66);
          })
    })
    it('Test Login Form Text Elements',()=>{
        cy.get(loginpage.loginformtitle).contains('Login')
        cy.get(loginpage.usernamelabel).contains('Username')
        cy.get(loginpage.passwordlabel).contains('Password')
    })
    it('Test Invalid Login: Valid Username, Incorrect Password',()=>{
        //enter valid username
        loginpage.enterUsername('Admin')
        //enter incorrect password
        loginpage.enterPassword('adminadmin')
        //click login button
        loginpage.clickLoginSubmitbutton()

        //assert that it remains in the login page
        cy.url().should('contain', '/auth/login')

        //assert Invalid credentials alert message popup in the paeg
        cy.get(loginpage.invalidcredentialsAlert)
          .should('be.visible')
          .contains('Invalid credentials')
    })
    it('Test Invalid Login: Incorrect Username, Correct Password',()=>{
        //enter valid username
        loginpage.enterUsername('aldwin')
        //enter incorrect password
        loginpage.enterPassword('admin123')
        //click login button
        loginpage.clickLoginSubmitbutton()

        //assert that it remains in the login page
        cy.url().should('contain', '/auth/login')

        //assert Invalid credentials alert message popup in the paeg
        cy.get(loginpage.invalidcredentialsAlert)
          .should('be.visible')
          .contains('Invalid credentials')
    })
    it('Test Invalid Login: Empty Username, Empty Password',()=>{
        //click login button
        loginpage.clickLoginSubmitbutton()

        //assert that it remains in the login page
        cy.url().should('contain', '/auth/login')

        //assert the error message popup just below the username input field
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text', { timeout: 5000 })
          .should('be.visible')
          .contains('Required')
        
        //assert the error message popup just below the password input field
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text', { timeout: 5000 })
          .should('be.visible')
          .contains('Required')
    })
})