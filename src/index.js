import React from 'react'
import ReactDOM from 'react-dom'


function Booklist() {
	return (
		<section>
			<Book /> 
			<br />
			<Book />
		</section>
	)
}

const Book = () => {
	return (
		<article>
			<BookImg></BookImg>
			<BookName></BookName>
			<BookAuthor></BookAuthor>
			<BookPriceINR></BookPriceINR>	
		</article>
	)
}

const BookName = () => {
	return (
		<h1>The Morning Star</h1>
	)	
}

const BookAuthor = () => {
	return (
		<h3>Gita V.reddy</h3>
	)
}

const BookPriceINR = () => {
	return (
		<h3>Rs 293.00</h3>
	)
}

const BookImg = () => {
	return <img src="https://images-eu.ssl-images-amazon.com/images/I/71NiPFoJx1L._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg" alt=""/>
}


ReactDOM.render(<Booklist />, document.getElementById('root'))
