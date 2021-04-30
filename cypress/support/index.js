// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
Cypress.Commands.add('backgroundLogin', () => {

    //PROCESSO DE LOGIN EM BACKGROUD
    //1. realizar uma requisição do tipo POST com email e senha
    //2. capturar o token que é recebido da nossa requisição 
    //3. usar o token recebido para usar no LOCALSORAGE

    cy.request({
        method: 'POST',
        url: `${Cypress.config().apiUrl}users/login`,
        body: {
            user: {
                email: 'agilizei-rwc@mail.com',
                password: '12345678'
            }
        }
        //capturar as informações
    }).then((loginResponse) => {
        console.log(loginResponse.body)
        cy.log(loginResponse.body.user.token)

        cy.visit('/', {
            //antes de carregar a página
            onBeforeLoad: (win) => {
                win.localStorage.setItem('jwtToken', loginResponse.body.user.token)

            }

        })
    })

})

import Routes from './routes'

before(() => {
    Routes.init()

})