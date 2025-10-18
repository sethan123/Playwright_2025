const{test,expect}=require('@playwright/test');

const { only } = require('node:test');

test('First Playwright Test',async({browser})=>{
    const context =await browser.newContext();
    const page =await context.newPage();    
    await page.goto('https://google.com');
    console.log(await page.title());
    await page.screenshot({path:'example.png'});
});

test('Second Playwright Test',async({page})=>{
    await page.goto('https://facebook.com');
    console.log(await page.title());
    await expect(page.url()).toContain('facebook');
    await page.screenshot({path:'facebook.png'});
});


test.only('@Child windows hadl', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");

    const [newPage] = await Promise.all([
        context.waitForEvent('page'), //listen for any new page pending,rejected,fulfilled
        documentLink.click()
    ]); //new page is opened

    const text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@");
    const domain = arrayText[1].split(" ")[0];
    //console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());
});