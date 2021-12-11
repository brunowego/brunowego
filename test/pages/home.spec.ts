import { expect, test } from '@playwright/test'

test.describe('Home Page', () => {
  test('page should contains test texts', async ({ page }) => {
    await page.goto('/')

    const content = await page.content()

    expect(content).toContain('Hey, I\'m Bruno!')
    expect(content).toContain('Dedicate yourself every day.')
  })
})
