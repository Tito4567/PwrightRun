const { test } = require('@playwright/test');
const { ElementsPage } = require('../pages/add_remove_elements');

test('Verify Dynamic Element Addition and Removal', async ({ page }) => {
    // 1. Initialize the Page Object
    const elementsPage = new ElementsPage(page);

    // 2. Navigate to the URL (Must use await)
    await elementsPage.navigate();

    // 3. Run the logic and assertions (Must use await)
    await elementsPage.runAddRemoveTest();
});












// import { test, expect } from '@playwright/test';
// import {Loc} from '../pages/add_remove_elements';

// test('test', async ({ page }) => {
 
// //   // 1. Define the locator for the buttons that appear/disappear
// // const deleteButtons = page.getByRole('button', { name: 'Delete' });

// // // 2. Navigate and get to the page
// // await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

// // // ASSERTION 1: Verify we start with a clean slate (zero delete buttons)
// // await expect(deleteButtons).toHaveCount(0);

// // // 3. Add 7 elements
// // // Using a loop keeps the code dry (Don't Repeat Yourself)
// // for (let i = 0; i < 7; i++) {
// //     await page.getByRole('button', { name: 'Add Element' }).click();
// // }

// // // ASSERTION 2: Verify the math (Should be exactly 7 buttons now)
// // await expect(deleteButtons).toHaveCount(7);

// // // 4. Remove 6 elements
// // for (let i = 0; i < 6; i++) {
// //     await deleteButtons.first().click();
// // }

// // // ASSERTION 3: The Final Proof (7 - 6 = 1)
// // await expect(deleteButtons).toHaveCount(1);

// // // OPTIONAL: Verify the remaining button is visible
// // await expect(deleteButtons).toBeVisible();


// const tester = new Loc(page);
// tester.thePage();
// tester.internetTest();

// });
