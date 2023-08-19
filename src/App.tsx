import { useEffect, useState } from 'react'
import gooserLogo from '/gooser.svg'
import './App.css'

const App = () => {
  const [isFeeding, setIsFeeding] = useState(false)
  const buttonHandler = () => {
    setIsFeeding(current => !current)
  }

  useEffect( () => {
    console.log(isFeeding);
}, [isFeeding]);

  return (
    <>
      <div>
        <a href="https://github.com/marcospgcastro/gooser-bundle" target="_blank">
          <img src={gooserLogo} className="logo" alt="Gooser logo" />
        </a>
      </div>
      <h1>Gooser</h1>
      <div className="card">
        <button onClick={buttonHandler}>
          Feed the geese
        </button>
        <p>
        {isFeeding? "Feeding them...": "They're hungry!"}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Gooser logo to learn more
      </p>
    </>
  )
}

export default App
