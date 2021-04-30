/// <reference types="cypress"  />

import cadastro from '../support/pages/cadastro'

const faker = require('faker');

context('Cadastro', () => {
    it('Cadastrar um novo usuário', () => {

        cadastro.acessarPaginaCadastro();

        //preenchendo formulário
        cadastro.preencherFormulario();
        
        //enviar formulario
        cadastro.submeterFormulario();


    });

});