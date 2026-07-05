import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the landing page', () => {
  render(<App />)

  // selecionando elementos por função
  const heading = screen.getByRole('heading')
  const combobox = screen.getByRole('combobox')
  const button = screen.getByRole('button')
  const img = screen.getByRole('img')

  // verificações sobre os elementos
  expect(heading).toHaveTextContent(/kitty directory/i)
  expect(combobox).toHaveDisplayValue('Select a breed')
  expect(button).toBeDisabled()
  expect(img).toBeInTheDocument()
})
