/// <reference types="cypress" />
let dadosLogin

context('Funcionalidade Login', () => {
    before(() => {
        cy.fixture('perfil').then(perfil => {
            dadosLogin = perfil
        })
    });

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Login com sucesso usando Comando customizado', () => {
        cy.login('jeane.teste@teste.com.br', 'Juan020817')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, jeane.teste')
    });

    it('Login usando fixture', () => {
        cy.fixture('perfil').then( dados => {
        cy.get('#username').type(dados.usuario)
        cy.get('#password').type(dados.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, jeane.teste')
        })
        
    });

    it('Deve fazer login com sucesso - sem otimização', () => {
        cy.get('#username').type('jeane.teste@teste.com.br')
        cy.get('#password').type('Juan020817', { log: false })
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, jeane.teste')
    })
})