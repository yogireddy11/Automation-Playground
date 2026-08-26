import { BaseClass } from "./BasePage";
import { Page, Locator, expect } from "@playwright/test";

export class HandleAlerts extends BaseClass {

    private readonly alertPage: Locator;
    private readonly alert1: Locator;
    private readonly alert2: Locator;
    private readonly alert3: Locator;
    private readonly openModal : Locator;
    private readonly closeModal :Locator;
    private readonly modalTxt :Locator;

    constructor(page: Page) {
        super(page);
        this.alertPage = this.pageLocator('a[href="#section-9"]');
        this.alert1 = this.pageLocator('#alert-btn');
        this.alert2 = this.pageLocator('#confirm-btn');
        this.alert3 = this.pageLocator('#prompt-btn');
        this.openModal = this.pageLocator('#open-modal-btn');
         this.closeModal = this.pageLocator('#modal-close-btn');
         this.modalTxt = this.pageLocator('p[class="mt-2 text-sm text-muted"]');
    }

    async alertsHandling(): Promise<void> {

        await this.alertPage.click();
        this.page.once("dialog", async dialog => {
            console.log("Alert 1:", dialog.message());
            await dialog.accept();
        })
        await this.alert1.click();

        this.page.once("dialog", async dialog => {
            console.log("Alert 2:", dialog.message());
            await dialog.accept();
        })
        await this.alert2.click();

        this.page.once("dialog", async dialog => {
            console.log("Alert 3:", dialog.message());
            await dialog.accept(" Click the third alert");

        })
        await this.alert3.click();

    }

    async verifyModels():Promise<void>{
                await this.alertPage.click();
        await this.openModal.click();
        await this.page.waitForLoadState();
        console.log(await this.modalTxt.first().textContent());
        await this.closeModal.click();
    }


}