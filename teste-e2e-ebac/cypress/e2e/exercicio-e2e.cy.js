/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')



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
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá')

// Adiciona produto 1
        cy.visit('produtos/')
        cy.adicionarProdutoAoCarrinho(2559, 'M', 'Red')

//produto 2
        cy.visit('produtos/')
        cy.adicionarProdutoAoCarrinho(3111, 'M', 'Yellow')
//produto 3
        cy.visit('produtos/')
        cy.adicionarProdutoAoCarrinho(3073, '33', 'Brown')
//produto 4
        cy.visit('produtos/')
        cy.adicionarProdutoAoCarrinho(2622, 'M', 'Green')

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





        
