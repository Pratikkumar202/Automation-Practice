import { Given, When, Then } from "@wdio/cucumber-framework";
import loginpage from "../../test/pages/login.page";
import adminPage from "../pages/adminPage";
import adminTabData from "../../test/resources/adminTabData.json";
import assertions from "../../utils/assertions";
import adminData from "../../test/resources/adminData.json"

Given(/^I move to (.+) Page$/, async (admin: string) => {
  await adminPage.getAdminTab();
});

When(/^I hover over (.+)$/, async (tabsData: string) => {
  await adminPage.getAdminTabsDropdown(tabsData);
});

When(/^I click on (.+)$/, async (labelname: string) => {
  await adminPage.clickOnAdminSubMenuByLabel(labelname)
});

Then(/^I verify the dropdown data in respective (.+)$/, async (labelname: string) => {
  // await adminPage.selectAdminSubMenuDropdown(labelname)
  // await expect(adminPage.selectAdminSubMenuDropdown(labelname)).toHaveTextContaining(adminData.adminDropdownData)

  switch (labelname) {
    case "User Management":
      // await expect(adminPage.selectAdminSubMenuDropdown(labelname)).toHaveTextContaining(adminTabData.userManagentDropdownData);
      await expect(adminPage.userManagementDropdownTab).toHaveTextContaining(adminTabData.userManagentDropdownData);
      break;
    case "Job":
      await expect(adminPage.listOfJobDropdown).toHaveTextContaining(adminTabData.JobDropdownData);
      // await expect(adminPage.selectAdminSubMenuDropdown(labelname)).toHaveTextContaining(adminTabData.JobDropdownData);
      break;
    case "Organization":
      await expect(adminPage.organizationDropdownTab).toHaveTextContaining(adminTabData.organizationData);
      // await expect(adminPage.selectAdminSubMenuDropdown(labelname)).toHaveTextContaining(adminTabData.organizationData);
      break;
    case "Qualifications":
      await expect(adminPage.qualificationDropdownTab).toHaveTextContaining(adminTabData.qualificationsData);
      // await expect(adminPage.selectAdminSubMenuDropdown(labelname)).toHaveTextContaining(adminTabData.qualificationsData);
      break;
    case "Nationalities":
      await expect(adminPage.nationalitiesTab).toHaveTextContaining(adminTabData.nationalitiesData);
      // await expect(adminPage.selectAdminSubMenuDropdown(labelname)).toHaveTextContaining(adminTabData.nationalitiesData);
      break;
    case "Corporate Branding":
      await expect(adminPage.corporateBrandingTab).toHaveTextContaining(adminTabData.corporateBrandingData);
      // await expect(adminPage.selectAdminSubMenuDropdown(labelname)).toHaveTextContaining(adminTabData.corporateBrandingData);
      break;
    case "Configuration":
      await expect(adminPage.configurationDropdownTab).toHaveTextContaining(adminTabData.configurationData);
      // await expect(adminPage.selectAdminSubMenuDropdown(labelname)).toHaveTextContaining(adminTabData.configurationData);
      break;
  }

  // await loginpage.clickOnLoginPanel();
  // await loginpage.clickOnLogoutButton();
}
);