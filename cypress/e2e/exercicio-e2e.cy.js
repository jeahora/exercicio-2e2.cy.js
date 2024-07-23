/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */
});

  beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    cy.get('.products > .row').contains('Atlas Fitness Tank').click()
    cy.get('.button-variable-item-XS').click()
    cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
    cy.get('.plus').type('2')
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain' , '2 × “Atlas Fitness Tank” foram adicionados no seu carrinho.')
    
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/');

 
    cy.get('.products > .row').contains('Abominable Hoodie').click()
    cy.get('.button-variable-item-L').click()
    cy.get('.button-variable-item-Green').click()
    cy.get('.plus').type('3')
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', '2 × “Abominable Hoodie” foram adicionados no seu carrinho.')

    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
    cy.get('.showlogin').click()
    cy.get('#username').type('jeane.teste@teste.com.br')
    cy.get('#password').type('Juan020817')
    cy.get('.woocommerce-button').click()
    cy.get('#payment_method_cod').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()
    

  

    
});
   
    

    




   
