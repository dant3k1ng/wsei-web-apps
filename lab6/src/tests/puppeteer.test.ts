import puppeteer from 'puppeteer';

const config = {
    index: __dirname + '../index.html'
}


test('Create note', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const app = config.index;
    await page.goto(app);

    let noteContent = 'Content';

    await page.click('input#note-content-input');
    await page.type('input#note-content-input', noteContent);
    await page.click('button#note-close');
    await page.waitForSelector('div#not-pinned-notes-container');

    let element = await page.$('div#not-pinned-notes-container');
    let value = await page.eveluate(el => el.textContent, element);
    let text = value.include(noteContent);

    expect(text).toBe(true);
    await browser.close();
})