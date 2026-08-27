import { BaseClass } from "./BasePage";
import { Page, expect, Locator } from '@playwright/test'

export class MultipleWindow extends BaseClass {

    private readonly windowPage: Locator;
    private readonly windowBtn: Locator;
   

    constructor(page: Page) {
        super(page);
         this.windowPage = this.pageLocator('a[href="#section-20"]');
         this.windowBtn =  this.pageLocator('#open-window-btn');


    }

    async automateWindow():Promise<void>{
        await this.windowPage.click();
        console.log("Current page title | "+await this.page.title());
        const [popup] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.windowBtn.click(),

        ]);
        await popup.waitForLoadState();
        console.log( popup.url());
        await popup.screenshot({path:'Multiple Window.png',fullPage:true});
        popup.close();
        this.page.goBack();
    }
}