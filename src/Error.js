import React,{ Component } from 'react';



class Error404 extends React.Component{
	render(){
		return(

			<div class="container w3-display-middle">
				<div class="card text-center w3-padding-64">

	              <div class="card-body">
	                <h3 class="card-title">
	                	Error 404
	                </h3>
	                <p class="card-text">
	                	The page you are looking for doesn't exist.
	                </p>

	                <a class="btn btn-outline-primary" href="/">
	                	Go to home page
	                </a>
	              </div>
	            </div>
			</div>

		);
	}
}


export default Error404;