import { BaseClass } from "./BasePage";
import { Page, Locator, expect } from "@playwright/test";

export class HandleFrames extends BaseClass {

    private readonly framePage: Locator;

    constructor(page: Page) {
        super(page);
        this.framePage = this.pageLocator('a[href="#section-8"]');

    }

    async performFrame(): Promise<void> {
        await this.framePage.click();

        const frame = this.page.frameLocator(
            'iframe[data-testid="practice-iframe"]'
        );

        await frame.locator('#iframe-input').fill('User name Daya');

        await frame.locator('#iframe-btn').click();
    }
}