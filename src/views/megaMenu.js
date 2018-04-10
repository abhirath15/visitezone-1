import React,{ Component } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

class MegaMenu extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
	      productCat: [],
	      id: props.id
	    };
	  }

	  componentDidMount() {
	    axios.get('/api/productCat/'+this.state.id)
	      .then(res => {
	        this.setState({ productCat: res.data });
	      });
	  }


	render(){

		
		return(

			
				<ul class="mega-menu">
			              <li>
				              <span class="mega-menu-title">
				              	Category 1
				              </span>

			                  <ul class="sub-menu">

			                  	{this.state.productCat.map(cat =>

				                    <li><a href="#">{cat.cat_name}</a></li> 

			                    )}
			                  </ul>
			              </li>
			             
			    </ul>
			

		);
	}
}




export default MegaMenu;