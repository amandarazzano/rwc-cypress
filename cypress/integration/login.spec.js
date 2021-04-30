/// <reference types="cypress"  />

//import { subtract } from 'cypress/types/lodash';
import login from '../support/pages/login'

context('Login', () => {
    it('Realizar login com sucesso', () => {
        login.acessarLogin()
        login.preencherFormulario()
        login.submeterFormulario()
        
        

        //verificacao

    });

});