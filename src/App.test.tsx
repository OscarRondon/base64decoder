import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { Utf8toB64, B64ToUtf8 } from './logic/encodingB64'

test('Dom Test', async () => {
  const user = userEvent.setup()
  const app = render(<App />)

  const encodeData = Utf8toB64('Clave 1 test unitario')
  expect(encodeData).toEqual('Q2xhdmUgMSB0ZXN0IHVuaXRhcmlv')

  const decodeData = B64ToUtf8('Q2xhdmUgMSB0ZXN0IHVuaXRhcmlv')
  expect(decodeData).toEqual('Clave 1 test unitario')
})
