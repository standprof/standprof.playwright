import { Given, When, Then, DataTable } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { ICustomWorld } from './custom-world'
import { HomePage } from '../../pages/home-page';
import { EmailData } from '../../models/emailData';

let homePage:HomePage

Given('I open the Home page', async function (this: ICustomWorld) {
    homePage = new HomePage(this.page!);
    await homePage.goto();
});

Then('the Home page should show the {string} section', async function (this: ICustomWorld, text: string) {
   await homePage.sectionIsVisible(text)
});

Then('I should be able to open the Our Services page', async function (this: ICustomWorld) {
  await homePage.viewOurServices();
  await homePage.sectionIsVisible('OUR SERVICES')
})

When('I send the email', async function (this: ICustomWorld, table: DataTable) {
  const emailData = new EmailData()
  emailData.name = table.rows()[0][0]
  emailData.emailAddress = table.rows()[0][1]
  emailData.details = table.rows()[0][2]

  await homePage.sendEmail(emailData)
})

Then('I should see the {string}', async function (this: ICustomWorld, text: string) {
  await homePage.thankYouMessageIsDisplayed(text)
})
