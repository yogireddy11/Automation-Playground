import { test, expect } from '@playwright/test';
import { FormFill } from '../../pages/FormFillUp';
import { generateUser } from '../../testData/data';



test.describe("Automate All Modules", () => {

    let formFill: FormFill;
    let user : ReturnType<typeof generateUser>; 


    test.beforeEach("Launch an application and perform Actions", async ({ page }) => {

        // await page.goto("https://www.sreenidhirajakrishnan.com/practice");
        // expect(page.url()).toBe("https://www.sreenidhirajakrishnan.com/practice");

        formFill = new FormFill(page);
        user = generateUser();
    })

    test("Basic form fillUp", async ({ page }) => {
       await formFill.navigateToApl();
       await formFill.form(user.username,user.password,user.email,user.phone,user.message);
    })

    // test("Perform Click actions", async ({ page }) => {
    //     await page.waitForLoadState();
    //     await page.locator('a[href="#section-2"]').click();
    //     await page.locator('#single-click-btn').click();
    //     const singleClick = page.locator('p[data-testid="single-click-result"]');
    //     expect(await singleClick.textContent()).toBe('Single clicked!');


    //     await page.locator('#double-click-btn').dblclick();
    //     const doubleClick = page.locator('p[data-testid="double-click-result"]');
    //     expect(await doubleClick.textContent()).toBe('Double clicked!');

    //     await page.locator('#right-click-btn').click({ button: 'right' })
    //     const rightClick = page.locator('p[data-testid="right-click-result"]');
    //     expect(await rightClick.textContent()).toBe('Right click captured (context menu blocked)');
    // })

    // test("Handle checkbox and radio buttons", async ({ page }) => {
    //     await page.waitForLoadState();
    //     await page.locator('a[href="#section-3"]').last().click();

    // })

});