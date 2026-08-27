import { BaseClass } from "./BasePage";
import { Page, expect, Locator } from '@playwright/test'

export class PerformMouseClicks extends BaseClass {

    private readonly mouseActionPage: Locator;
    private readonly dragItem :Locator;
    private readonly dropItem : Locator;
    private readonly result : Locator;
    private readonly hoverMe: Locator;
    private readonly hoverItem : Locator;
    private readonly fileUpload :Locator;
    private readonly uploadResult :Locator;

    constructor(page: Page) {
        super(page);
        this.mouseActionPage = this.pageLocator('a[href="#section-13"]');
        this.dragItem = this.pageLocator('#drag-source');
        this.dropItem =this.pageLocator('#drag-source');
        this.result = this.pageLocator('p[data-testid="drop-result"]');
        this.hoverMe = this.pageLocator('#hover-menu-trigger');
        this.hoverItem = this.pageLocator('li[data-testid="submenu-item-3"]');
        this.fileUpload =this.pageLocator('#file-upload');
        this.uploadResult = this.pageLocator('p[data-testid="file-upload-result"]');
    }


    async performAction():Promise<void>{
      await  this.mouseActionPage.click();
        await this.dragItem.dragTo( this.dropItem);
    
     //  await this.page.screenshot({path:'dropdown.png'});
       const txt = await this.result.textContent()
        console.log("Result of drag and drop | "+txt);
        // expect(txt).toContain('Item dropped');
    }

    async performHoverItem(): Promise<void> {
            await this.hoverMe.hover();
          // await this.page.screenshot({path:'mouse hover screenshot.png'});
           expect( this.hoverItem).toBeVisible();
    }

    async uploadFile():Promise<void>{
        await this.fileUpload.setInputFiles("C:\\Users\\yogireddy\\Downloads\\git-cheat-sheet-education.pdf");
        const txt = await this.uploadResult.textContent();
        console.log('Upload file result | '+txt);
        expect(txt).not.toBe('No file selected');
    }


}