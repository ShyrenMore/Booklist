import React from 'react'
import ReactDOM from 'react-dom'
import './index.css' 
import { bookArr } from './bookData'
import Book from './Book'
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

Most Components use default export(import without braces)

*/


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


ReactDOM.render(<Booklist />, document.getElementById('root'))
