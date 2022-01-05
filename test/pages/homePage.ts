import { selectDropdown } from "../../utils/commands";

class homePage{

    get dashboardTab() {return $("a[id='menu_dashboard_index'] b")}
    get listOfPage() {return $$('.firstLevelMenu')}
    // get dashboardTab() {return $('')}
    // get dashboardTab() {return $('')}
    // get dashboardTab() {return $('')}

    async visible(){
        await this.dashboardTab.waitForDisplayed()
    }
    async getListOfPages(){
        await this.listOfPage
    }
    async selectPages(tab: string){
        await selectDropdown(this.listOfPage,tab )
    }
}
export default new homePage();