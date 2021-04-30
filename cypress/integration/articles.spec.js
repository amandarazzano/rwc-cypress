/// <reference types="cypress"  />

import articles from '../support/pages/articles'
import Routes from '../support/routes'

context('Publicação', () => {

     beforeEach(() => {
        
        //Preparação
        cy.backgroundLogin()
        articles.acessarFormularioDeNovaPuplicacao()

    });

    it('Criar uma nova publicação', () => {
        //Ação
        articles.preencherFormulario()
        articles.submeterPublicacao()


        //Verificação
        articles.verificarSeAPublicacaoFoiCriadaComSucesso()
        

    });
});

    //hooks -> momentos antes / depois do teste
    //before/beforeEach
    //after / afterEach
 