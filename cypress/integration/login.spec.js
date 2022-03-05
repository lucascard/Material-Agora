describe('Material Agora', () => {
    it('Login com sucesso', () => {
        cy.visit('/')

        cy.url()
            .should('include', '/login')

        cy.get('[type="email"]').type('emersonteles@materialagora.com')
        cy.get('[type="password"]').type('123456')
        cy.get('.login-button').click()

        cy.get('.Toastify__toast-body')
            .should('contain', 'Login bem sucedido')

        cy.url()
            .should('contain', '/overview')

        cy.wait(5000)
        cy.get('.Toastify__toast-body').should('be.not.visible')
    });
    it('Login com senha incorreta', () => {
        cy.visit('/')

        cy.get('[type="email"]').type('emersonteles@materialagora.com')
        cy.get('[type="password"]').type('1234562')
        cy.get('.login-button').click()

        cy.get('.Toastify__toast-body')
            .should('contain', 'Senha inválida')

        cy.wait(5000)
        cy.get('.Toastify__toast-body')
            .should('be.not.visible')
    });
    it('Login com email incorreto', () => {
        cy.visit('/')

        cy.get('[type="email"]').type('emersontesles@materialagora.com')
        cy.get('[type="password"]').type('123456')
        cy.get('.login-button').click()

        cy.get('.Toastify__toast-body')
            .should('contain', 'E-mail não cadastrado')

        cy.wait(5000)
        cy.get('.Toastify__toast-body')
            .should('be.not.visible')
    });
    it('Login sem email e sem senha', () => {
        cy.visit('/')

        cy.get('.login-button').click()

        cy.get('.Toastify__toast-body')
            .should('contain', 'Poxa não foi dessa vez :( mas não desista!! Tente novamente, acreditamos em você.')

        cy.wait(5000)
        cy.get('.Toastify__toast-body').should('be.not.visible')

    });
    it('Logout', () => {
        cy.visit('/')
        
        cy.get('[type="email"]').type('emersonteles@materialagora.com')
        cy.get('[type="password"]').type('123456')
        cy.get('.login-button').click()

        cy.get('.logoutIcon').click()

        cy.url()
            .should('contain', '/login')
        
        
    });
});