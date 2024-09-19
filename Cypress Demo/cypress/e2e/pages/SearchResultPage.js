import {BasePage} from "./BasePage";

export class SearchResultPage extends BasePage {

    static  assert = {
        matchSearchResultWithTerm(searchTerm) {
            cy.url().should('eq', 'https://en.wikipedia.org/wiki/' + searchTerm);
        },

        matchInformation(infoName, infoValue) {
            cy.get('.infobox.biography.vcard > tbody >tr >th').contains(infoName)
                .parent('tr')
                .find('.infobox-data')
                .should('include.text', infoValue)
        },

        matchSection(sectionName, sectionText) {
            cy.get('.mw-body-content > div > .mw-heading > h2').contains(sectionName)
                .parent('div')
                .next()
                .next()
                .should('include.text', sectionText)

        }
    }

}

export const searchResultPage = new SearchResultPage();