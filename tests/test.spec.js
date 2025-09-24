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