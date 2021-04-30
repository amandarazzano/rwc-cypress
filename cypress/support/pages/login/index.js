const el = require('./elements').ELEMENTS

class Login {

    acessarLogin() {
        //acessar a pagina de login
        cy.visit('login');

    }

    preencherFormulario() {
        //preencher o formulário 
        cy.get(el.inputEmail).type(Cypress.config().user.email);
        cy.get(el.inputPassword).type('12345678');

    }

    submeterFormulario() {
        //submeter formulario
        cy.get(el.buttonSubmit).click();

    }

}

export default new Login();