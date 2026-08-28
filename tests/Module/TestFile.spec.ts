
import { test, expect } from '@playwright/test';
import { MultipleWindow } from '../../pages/MultipleWindow';
        let multipleWin : MultipleWindow;

    test.beforeEach("Launch an application and perform Actions", async ({ page }) => {
        await page.waitForLoadState();
        multipleWin = new MultipleWindow(page);
    })

    test(" Handle Multiple window  ",async({})=>{
        await multipleWin.navigateToApl();
        await multipleWin.automateWindow();
    })

     
