import { useNavigate } from "react-router-dom"
import { useState } from "react"
function Login({ setToken }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password


        })
      });

      const tokenObj = await response.json();
      const accessToken = tokenObj.token;
      console.log(accessToken);
      setToken(accessToken);
      localStorage.setItem('token', accessToken);
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Email:
          <input onChange={(event) => setEmail(event.target.value)} type="text" name="email" />
        </label>
        <label>
          Password:
          <input onChange={(event) => setPassword(event.target.value)} type="password" name="password" />

        </label>

        <input type="submit" value="Submit" />

      </form>

    </>
  )

}


export default Login
