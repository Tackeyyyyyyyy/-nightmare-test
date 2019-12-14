const puppeteer = require('puppeteer');
const test = require('ava');


test.serial('check yahoo', async (t) => {
    const browser = await puppeteer.launch(); // 立ち上げ
    const page = await browser.newPage(); // ページ作成

    console.log('Now on yahoo page');
    await page.goto('https://www.yahoo.co.jp/');

    t.is(await page.title(), 'Yahoo! JAPAN');
    await page.screenshot({path: 'top.png'})

    await page.type('ニャホニャホタマクロー');
    await page.click('button[type="submit"]');

    await page.waitForNavigation();

    await page.screenshot({path: 'page-result.png', fullPage: true});
    await browser.close();
});