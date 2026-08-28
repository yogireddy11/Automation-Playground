import { BaseClass } from "./BasePage";
import {Page, Locator, expect} from '@playwright/test'

export class Dropdown extends BaseClass{

    private readonly dropdownPage :Locator;
    private readonly standardDp :Locator;
    private readonly multiSelect :Locator;
    private readonly multiSelectResult :Locator;
     private readonly customDp :Locator;
     private readonly customDpOption :Locator;
     private readonly dynamicElements :Locator;


    constructor(page:Page){
        super(page);
        this.dropdownPage = this.pageLocator('//a[@href="#section-4"]');
            this.standardDp = this.pageLocator('#standard-select');
            this.multiSelect = this.pageLocator('#multi-select');
            this.multiSelectResult = this.pageLocator('p[data-testid="multi-select-result"]')
            this.customDp = this.pageLocator('#custom-dropdown-toggle');
            this.customDpOption = this.pageLocator('li[data-testid="custom-option-gamma"]');
            this.dynamicElements = this.pageLocator('#dynamic-select');

    }

    async handleDropdown():Promise<void>{
        await this.dropdownPage.click();
        await this.standardDp.selectOption({value:'green'})
        console.log("Drop down selected Value is | "+await this.standardDp.inputValue());

        await this.multiSelect.selectOption([{value:'java'},{value:'javascript'}]);
        console.log(this.multiSelect.inputValue());
        console.log("Multi Select dropdown result | "+await this.multiSelectResult.innerText());

        await this.customDp.click();
        await this.customDpOption.click();
        console.log("Custom dropdown option is | "+await this.customDp.innerText()); 

        await this.dynamicElements.selectOption({value:'Playwright'})
        console.log("Dynamic dropdown selected option is | "+await this.dynamicElements.innerText());

    }

}