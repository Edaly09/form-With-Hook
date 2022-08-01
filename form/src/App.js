import { useState } from "react"

const App = () =>{
const [email, setemail] = useState("")
const [password, setpassword] = useState("")
// const [rememberMe, setrememberMe] = false
// const [emailIsValid, setemailIsValid] = false
// const [passwordIsValid, setpasswordIsValid] = false
// const [isSubmitted, setisSubmitted] = false

const handleEmailChange = (e) =>{
  setemail(e.target.value)
  console.log(email)
}
const handlepasswordChange = (e) =>{
  setemail(e.target.value)
  console.log(password)
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

  <input type="submit" value="Submit" />

</form>
  </>
)

}
export default App;
