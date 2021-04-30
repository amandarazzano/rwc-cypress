/// <reference types="cypress"  />

const faker = require('faker')

const el = require('./elements').ELEMENTS

import Routes from '../../routes'

class Articles {

    acessarFormularioDeNovaPuplicacao() {
        cy.get(el.linkNovaPublicacao).click()

    }
    preencherFormulario() {
        //preencher o formulário do arquivo
        cy.get(el.inputTitle).type('Agilizei Title')
        cy.get(el.inputDescription).type('Cypress')
        cy.get(el.textAreaContent).type(faker.lorem.paragraph())
        cy.get(el.inputTags).type('cypress');
    }

    submeterPublicacao() {
        //submeter o artigo
        cy.get(el.buttonSubmit).click()

    }

    verificarSeAPublicacaoFoiCriadaComSucesso() {

        //template string

        cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getArticles}`).then((getArticlesTitle) => {
            expect(getArticlesTitle.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getArticlesTitleComments}`).then((getArticlesTitlesComments) => {
            expect(getArticlesTitlesComments.status).to.eq(200)

        })
    }

}

export default new Articles();
