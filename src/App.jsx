import AllBooks from "./allbooks"
import SingleBook from "./singlebook"
import Login from "./Login"
import Register from "./Register"
import { Route, Routes, Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import PrivateRoutes from "./PrivateRoutes"
import Information from "./Information"
import Checkout from "./Checkout"
import { useEffect } from "react"
import Logout from "./Logout"

//available boolean true is path for checkout so, make checkout false wont be able to checkout
//nav bar with form with login and register new account
//register new account creates a new token upon creation goes back to home screen?
//successful login pulls in token and keeps it for checkout page
//Jaredmcallisternottaken@mail.com

//Logout link that will clear out local storage 
//local storage.clear();
//Can I do a Link to / and include a local storage.clear(); I don't need a route, I just need to clear out the local storage
//I will need a checkout route to pass in props to checkout 

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/');
  }
  useEffect(() => {

    if (!token) {
      navigate('/login');
    }
  }, [token, navigate])
  return (
    <>
      <>
        <nav>
          <Link to='/'>Home</Link>

          {token ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <a href="/login"><button>Login</button></a>
          )}
          <button><Link to='/register'>Register a new user</Link></button>
          <button><Link to='/information'>Account Information</Link></button>



        </nav>

        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<AllBooks />} />
          <Route path='/logout' element={<Logout />} />
          <Route path="/books/:id" element={<SingleBook />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route element={<PrivateRoutes />}>
            <Route path='/information' element={<Information />} />
          </Route>


        </Routes>
      </>



    </>
  )
};

export default App
