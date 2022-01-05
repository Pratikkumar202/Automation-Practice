import { Given, When, Then } from "@wdio/cucumber-framework";
import loginpage from "../../test/pages/login.page";
import adminPage from "../pages/adminPage";
import adminTabData from "../../test/resources/adminTabData.json"
import assertions from '../../utils/assertions'



  Given(/^I am on landing page (.+)$/, async (dashboard: string) => {
    await loginpage.submitLoginButton()
    await expect(loginpage.dashboard).toHaveTextContaining(dashboard)

});

//   When(/^I hover over tabs$/, async () => {
//       await adminPage.getUserManagementDropdown(adminTabData.JobDropdownData1)
// });

When(/^I hover over (.+)$/,async (tabsData: string) => {
  await adminPage.getAdminTabsDropdown(tabsData)
  // await adminPage.getUserManagementDropdown(adminTabData.JobDropdownData1)
});
Then(/^I verify the dropdown data$/, async () => {
    // await adminPage.getUserManagementTab()
    // await expect(adminPage.userManagementDropdownTab).toHaveTextContaining(adminTabData.userManagentDropdownData)
    await loginpage.clickOnLoginPanle()
    await loginpage.clickOnLogoutButton()
});

  Given(/^I move to (.+) Page$/, async (admin) => {

   await adminPage.getAdminTab() 
});