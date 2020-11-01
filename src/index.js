import React from 'react'
import ReactDOM from 'react-dom'
import './index.css' 
// import 'bootstrap/dist/css/bootstrap.min.css';

// Array of objects 
const bookArr = [
	{
		bookImg: 'https://images-eu.ssl-images-amazon.com/images/I/71NiPFoJx1L._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg',
		bookName: 'The Morning Star',
		bookAuthor: 'Gita V.reddy',
		bookPrice: 'Rs 293.00',
	},
	{
		bookImg: 'https://images-eu.ssl-images-amazon.com/images/I/91n6oKUsMnL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg',
		bookName: 'Lost: Darkness to Light',
		bookAuthor: "Delton D'Souza",
		bookPrice: 'Rs 99.00',
	},
	{
		bookImg: 'https://images-eu.ssl-images-amazon.com/images/I/91n6oKUsMnL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg',
		bookName: 'Lost: Darkness to Light',
		bookAuthor: "Delton D'Souza",
		bookPrice: 'Rs 99.00',
	},
	{
		bookImg: 'https://images-eu.ssl-images-amazon.com/images/I/91n6oKUsMnL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg',
		bookName: 'Lost: Darkness to Light',
		bookAuthor: "Delton D'Souza",
		bookPrice: 'Rs 99.00',
	},
]


function Booklist() {
	return (
		<section className="container-fluid ">
			<div className="row mt-4 justify-content-center">
				
				{/* 
					Children props are everything that we render in between the opening and closing tag of the component
					
					Objects are not valid as react child props
					
					NOTE: that does NOT imply array elements cannot be passed as child props 

					You can't pass array elements that are of type object 

					other things like text, etc are allowed 
				*/}
				{
					bookArr.map((book) => {
						// console.log(book)

						const {bookImg, bookName, bookAuthor, bookPrice} = book
						return (
							<Book book={book}></Book>
						)
					})
				}
			</div>
		</section>
	)
}

const Book = (props) => {
	// console.log(props);

	// destructuring objects (props)
	const { bookImg, bookName ,bookAuthor, bookPrice } = props.book // props.book, book is that mapping wala book

	return (
		<div className="col-sm-12 col-md-3 text-center book">
			<img src={bookImg} alt="" className="img-fluid" width="350px" height="300px" />
			<h1>{bookName}</h1>
			<h3 className="bookauthor">{bookAuthor}</h3>
			<h3>{bookPrice}</h3>
			{/* <p>{6+9}</p> */}

			{props.children}
		</div>
	)
}


ReactDOM.render(<Booklist />, document.getElementById('root'))
