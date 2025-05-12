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

  it.only('Deve fazer login com sucesso' , () => {
//login
        cy.visit('minha-conta/')
        cy.get('#username').type('magnus181098@gmail.com')
        cy.get('#password').type('dilolilo22.')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá')
//produto 1
        cy.visit('produtos/')
        cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.single_add_to_cart_button').click()
//produto 2
        cy.visit('produtos/')
        cy.get('.post-3111 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Brown').click()
        cy.get('.single_add_to_cart_button').click()
//produto3
        cy.visit('produtos/')
        cy.get('.post-3073 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-33').click()
        cy.get('.button-variable-item-Brown').click()
        cy.get('.single_add_to_cart_button').click()
//produto 4
        cy.visit('produtos/')
        cy.get('.post-2622 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.single_add_to_cart_button').click()
//carrinho            
        cy.visit('carrinho/')
        cy.get('.checkout-button').click()
        cy.get('#billing_first_name').type('Gabriel')
        cy.get('#billing_last_name').type('Magnus')
        cy.get('#billing_address_1').type('Padre Joao Batista Reus 1959')
        cy.get('#billing_city').type('Porto Alegre')
        cy.get('#select2-billing_state-container')
        cy.get('#billing_phone').type('51994041075')
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-order-details__title').should('contain' ,'Detalhes do pedido')
        
    });





        
