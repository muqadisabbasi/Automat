import LoginPage from "../../pages/login"; 

describe ( 'authentication scenarios' , ()=>{
    const Login = new LoginPage;
    beforeEach(()=>{
        cy.visit ('/web/index.php/auth/login')
    })
        it(" should allow user to log in with valid credentials", ()=>{
            
            Login.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD') );
            Login.verifyLoginSuccess();
    
    })
    
        it('should show error message for invalid credentials', ()=>{
           Login.login('Invalid', 'WrongPass');
           Login.verifyLoginBlocked();
        })
        it('should logout the user successfully', () => {
            Login.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
            Login.verifyLoginSuccess()
            Login.VerifyLogoutSuccess()
    })

})