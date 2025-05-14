Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('adicionarProdutoAoCarrinho', (produtoId, tamanho, cor) => {
  cy.visit('produtos/')
  cy.get(`.post-${produtoId} > .product-block > .block-inner > .image > .product-image > .image-hover`).click()
  cy.get(`.button-variable-item-${tamanho}`).click()
  cy.get(`.button-variable-item-${cor}`).click()
  cy.get('.single_add_to_cart_button').click()
})

