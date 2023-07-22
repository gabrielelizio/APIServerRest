describe('API - Teste Funcional de Usuario', () => {
    it('Deve realizar o cadastro de usuário com sucesso', () => {
        cy.usuarioCadastro()
    })
  
    it('Deve realizar o cadastro de usuário com Email já cadastrado', () => {
        cy.emailCadastrado()
    })

    it.only('Deve listar usuarios já cadastrados', () => {
        cy.ListarUsuarios()
    })

    it('Deve deletar usuarios já cadastrados', () => {
        cy.deletarUsuarios()
    })
  })
  
  