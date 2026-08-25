import { BaseClass } from "./BasePage";
import { Page, expect, Locator } from '@playwright/test'

export class HandleBoxes extends BaseClass {

    private readonly sec3: Locator;
    private readonly checkbox: Locator;
    private readonly radio: Locator;
    private readonly radioRes: Locator;

    constructor(page: Page) {
        super(page);
        this.sec3 = this.pageLocator('a[href="#section-3"]');
        this.checkbox = this.pageLocator('//input[@class="practice-checkbox"]');
        this.radio = this.pageLocator('//input[@name="practice-radio"]');
        this.radioRes = this.pageLocator('//p[@data-testid="radio-result"]');
    }

    async handleCheckbox(): Promise<void> {
        await this.sec3.click();
        const checks = await this.checkbox.count();
        for (let i = 0; i < checks; i++) {
            const box = this.checkbox.nth(i);
            if (i == 0) {
                if (!(await box.isChecked())) {
                    await box.check();
                }
                console.log(`Checkbox ${i + 1} is selected`);

            } else {
                if (await box.isChecked()) {
                    await box.uncheck();
                }

                console.log(`Checkbox ${i + 1} is not selected`);
            }

        }
    }

    async radioBtn(): Promise<void> {

        const radioCount = await this.radio.count();
        for (let i = 0; i < radioCount; i++) {
            const rad = this.radio.nth(i);
            await rad.click();
            const getRadioTxt = await this.radioRes.textContent();
            console.log("Selected Radio option | " + getRadioTxt);
        }

    }

}