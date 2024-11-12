import { Navigate, Outlet } from 'react-router-dom'

//I could use a path to Information to redirect from Login to information once they're logged in
//Haved logged in go to 2 separate jsx of allbookedlogged, and singlebook logged
//Use the book map from all Books and have that redirect to a single 


//Have a token that shows i'm logged in both All books and single books, All books will have a checkout button that will lead to this page
//Single books will have a logged in token that when I logged in a checkout button will appear that will lead to this page
//Information should only be accessible with a login token, and from there should only be accessed by clicking a checkout button
//Should I make a separate checkout page? for 6-8 psuedocode

//Information should just be accessible upon a label on the nav bar in home screen if the user has the token and it will show their account 
//details: Name, Email, Books currently checked out, and will give the user the option to return a book based on id?
//it would need to get a token for access

//need a way to carry the token to allbooks and singlebook so it will show a checkout button 
//need a userinfo link that needs a token to direct to info other wise it will redirect to register
//A checkout button all books or single books that will either direct to a checkout page or a register page
//
const PrivateRoutes = () => {
  let auth = localStorage.getItem('token')
  return (
    auth ? <Outlet /> : <Navigate to='/login' />
  )
}
export default PrivateRoutes

