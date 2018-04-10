import React, { Component } from 'react';
import Header from './views/header';
import Carousel from './views/carousel';
import TopCategories from './views/topCategories';
import Promo from './views/promo';
import FeaturedProducts from './views/featuredProduct';
import ProductWidgets from './views/productWidgets';
import Brands from './views/brands';
import Service from './views/service';
import Footer from './views/footer';


class App extends Component {

  render() {
    return (
      
      <div>
        
        <Header />


        <div class="offcanvas-wrapper">
          <Carousel />
          <TopCategories />
          <Promo />


          <FeaturedProducts />
          <ProductWidgets />
          <Brands />
          <Service />
          <Footer />
        </div>
       
      </div>
    );
  }
}

export default App;
