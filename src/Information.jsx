import { useEffect } from "react"


//only accessible with the token, have the checkout page lead here. it will show everything in the token?
//Name, Email, and Books currently checked out
//How to display the stuff from the local storage
//display token should be simple
//
const Information = () => {
  useEffect(() => {
    const getInfo = async () => {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations',
        {
          headers: {
            'Content-Type': 'application/json',

          },
        }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);
    }
  }, [])



}

export default Information