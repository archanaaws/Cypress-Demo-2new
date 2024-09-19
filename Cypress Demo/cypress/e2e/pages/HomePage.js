import {BasePage} from "./BasePage";

export class HomePage extends BasePage {

    static  action = {
        performSearch(searchTerm) {
            cy.get('Input[name="search"]').type(searchTerm);
            BasePage.action.submit();
        }
    }

}

export const homePage = new HomePage();