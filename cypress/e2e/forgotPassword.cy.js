import LoginPage from "../../pages/login"; 

describe ( 'authentication scenarios' , ()=>{
    const Login = new LoginPage;
    it('should complete forgot password flow successfully', ()=>{
            cy.visit ('/web/index.php/auth/login')
            Login.openForgotPassword();
            //Leaves username field blank to check validation
            Login.ForgotPasswordEmptyName();
            //Provides valid name and checks reset password success
            Login.ForgotPasswordValidName('Admin');
        })
    })