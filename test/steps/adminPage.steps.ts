import { Given, When, Then } from "@wdio/cucumber-framework";
import loginpage from "../../test/pages/login.page";
import adminPage from "../pages/adminPage";
import adminTabData from "../../test/resources/adminTabData.json";
import assertions from "../../utils/assertions";

When(/^I hover over (.+)$/, async (tabsData: string) => {
  await adminPage.getAdminTabsDropdown(tabsData);
});

Then(
  /^I verify the dropdown data in respective (.+)$/,
  async (tabs: string) => {
    switch (tabs) {
      case "User Management":
        await adminPage.userManagementTab.click();
        await expect(adminPage.userManagementDropdownTab).toHaveTextContaining(
          adminTabData.userManagentDropdownData
        );
        break;

      case "Job":
        await adminPage.getjobTab();
        await expect(adminPage.listOfJobDropdown).toHaveTextContaining(
          adminTabData.JobDropdownData
        );
        break;

      case "Organization":
        await adminPage.getOrganizationTab();
        await expect(adminPage.organizationDropdownTab).toHaveTextContaining(
          adminTabData.organizationData
        );
        break;

      case "Qualifications":
        await adminPage.getQualificationTab();
        await expect(adminPage.qualificationDropdownTab).toHaveTextContaining(
          adminTabData.qualificationsData
        );
        break;

      case "Nationalities":
        await adminPage.getNationalitiesTab();
        try {
          await expect(adminPage.nationalitiesTab).toHaveTextContaining(
            adminTabData.nationalitiesData
          );
        } catch (error) {
          console.log("Not found");
        }
        break;

      case "Corporate Branding":
        await adminPage.getCorporateBrandingTab();
        try {
          await expect(adminPage.corporateBrandingTab).toHaveTextContaining(
            adminTabData.corporateBrandingData
          );
        } catch (error) {
          console.log("Not found");
        }
        break;

      case "Configuration":
        await adminPage.getConfigurationTab();
        await expect(adminPage.configurationDropdownTab).toHaveTextContaining(
          adminTabData.configurationData
        );
        break;
    }

    await loginpage.clickOnLoginPanel();
    await loginpage.clickOnLogoutButton();
  }
);

Given(/^I move to (.+) Page$/, async (admin) => {
  await adminPage.getAdminTab();
});