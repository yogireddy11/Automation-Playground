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
test("Perform Click actions",async({page})=>{
    await page.locator('a[href="#section-2"]').click();
    await page.locator('#single-click-btn').click();
    const singleClick =  page.locator('p[data-testid="single-click-result"]');
    expect( await singleClick.textContent()).toBe('Single clicked!');

    await page.locator('#double-click-btn').dblclick();
    const doubleClick =  page.locator('p[data-testid="double-click-result"]');
    expect( await doubleClick.textContent()).toBe('Double clicked!');

    await page.locator('#right-click-btn').click({button:'right'})
    const rightClick = page.locator('p[data-testid="right-click-result"]');
    expect( await rightClick.textContent()).toBe('Right click captured (context menu blocked)');
})

test("Handle checkbox and radio buttons",async({page})=>{
        await page.locator('a[href="#section-3"]').last().click();

})