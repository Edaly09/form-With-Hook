import { useState } from "react"

const App = () =>{
  // ICI j'initialise tous mes states 

const [email, setemail] = useState("")
const [password, setpassword] = useState("")
const [rememberMe, setrememberMe] = useState(false)
const [emailIsValid, setemailIsValid] = useState(false)
const [passwordIsValid, setpasswordIsValid] = useState(false)
const [isSubmitted, setisSubmitted] = useState(false)

// C'est ici je vais faire toutes mes fonctions juste au dessus du return

const handleEmailChange = (e) =>{
  const value = e.target.value
  const regEx = new RegExp(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/)
  const isValid = regEx.test(value)
  setemail(value)
  console.log(email)
}
const handlepasswordChange = (e) =>{
  const value = e.target.value
  setpassword(value)
  if(value.length > 5){
    console.log(password)
    setpasswordIsValid(true)
  }
  console.log(passwordIsValid);

}
const handleSubmit = (e)=>{
  e.preventDefault()

}
  

return(
  <>
  <h1>Mon formulaire</h1>

  <form onClick={handleSubmit}>
  <label>
    Email:
    <input type="email" name="name" onChange={handleEmailChange}/>
  </label>
  <label>
    Password:
    <input type="password" name="name" onChange={handlepasswordChange} />
  </label>

  <label>
    Remember me:
    <input type="checkbox" name="name" />
  </label>

  <button  type="submit" value="Submit" onClick={handleSubmit}> Envoyer</button>

</form>
  </>
)

}
export default App;
