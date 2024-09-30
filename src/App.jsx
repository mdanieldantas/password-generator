import { useState } from "react"
import Input from "./components/Input"


function App() {
const [password, setPassword] = useState("")
const [copyText, setCopyText] = useState("Copiar")
const [customSize, setCustomSize] = useState(12)
const[showInput, setShowInput] = useState(false)

const passwordSize = showInput ? customSize : 8

function generate() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>/?";
  let newPassword = "";
  for (let i=0; i<passwordSize; i++) {
    const position = Math.floor(Math.random() * characters.length)
newPassword += characters[position]
  }
  setPassword(newPassword)
  setCopyText("Copiar")
}

function copyToClipboard() {
  window.navigator.clipboard.writeText(password);
  setCopyText("Copiado!")
}


  return (
    <>
    <h1>Gerador de senhas</h1>
    <div>
<label htmlFor="showImput">Customizar o tamanho: </label>
<input
type="checkbox"
id="showInput"
onChange={() => setShowInput(currentState => !currentState)}
/>
    </div>   
    {showInput &&(
      <div>  
    <label htmlFor="passwordSize">Tamanho: </label>
<Input passwordSize={customSize} setPasswordSize={setCustomSize}/>
    </div>
    ) } 

    <button onClick={generate}>Gerar senha de {showInput ? passwordSize : 8} caracteres!</button>
    <button onClick={copyToClipboard}>{copyText}</button>
    <div>{password}</div>
    </>
  )
}

export default App
