import { BaseClass } from "./BasePage";
import { Page, expect, Locator } from '@playwright/test'

export class PerformClicks extends BaseClass {

    private readonly sec2: Locator;
    private readonly singleClick: Locator;
    private readonly doubleClick: Locator;
    private readonly rightClick: Locator;

    private readonly singleClickTxt: Locator;
    private readonly doubleClickTxt: Locator;
    private readonly rightClickTxt: Locator;




    constructor(page: Page) {
        super(page);
        this.sec2 = this.pageLocator('a[href="#section-2"]');
        this.singleClick = this.pageLocator('#single-click-btn');
        this.singleClickTxt = this.pageLocator('p[data-testid="single-click-result"]');
        this.doubleClick = this.pageLocator('#double-click-btn');
        this.doubleClickTxt = this.pageLocator('p[data-testid="double-click-result"]');
        this.rightClick = this.pageLocator('#right-click-btn');
        this.rightClickTxt = this.pageLocator('p[data-testid="right-click-result"]');
    }

    async clickOperation(): Promise<void> {
       await this.sec2.click();
       await this.singleClick.click();
        expect(await this.singleClickTxt.textContent()).toBe('Single clicked!');
        await this.doubleClick.dblclick();
        expect(await this.doubleClickTxt.textContent()).toBe('Double clicked!');
        await this.rightClick.click({button:"right"})
        expect(await this.rightClickTxt.textContent()).toBe('Right click captured (context menu blocked)');
    }

}