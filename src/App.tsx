import './App.css'

const App = (): JSX.Element => {
  return (

    <main className='main'>
      <h1 className='title'>Base 64 Decoder</h1>
      <section className='options'>
          <label className='option-check'>
            <input type='radio' id='rd_encode' name='action' placeholder='Encode' value='encode' checked/>
            <span>Encode</span>
          </label>
          <label className='option-check'>
            <input type='radio' id='rd_decode' name='action' placeholder='Decode' value='decode'/>
            <span>Decode</span>
          </label>
      </section>
      <section className='inputs'>
        <div className='input-container'>
          <header>
            <label>Input:</label>
          </header>
          <input type='text' id='txt_inputData' placeholder='Write a text' />
        </div>
        <div>
          <button>Encode</button>
        </div>
        <div className='input-container'>
          <header>
            <label>Output:</label>
          </header>
          <input type='text' id='txt_outputData' placeholder='Result text' />
        </div>
      </section>
      <div />
    </main>
  )
}

export default App
