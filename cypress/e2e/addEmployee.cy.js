import employee from "../../pages/PIM"
describe ('PIM/Employee CRUD scenarios' , ()=>{
    const Employee = new employee;
    beforeEach (()=>{
        cy.visit ('/web/index.php/auth/login')
        cy.login();
    })
    it('should add the the employee ', ()=>{
        Employee.navigateToPIM();
        Employee.fillBasicInfo('Willy', 'Fills', 'Wonka');
        Employee.submitForm();
        Employee.verifySuccess();
        Employee.verifyCreation();
    })
    it('should show error when required fields are empty', () => {
        Employee.navigateToPIM();
        Employee.submitForm()
        cy.contains('Required').should('be.visible')  
  })

})
