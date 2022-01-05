import { Given, When, Then } from "@wdio/cucumber-framework";
import loginpage from "../../test/pages/login.page";

Given(/^I am on the login page \"([^\"]*)\"$/, async (pageUrl: string) => {
  await browser.url(pageUrl);
  await browser.maximizeWindow();
});

When(/^I enter username (.+)$/, async (uname: string) => {
  await loginpage.getUsername(uname);
});

Then(/^I verify on landing page (.+)$/, async (message: string) => {
  await loginpage.submitLoginButton();
  await expect(loginpage.dashboard).toHaveTextContaining(message);
});

When(/^I enter password (.+)$/, async (pwd: string) => {
  await loginpage.getPassword(pwd);
});

Then(/^I logout from application$/, async () => {
    await loginpage.clickOnLoginPanel()
    await loginpage.clickOnLogoutButton()
  });
