import { BaseClass } from "./BasePage";
import { Page, Locator, expect } from "@playwright/test";

export class HandleTable extends BaseClass {

    private readonly tablePage: Locator;
    private readonly tableName: Locator;
    private readonly tableHeader: Locator;
    private readonly totalPages: Locator;
    private readonly tableRow: Locator;
    private readonly nxtBtn: Locator;
    private readonly searchField :Locator;
    private readonly noRecordMsg :Locator;

    constructor(page: Page) {
        super(page);
        this.tablePage = this.pageLocator('a[href="#section-8"]');
        this.totalPages = this.pageLocator('span[data-testid="page-indicator"]')
        this.tableName = this.pageLocator('#practice-table');
        this.tableHeader = this.pageLocator('//tr[@class="border-b border-line"]');
        this.tableRow = this.pageLocator('//tbody[@data-testid="table-body"]/tr');
        this.nxtBtn = this.pageLocator('#next-page-btn');
        this.searchField = this.pageLocator('#table-search');
        this.noRecordMsg = page.getByText('No matching rows');
    }

    async automateTable(): Promise<void> {

        await this.tablePage.click();

        const pagesAvail = await this.totalPages.textContent();
        console.log("Total pages avail in table | " + pagesAvail)
        expect(pagesAvail).toContain('3');
        const getHeader = await this.tableHeader.first().textContent();
        console.log("Table header |"+getHeader?.trim());
    

        while (true) {
            const rowSize = await this.tableRow.count();
            for (let i = 0; i < rowSize; i++) {
                const rowData = await this.tableRow.nth(i).textContent();
                console.log(`Table Data | ${rowData?.trim()}   `)
            }
            const nextEnabled = await this.nxtBtn.isEnabled();
            if (!nextEnabled) {
                console.log("No more pages.");
                break;
            }

            await this.nxtBtn.click();
        }

    }

    async verifySeachBar(txt:string){
         await this.searchField.fill(txt);
         const isRecordAvail = await this.tableRow.first().innerText();
         if(isRecordAvail.includes(txt)){
                console.log("Matched record is found")
         }else {
        const recordText = await this.tableRow.first().innerText();

        if (recordText.toLowerCase().includes(txt.toLowerCase())) {
            console.log("Matched record is found");
        } else {
            console.log("Record found, but search text does not match");
        }
    }
        
    }

}