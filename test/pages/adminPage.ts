import { selectDropdown } from "../../utils/commands"

class adminPage{
    get adminTab() {return $("a[id='menu_admin_viewAdminModule'] b")}
    get jobTab() {return $("#menu_admin_Job")}
    get userManagementTab() {return $("#menu_admin_UserManagement")}
    get userManagementDropdownTab() {return $$('//a[@id="menu_admin_UserManagement"]//parent::li//child::li')}
    get listOfJobDropdown() {return $$('//a[@id="menu_admin_Job"]//parent::li//child::li')}
    get organizationTab() {return $("#menu_admin_Organization")}
    get organizationDropdownTab() {return $$('//a[@id="menu_admin_Organization"]//parent::li//child::li')}
    get qualificationTab() {return $('#menu_admin_Qualifications')}
    get qualificationDropdownTab() {return $$('//a[@id="menu_admin_Qualifications"]//parent::li//child::li')}
    get configurationDropdownTab() {return $$('//a[@id="menu_admin_Configuration"]//parent::li//child::li')}
    get nationalitiesTab() {return $('#menu_admin_nationality')}
    get corporateBrandingTab() {return $('#menu_admin_addTheme')}
    get configurationTab() {return $('#menu_admin_Configuration')}
    get adminpageTab() {return $$('//a[@id="menu_admin_UserManagement"]//parent::li//following-sibling::li')}
    
    async getAdminTab(){
        await this.adminTab.click()
    }

    async getUserManagementTab(){
        await this.userManagementTab.waitForExist()
        await this.userManagementTab.click()
    }

    async getUserManagementDropdown(tabData: string){
        await selectDropdown(this.userManagementDropdownTab,tabData)
    }

    async getJobDroapdown(tabData: string){
        await selectDropdown(this.listOfJobDropdown,tabData)
    }
    async getOrganizationDropdown(tabData: string){
        await selectDropdown(this.organizationDropdownTab,tabData)
    }

    async getQualificationDropdown(tabData: string){
        await selectDropdown(this.qualificationDropdownTab,tabData)
    }

    async getConfigurationDropdown(tabData: string){
        await selectDropdown(this.configurationDropdownTab,tabData)
    }

    async getjobTab(){
        await this.jobTab.waitForExist()
        await this.jobTab.click()
    }

    async getOrganizationTab(){
        await this.organizationTab.waitForExist()
        await this.organizationTab.click()
    }

    async getQualificationTab(){
        await this.qualificationTab.waitForExist()
        await this.qualificationTab.click()
    }

    async getNationalitiesTab(){
        await this.nationalitiesTab.waitForExist()
        await this.nationalitiesTab.click()
    }

    async getCorporateBrandingTab(){
        await this.corporateBrandingTab.waitForExist()
        await this.corporateBrandingTab.click()
    }

    async getConfigurationTab(){
        await this.configurationTab.waitForExist()
        await this.configurationTab.click()
    }

    async getAdminTabsDropdown(tabData: string){
        await selectDropdown(this.adminpageTab,tabData)
    }
}
export default new adminPage();