import React from 'react'
import ReactDOM from 'react-dom'

function Booklist() {
	return (
		<section>
			<Book/> 
		</section>
	)
}

const Book = () => {
	return (
		<article>
			This will contain three component 
				<ul>BookImg</ul>
				<ul>BookName</ul>
				<ul>BookAuthor</ul>
		</article>
	)
}


ReactDOM.render(<Booklist />, document.getElementById('root'))
