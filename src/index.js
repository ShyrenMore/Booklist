import React from 'react'
import ReactDOM from 'react-dom'

function Greeting() {
	return (
		<>		
			{/* these are react fragments , <></> */}
			<GreetingType />
			<Person />
		</>
	)
}

ReactDom.render(<Greeting />, document.getElementById('root'))
