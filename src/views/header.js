import React,{ Component } from 'react';
import Sidebar from './sidebar';

import MegaMenu from './megaMenu';

import { Link } from 'react-router-dom';
import axios from 'axios';





class Header extends React.Component{


	constructor(props) {
	    super(props);
	    this.state = {
	      products: []
	    };
	  }

	  componentDidMount() {
	    axios.get('/api/products')
	      .then(res => {
	        this.setState({ products: res.data });
	        // console.log(this.state.products);
	      });
	  }


	  

	render(){
		return(

			
			<div>

				<Sidebar />

				
				<div class="topbar">


			      <div class="topbar-column">
			          <a class="hidden-md-down" href="mailto:webeduzw@gmail.com">
			              <i class="icon-mail"></i>&nbsp; 
			              webeduzw@gmail.com
			          </a>

			          <a class="hidden-md-down" href="tel:9876543210">
			            <i class="icon-bell"></i>&nbsp; 
			            9876543210
			          </a>

			          <a class="social-button sb-facebook shape-none sb-dark" href="#" target="_blank">
			              <i class="socicon-facebook"></i>
			          </a>

			          <a class="social-button sb-twitter shape-none sb-dark" href="#" target="_blank">
			              <i class="socicon-twitter"></i>
			          </a>

			          <a class="social-button sb-instagram shape-none sb-dark" href="#" target="_blank">
			              <i class="socicon-instagram"></i>
			          </a>

			      </div>



			      <div class="topbar-column">
			          <a class="hidden-md-down" href="#">
			              <i class="icon-download"></i>&nbsp; 
			              Get mobile app
			          </a>
			      </div>
			    </div>
			    




			  
			    <header class="navbar navbar-sticky">
			      
			      <form class="site-search" method="get">
			        <input type="text" name="site_search" placeholder="Type to search..."/>
			        <div class="search-tools"><span class="clear-search">Clear</span><span class="close-search"><i class="icon-cross"></i></span></div>
			      </form>


			      <div class="site-branding">
			        <div class="inner">
			 			<a class="offcanvas-toggle cats-toggle" href="#shop-categories" data-toggle="offcanvas"></a>
			        	<a class="offcanvas-toggle menu-toggle" href="#mobile-menu" data-toggle="offcanvas"></a>
			        	<a class="site-logo" href="index-2.html"><img src="img/logo/logo.png" alt="Unishop"/></a>
			        </div>
			      </div>


		
			      <nav class="site-menu">

			      	<ul>

				      	<li class="has-megamenu active">
				          	<a href="/">
				          		<span>
				          			Home
				          		</span>
				          	</a>
				        </li>

				       


				        {this.state.products.map(product =>

				        	
				                 
		                  	<li class="has-megamenu">
					          	<Link to = {(product._id).toString()}>
						          	<span>
						          		{product.product_name}
						          	</span>
					          	</Link>


					          	<MegaMenu id={(product._id).toString()} />
					          	
					          

					        </li>
		                  
		                )}

	                </ul>

			       
			      </nav>
			    




			      <div class="toolbar">
			        <div class="inner">
			          <div class="tools">
			            <div class="search"><i class="icon-search"></i></div>
			            <div class="account"><a href="account-orders.html"></a><i class="icon-head"></i>
			              <ul class="toolbar-dropdown">
			                <li class="sub-menu-user">
			                  <div class="user-ava"><img src="img/account/user-ava-sm.jpg" alt="Daniel Adams"/>
			                  </div>
			                  <div class="user-info">
			                    <h6 class="user-name">Daniel Adams</h6><span class="text-xs text-muted">290 Reward points</span>
			                  </div>
			                </li>
			                  <li><a href="account-profile.html">My Profile</a></li>
			                  <li><a href="account-orders.html">Orders List</a></li>
			                  <li><a href="account-wishlist.html">Wishlist</a></li>
			                <li class="sub-menu-separator"></li>
			                <li><a href="#"> <i class="icon-unlock"></i>Logout</a></li>
			              </ul>
			            </div>
			            <div class="cart"><a href="cart.html"></a><i class="icon-bag"></i><span class="count">3</span><span class="subtotal">$289.68</span>
			              <div class="toolbar-dropdown">
			                <div class="dropdown-product-item">
			                	<span class="dropdown-product-remove">
			                	<i class="icon-cross"></i>
			                	</span>
			                	<a class="dropdown-product-thumb" href="shop-single.html">
			                	<img src="img/cart-dropdown/01.jpg" alt="Product"/>
			                	</a>
			                  <div class="dropdown-product-info"><a class="dropdown-product-title" href="shop-single.html">Unionbay Park</a><span class="dropdown-product-details">1 x $43.90</span></div>
			                </div>
			                <div class="dropdown-product-item">
			                	<span class="dropdown-product-remove">
			                		<i class="icon-cross"></i>
			                	</span>
			                	<a class="dropdown-product-thumb" href="shop-single.html">
			                		<img src="img/cart-dropdown/02.jpg" alt="Product"/>
			                	</a>
			                 	<div class="dropdown-product-info">
				                  	<a class="dropdown-product-title" href="shop-single.html">
				                  		Daily Fabric Cap
				                  	</a>
			                  		<span class="dropdown-product-details">
			                  			2 x $24.89
			                  		</span>
		                  		</div>
			                </div>
			                <div class="dropdown-product-item">
			                	<span class="dropdown-product-remove">
			                	<i class="icon-cross"></i>
			                	</span><a class="dropdown-product-thumb" href="shop-single.html">
			                	<img src="img/cart-dropdown/03.jpg" alt="Product"/></a>
			                  <div class="dropdown-product-info"><a class="dropdown-product-title" href="shop-single.html">Haan Crossbody</a><span class="dropdown-product-details">1 x $200.00</span></div>
			                </div>
			                <div class="toolbar-dropdown-group">
			                  <div class="column"><span class="text-lg">Total:</span></div>
			                  <div class="column text-right"><span class="text-lg text-medium">$289.68&nbsp;</span></div>
			                </div>
			                <div class="toolbar-dropdown-group">
			                  <div class="column"><a class="btn btn-sm btn-block btn-secondary" href="cart.html">View Cart</a></div>
			                  <div class="column"><a class="btn btn-sm btn-block btn-success" href="checkout-address.html">Checkout</a></div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </header>
			</div>
			

		);
	}
}


export default Header;