describe('My First Test', () => {
  it('Aways true', () => {
    expect(true).to.equal(true)
  })
});

describe('Application Test', () => {

  it('Sucessfully loads the application', () =>{
    cy.visit('/');
  });

  describe('Tests for Label', () => {
    it('Should exists a label for input task-description', () => {
      cy.get('label[for=task-description]').should('exist')
    });
    
    it('Should label has a name "Description:"', () => {
      cy.get('label[for=task-description]').should('contain', 'Description:')
    });
  });

  describe('Tests for input', () => {
    it('Should exists an input with name task-description', () => {
      cy.get('input[name=task-description]').should('exist')
    });

    it('Should enter a task on input', () => {
      cy.get('input[name=task-description]').type('Check todo list')
    });
  });
  
  describe('Tests for button', () => {
    it('Should exists a button with id submit-task', () => {
      cy.get('button[id=submit-task]').should('exist')
    });

    it('Should button has a name "Submit"', () => {
      cy.get('button[id=submit-task]').should('contain', 'barosch')
    });

    it('Should click at the button', () => {
      cy.get('button[id=submit-task]').click();
    });
  });


  


});