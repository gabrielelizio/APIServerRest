Cypress.Commands.add('usuarioCadastro',() => {
    cy.api({
        method: 'POST',
        url: '/usuarios',
        body: {
          "nome":"Fulano da Silva",
          "email": "fulanodaSilva2@qa.com",
          "password": "teste",
          "administrador":"true"
        }
      }).then((response) =>{
        expect(response.status).to.equal(201)
        expect(response.body.message).to.equal('Cadastro realizado com sucesso')
     
      })
    }
)


Cypress.Commands.add('emailCadastrado',() => {
    cy.api({
        method: 'POST',
        url: '/usuarios',
        body: {
          "nome":"Fulano da Silva",
          "email": "fulano@qa.com",
          "password": "teste",
          "administrador":"true"
        },
        failOnStatusCode:false
      }).then((response) =>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('Este email já está sendo usado')
     
      })
    }
)
Cypress.Commands.add('ListarUsuarios',() => {
    cy.api({
        method: 'GET',
        url: '/usuarios',
       
      })
      .then((response) =>{
        expect(response.status).to.equal(200)
           //  expect(response.body.message).to.equal('Este email já está sendo usado')
     
      })
    }
)

Cypress.Commands.add('deletarUsuarios',() => {
    cy.api({
        method: 'DELETE',
        url: '/usuarios/9bLqrDw8xIGhVQPm',
        // body:{
        //     "_id":"9bLqrDw8xIGhVQPm",
        // }
        //failOnStatusCode:false
      })
      .then((response) =>{
        expect(response.status).to.equal(200)
           //  expect(response.body.message).to.equal('Este email já está sendo usado')
     
      })
    }
)