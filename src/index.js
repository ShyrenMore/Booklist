import React from 'react'
import ReactDOM from 'react-dom'
import './index.css' 
// import 'bootstrap/dist/css/bootstrap.min.css';

function Booklist() {
	return (
		<section className="container-fluid">
			<div className="row mt-4">
				<Book /> 
				<Book />
			</div>
		</section>
	)
}

const Book = () => {
	return (
		<div className="col-sm-12 col-md-3 col-lg-4 text-center book">
			<BookImg></BookImg>
			<BookName></BookName>
			<BookAuthor></BookAuthor>
			<BookPriceINR></BookPriceINR>	
		</div>
	)
}

const BookName = () => {
	return (
		<h1>The Morning Star</h1>
	)	
}

const BookAuthor = () => {
	return (
		<h3 className="bookauthor">Gita V.reddy</h3>
	)
}

const BookPriceINR = () => {
	return (
		<h3>Rs 293.00</h3>
	)
}

const BookImg = () => {
	return <img src="https://images-eu.ssl-images-amazon.com/images/I/71NiPFoJx1L._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg" alt="" width="400px"/>
}


ReactDOM.render(<Booklist />, document.getElementById('root'))
