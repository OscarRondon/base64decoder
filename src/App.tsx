import { useState } from 'react'
import './App.css'

type Action = 'Encode' | 'Decode'

const App = (): JSX.Element => {
  const [typeOfAction, setTypeOfAction] = useState<Action>('Encode')

  const handleRadioButtonOnChange = (action: Action): void => {
    setTypeOfAction(action)
  }

  return (
    <main className='main'>
      <h1 className='title'>Base 64 Decoder</h1>
      <section className='options'>
          <label className='option-check'>
            <input type='radio' id='rd_encode' name='action' placeholder='Encode' value='encode'
            checked = {typeOfAction === 'Encode'}
            onChange={() => { handleRadioButtonOnChange('Encode') }} />
            <span>Encode</span>
          </label>
          <label className='option-check'>
            <input type='radio' id='rd_decode' name='action' placeholder='Decode' value='decode'
            checked = {typeOfAction !== 'Encode'}
            onChange={() => { handleRadioButtonOnChange('Decode') }} />
            <span>Decode</span>
          </label>
      </section>
      <section className='inputs'>
        <div className='input-container'>
          <header>
            <label>Input</label>
          </header>
          <textarea id='txt_inputData' placeholder='Write a text'/>
        </div>
        <button type='button'>{typeOfAction}</button>
        <div className='input-container'>
          <header>
            <label>Output</label>
            <button id='copyToClipbooard' title='Copy to Clipboard' className='button-copy display-none'>
              <img title='Copy' src='../src/assets/icons/copy-to-clipboard.svg' className='display-none'/>
              <img title='Check' src='../src/assets/icons/double-tick-icon.svg' className='display-none'/>
            </button>
          </header>
          <textarea id='txt_outputData' placeholder='Result text' readOnly />
        </div>
      </section>
      <div />
    </main>
  )
}

export default App
