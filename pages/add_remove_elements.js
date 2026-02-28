const { expect } = require('@playwright/test');

exports.ElementsPage = class ElementsPage {
    constructor(page) {
        this.page = page;
        
        this.addButton = page.getByRole('button', { name: 'Add Element' });
        this.deleteButtons = page.getByRole('button', { name: 'Delete' });
    }

    async navigate() {
        await this.page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    }

    async runAddRemoveTest() {
        
        await expect(this.deleteButtons).toHaveCount(0); 


        
        for (let i = 0; i < 50; i++) {
            await this.addButton.click();
        }

        
        await expect(this.deleteButtons).toHaveCount(50);

        
        for (let i = 0; i < 49; i++) {
            await this.deleteButtons.first().click();
        }

        
        await expect(this.deleteButtons).toHaveCount(1);
        await expect(this.deleteButtons).toBeVisible();
    }
}
