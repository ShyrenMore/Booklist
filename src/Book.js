import React from 'react'

const Book = (props) => {
    // console.log(props);

	// destructuring objects (props)
	const { bookImg, bookName ,bookAuthor, bookPrice } = props // props.book, book is that mapping wala book, only required if you are not using that book, instead u are using book={book}

	const clickHandler = () => {
		alert('Redirected to Cart')
	}

	const getDatainConsole = (bookAuthor) => {
		alert('Open your console to see Book Author')
		console.log(bookAuthor)
	}
	return (
		<div className="col-sm-12 col-md-3 text-center book" onMouseDown={() => { alert('Open up your console to see Book name'); console.log(bookName) }}>
			<img src={bookImg} alt="" className="img-fluid" width="350px" height="300px" />
			<h1>{bookName}</h1>
			<h3 className="bookauthor">{bookAuthor}</h3>
			<h3>{bookPrice}</h3>
			{/* <p>{6+9}</p> */}
			<a href="#" type="button" className="btn btn-success btn-block" onClick={clickHandler}>Buy!</a>
			<a href="#" type="button" className="btn btn-danger mt-3 mb-2" onClick={()=>alert('Will not recommend again')}>Don't show again</a>
			
			<a href="#" type="button" className="btn btn-dark mt-3 mb-2" onClick={()=>getDatainConsole(bookAuthor)}>get data</a>
			
			{props.children}
		</div>
	)
}

// default export allows only one export 
export default Book;
