import { BaseClass } from "./BasePage";
import { Page, expect, Locator } from '@playwright/test'

export class PerformClicks extends BaseClass {

    private readonly mouseActionPage: Locator;
   




    constructor(page: Page) {
        super(page);
        this.mouseActionPage = this.pageLocator('a[href="#section-2"]');
        
    }

}