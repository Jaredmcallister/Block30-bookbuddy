import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const SingleBook = () => {
  const [selectedBook, setSelectedBook] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getBook = async () => {

      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`);
      const jsonBooks = await response.json();
      setSelectedBook(jsonBooks.book);

    }
    getBook();
  }, []);
  return (
    <>
      <h2>{selectedBook.title}</h2>
      <img src={selectedBook.coverimage}
        height="350"
        width="250">

      </img>
      <br></br>
      <Link to='/checkout'> Check out this book</Link>


      <h2>{selectedBook.description}</h2>


    </>
  )
}
export default SingleBook