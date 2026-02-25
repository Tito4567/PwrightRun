exports.Newspage = class hackernews 
{
    // This file and folder to follow POM model

    constructor(page)
    {
        this.page = page;
        this.hackerNewsLink = page.getByRole('link', { name: 'Hacker News' });
        this.lnew = page.getByRole('link', { name: 'new', exact: true });
        this.past = page.getByRole('link', { name: 'past' }); // <---- may need to remove
        this.comm = page.getByRole('link', { name: 'comments', exact: true });
        this.ask = page.getByRole('link', { name: 'ask' });
        this.show = page.getByRole('link', { name: 'show', exact: true });
        this.jobs = page.getByRole('link', { name: 'jobs' });
        this.sbmit = page.getByRole('link', { name: 'submit' });
    }

    async thePage()
    {
        await this.page.goto('https://news.ycombinator.com/newest');
    }
    


    async testHackerNews()
    {
        //await hackerNewsLink.goto('https://news.ycombinator.com/newest');
       //await page.waitForTimeout(30000);
        await this.lnew.click()
       // await this.past.click()
        await this.comm.click()
       // await this.ask.click()
        await this.show.click()
        await this.jobs.click()
        await this.sbmit.click()
    }
}