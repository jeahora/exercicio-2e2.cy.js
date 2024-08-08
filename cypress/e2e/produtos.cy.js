/// <reference types="cypress"/>
import produtosPage from "../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });
    
    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')
        cy.get('.product_title').should('contain', 'Abominable Hoodie')
       
    
    
    });

    it('Deve bsucar um produto com sucesso', () => {
        let produto = 'Ariel Roll Sleeve Sweatshirt'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
       produtosPage.visitarProduto('Helena-Hooded-Fleece') 
       cy.get('.product_title').should('contain', 'Helena Hooded Fleece')

    });

    it.only('Deve adicionar produto ao carrinho', () => {
        let qtd = 2
        produtosPage.buscarProduto('Autumn Pullie')
        produtosPage.addProdutoCarrinho('S', 'Red', qtd)

    

       
        produtosPage.buscarProduto('Selene Yoga Hoodie')
        produtosPage.addProdutoCarrinho('S', 'Orange', qtd)

        produtosPage.buscarProduto('Daphne Full-Zip Hoodie')
        produtosPage.addProdutoCarrinho('S', 'Purple', qtd)

        cy.get('.woocommerce-message').should('contain', '2 × “Daphne Full-Zip Hoodie” foram adicionados no seu carrinho.')
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('.showlogin').click()
        cy.get('#username').type('jeane.teste@teste.com.br')
        cy.get('#password').type('Juan020817')
        cy.get('.woocommerce-button').click()
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
  

        
        
    });


});