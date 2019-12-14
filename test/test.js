const puppeteer = require('puppeteer');
const test = require('ava');


test.serial('check google', async (t) => {
    const browser = await puppeteer.launch(); // 立ち上げ
    const page = await browser.newPage(); // ページ作成

    console.log('Now on google page');
    await page.goto('https://www.google.co.jp/');

    t.is(await page.title(), 'Google');

    await page.screenshot({path: 'example.png'})


    await browser.close();
});