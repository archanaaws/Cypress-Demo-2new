export class BasePage {
    static action = {
        submit() {
            cy.get('button[type="submit"]').click();
        }
    }
}

export const basePage = new BasePage();