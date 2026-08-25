import { test, expect } from '@playwright/test';
import { generateUser } from '../../testData/data';
import { FormFill } from '../../pages/FormFillUp';
import { HandleBoxes } from '../../pages/HandleBoxes';
import { PerformClicks } from '../../pages/TypeOfClicks';
import { Dropdown } from "../../pages/DropDown";
import { DynamicContext } from '../../pages/DynamicContext';


test.describe("Automate All Modules", () => {

    let formFill: FormFill;
    let user: ReturnType<typeof generateUser>;
    let clicks: PerformClicks;
    let checkBox: HandleBoxes;
    let dropdown: Dropdown;
    let dynamicContext: DynamicContext;


    test.beforeEach("Launch an application and perform Actions", async ({ page }) => {

        await page.waitForLoadState();

        formFill = new FormFill(page);
        user = generateUser();
        clicks = new PerformClicks(page);
        checkBox = new HandleBoxes(page);
        dropdown = new Dropdown(page);
        dynamicContext = new DynamicContext(page);

    })

    test("Basic form fillUp", async ({ }) => {
        await formFill.navigateToApl();
        await formFill.form(user.username, user.password, user.email, user.phone, user.message);
    })

    test("Perform Click actions", async ({ }) => {
        await clicks.navigateToApl();
        await clicks.clickOperation();
    })

    test("Handle checkbox and radio buttons", async ({ }) => {

        await checkBox.navigateToApl();
        await checkBox.handleCheckbox();
        await checkBox.radioBtn();
    })

    test("Handle Dropdown", async ({ }) => {

        await dropdown.navigateToApl();
        await dropdown.handleDropdown();
    })

    test("Handle dynamic context",async({})=>{
        await dynamicContext.navigateToApl();
        await dynamicContext.handleDynamicContext();
    })

});