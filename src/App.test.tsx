import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { Utf8toB64, B64ToUtf8 } from './logic/encodingB64'

test('Dom  Test', async () => {
  const user = userEvent.setup()
  const app = render(<App />)

  const txtInputData = app.container.querySelector('#txtInputData')
  const btnEcodeDecode = app.container.querySelector('#btnEcodeDecode')
  if (txtInputData !== null) { await user.type(txtInputData, 'Clave 1 test unitario') }
  if (btnEcodeDecode != null) { await userEvent.click(btnEcodeDecode) }
  const result = await app.findByDisplayValue(/Q2xhdmUgMSB0ZXN0IHVuaXRhcmlv/i, {}, { timeout: 5000 })
  expect(result).toBeTruthy()
})

test('Encode  Test', async () => {
  const encodeData = Utf8toB64('Clave 1 test unitario')
  expect(encodeData).toEqual('Q2xhdmUgMSB0ZXN0IHVuaXRhcmlv')
})

test('Decode  Test', async () => {
  const decodeData = B64ToUtf8('Q2xhdmUgMSB0ZXN0IHVuaXRhcmlv')
  expect(decodeData).toEqual('Clave 1 test unitario')
})
