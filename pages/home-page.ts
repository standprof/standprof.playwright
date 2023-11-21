import { expect, type Page } from '@playwright/test';
import { CommonPage } from './common-page';
import { EmailData } from '../models/emailData';

export class HomePage extends CommonPage {

  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.standprof.co.uk');
  }

  async viewOurServices() {
    await this.page.getByText('VIEW OUR SERVICES').click();
  }

  async sendEmail(emailData: EmailData) {
    await this.page.locator('[name=Name]').fill(emailData.name)
    await this.page.locator('[name=Email]').fill(emailData.emailAddress)
    await this.page.locator('[name=Details]').fill(emailData.details)

    await this.page.getByRole('button', { name: 'Send' }).click()
  }

  async thankYouMessageIsDisplayed(text: string) {
    await expect(this.page.locator('#contactFormResponseContainer')).toHaveText(text)
  }
}
