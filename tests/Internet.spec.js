const { test } = require('@playwright/test');
const { ElementsPage } = require('../pages/add_remove_elements');

test('Verify Dynamic Element Addition and Removal', async ({ page }) => {
    
    const elementsPage = new ElementsPage(page);
    await elementsPage.navigate();    
    await elementsPage.runAddRemoveTest();
});
