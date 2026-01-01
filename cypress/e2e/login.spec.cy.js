import LoginPage from "../../pages/login"; 

describe ( 'Login scenarios' , ()=>{
    const Login = new LoginPage;
    it (" Login with valid credentials", ()=>{
cy.visit ('/web/index.php/auth/login')
        Login.logintodashboard (Cypress.env('USERNAME'), Cypress.env('PASSWORD') )
    })
})