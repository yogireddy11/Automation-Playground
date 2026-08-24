import { test, expect } from '@playwright/test';

test.beforeEach("Launch an application and perform Actions", async ({ page }) => {
    await page.goto("https://www.sreenidhirajakrishnan.com/practice");
    expect(page.url()).toBe("https://www.sreenidhirajakrishnan.com/practice");
})

test("Basic form fillUp", async ({ page }) => {
    await page.locator('a[href="#section-1"]').last().click();
    console.log(await page.title());
    await page.locator("#text-input").fill("Virat Kohli");
    await page.locator("#password-input").fill("Virat@123");
    await page.locator("#email-input").fill("Virat123@gmail.com");
    await page.locator("#phone-input").fill("9630258741");
    await page.locator("#textarea-input").fill("My name is virat kohli. I'm unbeliveble player.");
    await page.locator("#form-submit").click();
    const getSuccess = page.getByText("Form submitted successfully");
     expect(await getSuccess.textContent()).toBe('Form submitted successfully');

})

test("Handle checkbox and radio buttons",async({page})=>{
        await page.locator('a[href="#section-3"]').last().click();

})