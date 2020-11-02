import React from 'react'
import ReactDOM from 'react-dom'
import './index.css' 

/*
1) data of array 
2) props
3) main/app function which renders 

Each and every time you have a list in react, you need to add a key prop which helps us to keep track of what we are adding, removing, if you are using an api, keys are provided to you   

...book = spread all the properties that are coming from book object 

For adding events: attribute, eventHandler
OR 
using anonymous function
while adding the clickEventAttribute = {()=>alert('')}
or

if you want to pass an object parameter then you can do the same as of above  
*/


// Array of objects 
const bookArr = [
	{
		id: 1,	// key prop
		bookImg: 'https://images-eu.ssl-images-amazon.com/images/I/71NiPFoJx1L._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg',
		bookName: 'The Morning Star',
		bookAuthor: 'Gita V.reddy',
		bookPrice: 'Rs 293.00',
	},
	{
		id: 2,
		bookImg: 'https://images-eu.ssl-images-amazon.com/images/I/91n6oKUsMnL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg',
		bookName: 'Lost: Darkness to Light',
		bookAuthor: "Delton D'Souza",
		bookPrice: 'Rs 99.00',
	},
	{
		id: 3,
		bookImg: 'https://images-eu.ssl-images-amazon.com/images/I/91n6oKUsMnL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg',
		bookName: 'Lost: Darkness to Light',
		bookAuthor: "Delton D'Souza",
		bookPrice: 'Rs 99.00',
	},
	{
		id: 4,
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

						// const {bookImg, bookName, bookAuthor, bookPrice} = book
						return (
							<Book key={book.id} {...book}></Book>
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


ReactDOM.render(<Booklist />, document.getElementById('root'))
