import { Given, When, Then } from "@wdio/cucumber-framework";
import homePage from '../../test/pages/homePage'
import loginpage from "../../test/pages/login.page";


    Given(/^I am on Dashboard (.+)$/, async (text: string) => {
        await loginpage.submitLoginButton()
        await expect(homePage.dashboardTab).toHaveTextContaining(text)
    });
  
    When(/^I click on each page (.+)$/, async (tab: string) => {
        await homePage.getListOfPages()
        await homePage.selectPages(tab)
    });
  
    Then(/^verify the landing page (.+)$/, async (heading: string) => {
     expect(homePage.getListOfPages()).toHaveValue(heading)
     await loginpage.clickOnLoginPanel()
     await loginpage.clickOnLogoutButton()
    });