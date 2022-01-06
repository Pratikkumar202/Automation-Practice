import { selectDropdown } from "../../utils/commands"

class adminPage {
    get adminTab() { return $("a[id='menu_admin_viewAdminModule'] b") }

    // get userManagementTab() { return $("#menu_admin_UserManagement") }
    // get jobTab() { return $("#menu_admin_Job") }
    // get organizationTab() { return $("#menu_admin_Organization") }
    // get qualificationTab() { return $('#menu_admin_Qualifications') }
    get nationalitiesTab() { return $('#menu_admin_nationality') }
    get corporateBrandingTab() { return $('#menu_admin_addTheme') }
    // get configurationTab() { return $('#menu_admin_Configuration') }

    async clickOnAdminSubMenuByLabel(labelname: string) {
        let element = $(`//*[@id='menu_admin_viewAdminModule']/following-sibling::ul//*[text()='${labelname}']`)
        await element.waitForClickable()
        await element; element.click()
    }

    get userManagementDropdownTab() { return $$('//a[@id="menu_admin_UserManagement"]//parent::li//child::li') }
    get listOfJobDropdown() { return $$('//a[@id="menu_admin_Job"]//parent::li//child::li') }
    get organizationDropdownTab() { return $$('//a[@id="menu_admin_Organization"]//parent::li//child::li') }
    get qualificationDropdownTab() { return $$('//a[@id="menu_admin_Qualifications"]//parent::li//child::li') }
    get configurationDropdownTab() { return $$('//a[@id="menu_admin_Configuration"]//parent::li//child::li') }
    get nationalitiesDropdown() { return $$('//a[@id="menu_admin_nationality"]//parent::li//child::li') }
    get corporateBrandingDropdown() { return $$('//a[@id="menu_admin_addTheme"]//parent::li//child::li') }
    get adminpageTab() { return $$('//a[@id="menu_admin_UserManagement"]//parent::li//following-sibling::li') }


    async selectAdminSubMenuDropdown(labelname: string)  { 
        let elements = $$(`//*[@id='menu_admin_viewAdminModule']/following-sibling::ul//*[text()='${labelname}']/following-sibling::ul//a`)
        return selectDropdown(elements, labelname)
    }

    async getAdminSubMenuDropdown(){
        this.selectAdminSubMenuDropdown
    }

    async getAdminTab() {
        await this.adminTab.waitForClickable()
        await this.adminTab.click()
    }

    // async getUserManagementTab() {
    //     await this.userManagementTab.waitForExist()
    //     await this.userManagementTab.click()
    // }

    async getUserManagementDropdown(tabData: string) {
        return await selectDropdown(this.userManagementDropdownTab, tabData)
    }

    async getJobDroapdown(tabData: string) {
        return await selectDropdown(this.listOfJobDropdown, tabData)
    }
    async getOrganizationDropdown(tabData: string) {
        return await selectDropdown(this.organizationDropdownTab, tabData)
    }

    async getQualificationDropdown(tabData: string) {
        return await selectDropdown(this.qualificationDropdownTab, tabData)
    }

    async getConfigurationDropdown(tabData: string) {
        return await selectDropdown(this.configurationDropdownTab, tabData)
    }

    // async getjobTab() {
    //     await this.jobTab.waitForExist()
    //     await this.jobTab.click()
    // }

    // async getOrganizationTab() {
    //     await this.organizationTab.waitForExist()
    //     await this.organizationTab.click()
    // }

    // async getQualificationTab() {
    //     await this.qualificationTab.waitForExist()
    //     await this.qualificationTab.click()
    // }

    // async getNationalitiesTab() {
    //     await this.nationalitiesTab.waitForExist()
    //     await this.nationalitiesTab.click()
    // }

    // async getCorporateBrandingTab() {
    //     await this.corporateBrandingTab.waitForExist()
    //     await this.corporateBrandingTab.click()
    // }

    // async getConfigurationTab() {
    //     await this.configurationTab.waitForExist()
    //     await this.configurationTab.click()
    // }

    async getAdminTabsDropdown(tabData: string) {
        await selectDropdown(this.adminpageTab, tabData)
    }

    async getNationalitiesDropdown(tabsData: string) {
        return await selectDropdown(this.nationalitiesDropdown, tabsData)
    }

    async getCorporateBrandingDropdown(tabsData: string) {
        return await selectDropdown(this.corporateBrandingDropdown, tabsData)
    }
}
export default new adminPage();