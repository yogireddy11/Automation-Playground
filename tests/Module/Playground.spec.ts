import { test, expect } from '@playwright/test';
import { generateUser } from '../../testData/data';
import { FormFill } from '../../pages/FormFillUp';
import { HandleBoxes } from '../../pages/HandleBoxes';
import { PerformClicks } from '../../pages/TypeOfClicks';
import { Dropdown } from "../../pages/DropDown";
import { DynamicContext } from '../../pages/DynamicContext';
import { HandleTable } from '../../pages/HandleTable';
import { HandleAlerts } from '../../pages/HandleAlerts';
import { HandleFrames } from '../../pages/Handleframes';


test.describe("Automate All Modules", () => {

    let formFill: FormFill;
    let user: ReturnType<typeof generateUser>;
    let clicks: PerformClicks;
    let checkBox: HandleBoxes;
    let dropdown: Dropdown;
    let dynamicContext: DynamicContext;
    let handleTable: HandleTable;
    let alerts: HandleAlerts;
    let frames: HandleFrames;


    test.beforeEach("Launch an application and perform Actions", async ({ page }) => {

        await page.waitForLoadState();

        formFill = new FormFill(page);
        user = generateUser();
        clicks = new PerformClicks(page);
        checkBox = new HandleBoxes(page);
        dropdown = new Dropdown(page);
        dynamicContext = new DynamicContext(page);
        handleTable = new HandleTable(page);
        alerts = new HandleAlerts(page);

        frames = new HandleFrames(page);

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

    test("Handle dynamic context", async ({ }) => {
        await dynamicContext.navigateToApl();
        await dynamicContext.handleDynamicContext();
    })
    test("Automate Table", async ({ page }) => {
        await handleTable.navigateToApl();
        await handleTable.automateTable();
        await handleTable.verifySeachBar('anita');
        await handleTable.verifySeachBar('sdfsdf');
    })

    test("Handle the type of Alert ", async ({ page }) => {
        await alerts.navigateToApl();
        await alerts.alertsHandling();
    })


    test('Automate iframes', async ({ page }) => {
        await frames.navigateToApl();
        await frames.performFrame();
    })

});