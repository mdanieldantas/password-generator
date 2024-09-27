import { useState } from "react"


function App() {
const [password, setPassword] = useState("")
const [copyText, setCopyText] = useState("Copiar")
const [passwordSize, setPasswordSize] = useState(12)

function generate() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>/?";
  // const length = 12;
  let newPassword = "";
  for (let i=0; i<passwordSize; i++) {
    const position = Math.floor(Math.random() * characters.length)
newPassword += characters[position]
  }
  setPassword(newPassword)
  setCopyText("Copiar")
}

// function generate() {
//   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>/?";
//   const length = 12;
//   const newPassword = Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
//   setPassword(newPassword);
// }

function copyToClipboard() {
  window.navigator.clipboard.writeText(password);
  setCopyText("Copiado!")
}


  return (
    <>
    <h1>Gerador de senhas</h1>
    <div>  
    <label htmlFor="passwordSize">Tamanho: </label>
    <input 
    type="number" 
    id ="passwordSize" 
    min={1}
    value={passwordSize}
    onChange={(ev) => setPasswordSize(event.target.value)}
    />
    </div>
    <button onClick={generate}>Gerar senha de {passwordSize} caracteres!</button>
    <button onClick={copyToClipboard}>{copyText}</button>
    <div>{password}Senha</div>
    </>
  )
}

export default App
