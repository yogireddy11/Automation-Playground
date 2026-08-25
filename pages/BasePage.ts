import { Page } from "@playwright/test";

export class BaseClass{

    readonly page:Page;

    constructor(page:Page){
        this.page=page;
    }

    protected pageLocator(selector:string){
        return this.page.locator(selector);
    }

    async navigateToApl(): Promise<void>{
        await this.page.goto("/");
    }


}