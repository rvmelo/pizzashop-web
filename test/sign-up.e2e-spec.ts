import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('Jhon Doe')
  await page.getByLabel('Seu e-mail').fill('jhondoe@gmail.com')
  await page.getByLabel('Seu celular').fill('123456789123')

  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso!')

  expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Invalid Name')
  await page.getByLabel('Seu nome').fill('Jhon Doe')
  await page.getByLabel('Seu e-mail').fill('jhondoe@gmail.com')
  await page.getByLabel('Seu celular').fill('123456789123')

  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Erro ao cadastrar restaurante.')

  expect(toast).toBeVisible()
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})
