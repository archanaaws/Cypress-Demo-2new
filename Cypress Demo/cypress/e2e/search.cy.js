import {HomePage} from "./pages/HomePage";
import {SearchResultPage} from "./pages/SearchResultPage";

describe('Search and Click Test', () => {
    it('should search for Nikola_Tesla, click on search button, and open the correct link', () => {
        cy.visit('/');
        HomePage.action.performSearch('Nikola Tesla');
        SearchResultPage.assert.matchSearchResultWithTerm('Nikola_Tesla')
        SearchResultPage.assert.matchInformation('Born', 'July 10, 1856')
        SearchResultPage.assert.matchInformation('Died', 'January 7, 1943')
        SearchResultPage.assert.matchSection('Early years', 'Nikola Tesla was born into an ethnic')
    });
  });