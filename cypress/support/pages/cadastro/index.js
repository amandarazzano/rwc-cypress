const faker = require('faker')

const el = require('./elements').ELEMENTS 

class Cadastro {

    acessarPaginaCadastro() {

        cy.visit('register');

    }

    preencherFormulario() {

        cy.get(el.inputUserName).type(faker.name.firstName() + faker.name.lastName());
        cy.get(el.inputEmail).type(faker.internet.email());
        cy.get(el.inputPassword).type(faker.internet.password());

    }

    submeterFormulario() {
        cy.get(el.buttonSubmit).click();

    }


}

export default new Cadastro();