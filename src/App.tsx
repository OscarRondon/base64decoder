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
    } else {
      setTextData('')
    }
  }

  const handleBtnclearClick = (): void => {
    const $txtInputData = (document.getElementById('txtInputData') as HTMLTextAreaElement)
    const $txtOutputData = (document.getElementById('txtOutputData') as HTMLTextAreaElement)
    $txtInputData.value = ''
    $txtOutputData.value = ''
    setTextData('')
  }

  const handleBtnCopyToClipboardClick = (): void => {
    const textData = (document.getElementById('txtOutputData') as HTMLTextAreaElement).value

    navigator.clipboard.writeText(textData)
      .then(res => {
        const $copyIcon = document.getElementById('copyIcon')
        const $checkIcon = document.getElementById('checkIcon')
        $copyIcon?.classList.add('display-none')
        $checkIcon?.classList.remove('display-none')
        setTimeout(() => {
          $copyIcon?.classList.remove('display-none')
          $checkIcon?.classList.add('display-none')
        }, 1500)
      })
      .catch(err => { console.log(err) })
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
        <div className='mainButtons'>
        <button type='button' id='btnEcodeDecode' onClick={() => { handleBtnEncodeDecodeClick() }}>{typeOfAction}</button>
        <button type='button' id='btnClear' onClick={() => { handleBtnclearClick() }}>Clear</button>
        </div>
        <div className='input-container'>
          <header>
            <label>Output</label>
            <button id='copyToClipbooard' title='Copy to Clipboard' className='button-copy' onClick={() => { handleBtnCopyToClipboardClick() }}>
              <img id='copyIcon' title='Copy' src='../src/assets/icons/copy-to-clipboard.svg'/>
              <img id='checkIcon' title='Copied' src='../src/assets/icons/double-tick-icon.svg' className='display-none'/>
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
