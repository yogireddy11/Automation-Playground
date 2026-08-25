import { BaseClass } from "./BasePage";
import {Page, Locator, expect} from '@playwright/test'

export class DynamicContext extends BaseClass{

        private readonly dynamicContext :Locator;
         private readonly disAppearBtn :Locator;
         private readonly increment : Locator;
         private readonly incrementCount : Locator;



    constructor(page:Page){
        super(page);
        this.dynamicContext = this.pageLocator('a[href="#section-6"]');
        this.disAppearBtn = this.pageLocator('button[data-testid="disappear-btn"]');
        this.increment = this.pageLocator('#increment-btn');
        this.incrementCount = this.pageLocator('p[data-testid="counter-result"]');

    }

    async handleDynamicContext():Promise<void>{
        await this.dynamicContext.click();
        const disappear = this.disAppearBtn;
        await disappear.click();
        expect( disappear).toHaveCount(0);

        for(let i=0;i<5;i++){
            await this.increment.click();
        }
        const inc = await this.incrementCount.textContent();
        console.log("Increment Count | "+inc);
        expect(inc).toBe('Counter: 5');

    }



}