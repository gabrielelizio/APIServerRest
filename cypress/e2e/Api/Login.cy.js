describe('API - Teste Funcional de Login', () => {
  it('Deve realizar o login com sucesso', () => {
      cy.login()
  })

  it('Deve realizar o login com senha incorreta', () => {
    cy.loginIncorreto()
  })
})

