import { test, expect } from '@playwright/test';
import { Newspage } from '../pages/hackernews';

test('test', async ({ page }) => {

const hacker = new Newspage(page);
await hacker.thePage();
await hacker.testHackerNews();

        
});