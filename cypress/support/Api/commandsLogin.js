Cypress.Commands.add('login',() => {
    cy.api({
        method: 'POST',
        url: '/Login',
        body: {
          "email": "fulano@qa.com",
          "password": "teste"
        }
      }).then((response) =>{
        expect(response.status).to.equal(200)
        expect(response.body.message).to.equal('Login realizado com sucesso')
      })
    }
)


Cypress.Commands.add('loginIncorreto',() => {
cy.api({
    method: 'POST',
    url: '/Login',
    body: {
      "email": "fulano@qa.com",
      "password": "SenhaIncorreta"
    },
    failOnStatusCode:false
  }).then((response) =>{
    expect(response.status).to.equal(401)
    expect(response.body.message).to.equal('Email e/ou senha inválidos')
  })

}
)