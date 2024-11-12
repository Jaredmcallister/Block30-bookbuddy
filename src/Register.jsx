import { useState } from "react"
const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [token, setToken] = useState('')
  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password


      })
    });
    const tokenObj = await response.json();
    const accessToken = tokenObj.access_token;
    setToken(accessToken);
    localStorage.setItem('token', accessToken);
    console.log(token);
  }
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={(event) => handleSubmit(event)}>

        <label>
          Firstname:
          <input onChange={(event) => setfirstname(event.target.value)} type="text" name="firstname" />
        </label>
        <label>
          Lastname:
          <input onChange={(event) => setlastname(event.target.value)} type="text" name="lastname" />
        </label>
        <label>
          Email:
          <input onChange={(event) => setEmail(event.target.value)} type="email" name="email" />
        </label>
        <label>
          Password:
          <input onChange={(event) => setPassword(event.target.value)} type="password" name="password" />

        //</label>
        //<input type="submit" value="Submit" />

      </form>

    </>
  )


}

export default Register