import { books } from "./data";

function ShowBook(props){
    return(
        <>
        <li>
        {props.bkid}<br/>
        {props.bkname}<br/>
        {props.bkprice}<br/>
        </li>
        </>
    )
}

function ListBooks() {
    let books1=books;

  return (
    <div>
        <h1>List of Books:</h1>
        <ul>
        {books.map(book => ( 
          <ShowBook key={book.bkid} bkid={book.bkid} bkname={book.bkname} bkprice={book.bkprice} /> 
        ))}
        </ul>

    </div>
  )
}

export default ListBooks;