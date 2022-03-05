describe('Teste', () => {
    beforeEach(() => {
        cy.login()
    });
    
    it('primeiro teste', () => {
        cy.visit('/')
        
    });
});