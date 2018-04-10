import React ,{ Component } from 'react';


class Promo extends React.Component{
	render(){
		return(

			<div>
			      <section class="container-fluid padding-top-3x">
			        <div class="row justify-content-center">
			          <div class="col-xl-5 col-lg-6 mb-30">
			            <div class="rounded bg-faded position-relative padding-top-3x padding-bottom-3x">
			            <span class="product-badge text-danger" style={{top: '24px'},{left: '24px'}}>Limited Offer</span>
			              <div class="text-center">
			                <h3 class="h2 text-normal mb-1">New</h3>
			                <h2 class="display-2 text-bold mb-2">Sunglasses</h2>
			                <h4 class="h3 text-normal mb-4">collection at discounted price!</h4>
			                <div class="countdown mb-3" data-date-time="06/30/2018 12:00:00">
			                  <div class="item">
			                    <div class="days">00</div><span class="days_ref">Days</span>
			                  </div>
			                  <div class="item">
			                    <div class="hours">00</div><span class="hours_ref">Hours</span>
			                  </div>
			                  <div class="item">
			                    <div class="minutes">00</div><span class="minutes_ref">Mins</span>
			                  </div>
			                  <div class="item">
			                    <div class="seconds">00</div><span class="seconds_ref">Secs</span>
			                  </div>
			                </div>
			                <br/>
			                <a class="btn btn-primary margin-bottom-none" href="#">View Offers</a>
			              </div>
			            </div>
			          </div>
			          <div class="col-xl-5 col-lg-6 mb-30" style={{minHeight: '270px'}}>
			            <div class="img-cover rounded" style={{backgroundImage: "url('img/banners/home01.jpg')"}}>
			            </div>
			          </div>
			        </div>
			      </section>






			 
			      <section class="container-fluid">
			        <div class="row justify-content-center">
			          <div class="col-xl-10 col-lg-12">
			            <div class="fw-section rounded padding-top-4x padding-bottom-4x" style={{backgroundImage: "url('img/banners/home02.jpg')"}}>
			            <span class="overlay rounded" style={{opacity: '.35'}}></span>
			              <div class="text-center">
			                <h3 class="display-4 text-normal text-white text-shadow mb-1">Old Collection</h3>
			                <h2 class="display-2 text-bold text-white text-shadow">HUGE SALE!</h2>
			                <h4 class="d-inline-block h2 text-normal text-white text-shadow border-default border-left-0 border-right-0 mb-4">at our outlet stores</h4><br/><a class="btn btn-primary margin-bottom-none" href="contacts.html">Locate Stores</a>
			              </div>
			            </div>
			          </div>
			        </div>
			      </section>
			</div>

		);
	}
}


export default Promo;