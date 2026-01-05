import employee from "../../pages/PIM"
describe ('PIM/Employee CRUD scenarios' , ()=>{
    const Employee = new employee;
    beforeEach (()=>{
        cy.visit ('/web/index.php/auth/login')
        cy.login();
    })
    it('should add the the employee ', ()=>{
        Employee.NavigateToPIM();
    })
})