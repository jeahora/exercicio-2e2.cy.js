/// <reference types="cypress"/>
import produtosPage from "../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl('produtos')
    });
    
    it.only('Deve selecionar um produto da lista', () => {
        let produto = 'Abominable Hoodie'
        produtosPage.buscarProdutoLista(produto)
        cy.get('.product_title').should('contain', produto)
    
    });

    it('Deve bsucar um produto com sucesso', () => {
        let produto = 'Ariel Roll Sleeve Sweatshirt'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });


    it('Deve adicionar produto ao carrinho e finalizar compra', () => {
        let qtd = 2;
    
        let produto1 = 'Autumn Pullie';
        produtosPage.buscarProduto(produto1);
        produtosPage.addProdutoCarrinho('S', 'Red', qtd);
    
        let produto2 = 'Selene Yoga Hoodie';
        produtosPage.buscarProduto(produto2);
        produtosPage.addProdutoCarrinho('S', 'Orange', qtd);
    
        let produto3 = 'Daphne Full-Zip Hoodie';
        produtosPage.buscarProduto(produto3);
        produtosPage.addProdutoCarrinho('S', 'Purple', qtd);

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