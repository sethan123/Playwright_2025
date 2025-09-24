const {test, expect} = require('@playwright/test');

test.only('Fill the element', async ({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    console.log(await page.title());
   await page.locator("[name='username']").fill('student');
   await page.locator("[name='password']").fill('Password123');
   await page.locator('#submit').click();
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

});
