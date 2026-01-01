export default class LoginPage {
selectors = {  
    usernameField : "[name='username']",
    passwordField : "[name='password']",
    loginButton : "[type='submit']",

}

logintodashboard(username, password) {
    cy.get (this.selectors.usernameField).type (username);
    cy.get (this.selectors.passwordField).type (password);
    cy.get (this.selectors.loginButton).click();
}

}