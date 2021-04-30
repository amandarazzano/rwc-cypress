class Routes {

    as = {
        postArticles: 'POSTArticles',
        getArticles: 'GETArticlesTitle',
        getArticlesTitleComments: 'GETArticlesTitleComments'
    }

    init(){
        cy.server()
        cy.route('POST', '**/api/article').as(this.as.postArticles);
        cy.route('GET', '**/api/articles/agilizei-title-**').as(this.as.getArticles);
        cy.route('GET', '**/api/article/agilizei-title-**/comments').as(this.as.getArticlesTitleComments);

    }
    
}

export default new Routes ();