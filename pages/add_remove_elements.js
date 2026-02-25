const { expect } = require('@playwright/test');

exports.ElementsPage = class ElementsPage {
    constructor(page) {
        this.page = page;
        // Define locators once here
        this.addButton = page.getByRole('button', { name: 'Add Element' });
        this.deleteButtons = page.getByRole('button', { name: 'Delete' });
    }

    async navigate() {
        await this.page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    }

    async runAddRemoveTest() {
        // ASSERTION 1: Verify we start with zero delete buttons
        await expect(this.deleteButtons).toHaveCount(0);

        // Action: Add 7 elements
        for (let i = 0; i < 7; i++) {
            await this.addButton.click();
        }

        // ASSERTION 2: Verify all 7 buttons are present
        await expect(this.deleteButtons).toHaveCount(7);

        // Action: Remove 6 elements
        for (let i = 0; i < 6; i++) {
            await this.deleteButtons.first().click();
        }

        // ASSERTION 3: Verify the final count is 1 and it is visible
        await expect(this.deleteButtons).toHaveCount(1);
        await expect(this.deleteButtons).toBeVisible();
    }
}
