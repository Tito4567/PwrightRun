import { test, expect } from '@playwright/test';
import { Newspage } from '../pages/hackernews';

test('test', async ({ page }) => {
//   await page.goto('https://news.ycombinator.com/newest');
//   await page.getByRole('link', { name: 'Hacker News' }).click();
//   await page.getByRole('link', { name: 'new', exact: true }).click();
//   await page.getByRole('link', { name: 'past' }).first().click();
//   await page.getByRole('link', { name: 'comments', exact: true }).click();
//   await page.getByRole('link', { name: 'ask' }).click();
//   await page.getByRole('link', { name: 'show', exact: true }).click();
//   await page.getByRole('link', { name: 'jobs' }).click();
//   await page.getByRole('link', { name: 'submit' }).click();
//   await page.goto('https://news.ycombinator.com/jobs');
//   await page.getByRole('link', { name: 'Verge (YC S15) Is Hiring a' }).click();
//   await page.goto('https://news.ycombinator.com/jobs');
//   await page.getByRole('link', { name: 'SIM (YC X25) Is Hiring the' }).click();
//   await page.goto('https://news.ycombinator.com/jobs');
//   await page.getByRole('link', { name: 'Hadrius (YC W23) Is Hiring' }).click();
//   await page.goto('https://news.ycombinator.com/jobs');
//   await page.getByRole('link', { name: 'Bitmovin (YC S15) Is Hiring' }).click();
//   await page.goto('https://news.ycombinator.com/jobs');

const hacker = new Newspage(page);
await hacker.thePage();
await hacker.testHackerNews();

        
});