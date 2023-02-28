import './App.css'

function App () {
  return (

    <main className='main'>
      <h1>Base 64 Decoder</h1>
      <section className='options'>
        <div className='options'>
          <label>
            <input type='radio' id='rd_encode' name='action' placeholder='Encode' value='encode' checked/>
            <span>Encode</span>
          </label>
          <label>
            <input type='radio' id='rd_decode' name='action' placeholder='Decode' value='decode'/>
            <span>Encode</span>
          </label>
        </div>
      </section>
      <div />
    </main>
  )
}

export default App
