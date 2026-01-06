export default class employee {
selectors = {
    AddButton : 'button.oxd-button',
    firstName: 'input[name="firstName"]',
    middleName: 'input[name="middleName"]',
    lastName: 'input[name="lastName"]',
    saveButton: 'button[type="submit"]', 
    successToast: '.oxd-toast-container .oxd-toast'
}

navigateToPIM (){
    cy.contains('PIM').click();
    cy.get(this.selectors.AddButton).contains( "Add").click()
}

fillBasicInfo(firstName, middleName, lastName) {
    cy.wrap(firstName).as('firstName')
    cy.get(this.selectors.firstName).clear().type(firstName)
    cy.get(this.selectors.middleName).clear().type(middleName)
    cy.get(this.selectors.lastName).clear().type(lastName)
    }

submitForm() {
    cy.get(this.selectors.saveButton).click()
    }

verifySuccess() {
    cy.get(this.selectors.successToast).should('be.visible')
    .and('contain.text', 'Successfully Saved')
    }
verifyCreation() {
    cy.url().should('include', 'viewPersonalDetails')
    cy.get('@firstName').then((name) => {
        cy.contains(name).should('be.visible')
    })
}
}
