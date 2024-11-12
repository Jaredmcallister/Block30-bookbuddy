import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getBooks = async () => {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`)
      const allBooks = await response.json();
      console.log(allBooks);
      console.log(allBooks.books);
      setBooks(allBooks.books);

    }
    getBooks()
  }, [])
  console.log(books);
  return (


    <> {

      books.map((book) => {
        return (
          <div key={book.id}>
            <h2>{book.name}</h2>
            <p>{book.author}</p>
            <p>{book.description}</p>
            <img onClick={() => { navigate(`/books/${book.id}`) }} src={book.coverimage}
              height="350"
              width="250" />
            <br></br>

            <Link to='/checkout'> Check out this book</Link>
            {/*How to use ternary with Localstorage.getItem to lead me to checkout page, and after checkout it will navigate to the information page 
upon clicking checkout will show the info page with all of the info 
*/}
          </div>

        )
      }
      )
    }
    </>
  )
}

export default AllBooks;