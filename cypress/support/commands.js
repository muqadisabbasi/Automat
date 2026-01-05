import LoginPage from "../../pages/login"
Cypress.Commands.add('login', (username = Cypress.env('USERNAME'), password = Cypress.env('PASSWORD')) => {
    const loginPage = new LoginPage()  
    loginPage.login(username, password)
})
