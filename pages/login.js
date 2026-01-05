export default class LoginPage {
selectors = {  
    usernameField : "[name='username']",
    passwordField : "[name='password']",
    loginButton : "[type='submit']",
    resetButton : "[type='submit']",
    resetPassUsername : "[name='username']",
    userDropdown : ".oxd-userdropdown-tab"

}
login(username, password) {
    cy.get(this.selectors.usernameField).clear().type(username);
    cy.get(this.selectors.passwordField).clear().type(password);
    cy.get(this.selectors.loginButton).click();
}

verifyLoginSuccess() {
    cy.url().should('include', 'dashboard');
    cy.wait(3000)
}

verifyLoginBlocked() {
    cy.contains("Invalid credentials").should("be.visible");
}


openForgotPassword() {
    cy.contains('Forgot your password?').click();
    cy.url().should('include', 'requestPasswordResetCode')
}

ForgotPasswordEmptyName() {
    cy.get(this.selectors.resetButton).click();
    cy.contains('Required').should('be.visible');
}

ForgotPasswordValidName(username) {
    cy.intercept('POST', '/web/index.php/auth/requestResetPassword').as('forgotPassRequest')
    cy.get(this.selectors.resetPassUsername).type(username);
    cy.get(this.selectors.resetButton).click();
    cy.wait('@forgotPassRequest').its('response.statusCode').should('eq', 302)
    cy.contains('Reset Password link sent successfully', { timeout: 10000 }).should('be.visible');
}

VerifyLogoutSuccess() {
    cy.get(this.selectors.userDropdown).click();
    cy.contains("Logout").click();
    cy.url().should('include', 'login');
}

}
