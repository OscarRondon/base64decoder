import { useState } from 'react'
import './App.css'

type Action = 'Encode' | 'Decode'

const App = (): JSX.Element => {
  const [typeOfAction, setTypeOfAction] = useState<Action>('Encode')
  const [textData, setTextData] = useState('')

  const handleRadioButtonOnChange = (action: Action): void => {
    setTypeOfAction(action)
  }

  const handleBtnEncodeDecodeClick = (): void => {
    const newTextData = (document.getElementById('txtInputData') as HTMLTextAreaElement).value
    if (newTextData !== '') {
      setTextData(newTextData)
    }
  }

  const handleBtnCopyToClipboardClick = (): void => {
    const textData = (document.getElementById('txtInputData') as HTMLTextAreaElement).value
    if (textData !== '') {
      navigator.clipboard.writeText(textData)
        .then(res => { console.log('copiado') })
        .catch(err => { console.log(err) })
    }
  }

  return (
    <main className='main'>
      <h1 className='title'>Base 64 Decoder</h1>
      <section className='options'>
          <label className='option-check'>
            <input type='radio' id='rdEncode' name='action' placeholder='Encode' value='encode'
            checked = {typeOfAction === 'Encode'}
            onChange={() => { handleRadioButtonOnChange('Encode') }} />
            <span>Encode</span>
          </label>
          <label className='option-check'>
            <input type='radio' id='rdDecode' name='action' placeholder='Decode' value='decode'
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
          <textarea id='txtInputData' placeholder='Write a text'/>
        </div>
        <button type='button' id='btnEcodeDecode' onClick={() => { handleBtnEncodeDecodeClick() }}>{typeOfAction}</button>
        <div className='input-container'>
          <header>
            <label>Output</label>
            <button id='copyToClipbooard' title='Copy to Clipboard' className='button-copy' onClick={() => { handleBtnCopyToClipboardClick() }}>
              <img id='copy' title='Copy' src='../src/assets/icons/copy-to-clipboard.svg'/>
              <img id='check' title='Check' src='../src/assets/icons/double-tick-icon.svg' className='display-none'/>
            </button>
          </header>
          <textarea id='txtOutputData' placeholder='Result text' value={textData} readOnly />
        </div>
      </section>
      <div />
    </main>
  )
}

export default App
