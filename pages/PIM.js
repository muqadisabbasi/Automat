export default class employee {
selectors = {
    AddButton : 'button.oxd-button',
}

NavigateToPIM (){
    cy.contains('PIM').click();
    cy.get(this.selectors.AddButton).contains( "Add").click()
}
}