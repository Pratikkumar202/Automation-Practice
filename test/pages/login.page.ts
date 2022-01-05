import { ChainablePromiseElement } from 'webdriverio';

class loginPage{

    get userName(): ChainablePromiseElement<Promise<WebdriverIO.Element>> { return $('#txtUsername')}
    get password() {return $('#txtPassword')}
    get loginButton() {return $('#btnLogin')}
    get dashboard() { return $("a[id='menu_dashboard_index'] b")}
    get loginPanel(){ return $('a[class="panelTrigger"]')}
    get logOut(){ return $("//a[normalize-space()='Logout']")}

    async getUsername(uname: string){
       await this.userName.setValue(uname)
    }
    
    async getPassword(pwd: string){
        await this.password.setValue(pwd)
    }

    async submitLoginButton(){
        await this.loginButton.click()
    }

    async getDashboard(){
        await this.dashboard.getText()
    }
    async clickOnLoginPanel(){
        await this.loginPanel.click()
    
    }

    async clickOnLogoutButton(){
        await this.logOut.waitForDisplayed()
        await this.logOut.click()
    }
}
export default new loginPage();