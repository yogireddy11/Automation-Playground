import { Page, expect, Locator } from '@playwright/test'
import { BaseClass } from './BasePage';

export class FormFill extends BaseClass {

    private readonly sec1: Locator;
    private readonly userName: Locator;
    private readonly email: Locator;
    private readonly password: Locator;
    private readonly phone: Locator;

    private readonly msgField: Locator;
    private readonly submitBtn: Locator;


    constructor(page: Page) {
        super(page);
        this.sec1 = this.page.locator('a[href="#section-1"]').last();
        this.userName = this.pageLocator("#text-input");
        this.email = this.pageLocator("#password-input");
        this.password = this.pageLocator("#email-input");
        this.phone = this.pageLocator("#phone-input");
        this.msgField = this.pageLocator("#textarea-input");
        this.submitBtn = this.pageLocator("#form-submit");
    }


    async form(user: string, emailA: string, pass: string, phoneNum: string, msg: string): Promise<void> {
        await this.page.waitForLoadState();
        await this.sec1.click();
        await this.userName.fill(user);
        await this.email.fill(emailA);
        await this.password.fill(pass);
        await this.phone.fill(phoneNum);
        await this.msgField.fill(msg);
        await this.submitBtn.click();
        const getSuccess = this.page.getByText("Form submitted successfully");
        expect(await getSuccess.textContent()).toBe('Form submitted successfully');
    }
}