import { expect, type Page } from '@playwright/test';



export class CommonPage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;

  }

  async sectionIsVisible(text: string) {
    await this.page.locator('h2').filter({ hasText: text }).scrollIntoViewIfNeeded();
    await expect(this.page.locator('h2').filter({ hasText: text })).toBeVisible();
  }
}
