import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

import ContactList from "./components/ContactList";
import Contact from "./components/Contact";

class App extends Component {
  // default state object
  state = {
    contacts: []
  };

  componentDidMount() {
    axios
      .get("https://loganwdev.com/wp-json/wp/v2/projects")
      .then(response => {
        // create an array of contacts only with relevant data
        const newContacts = response.data.map(c => {
          return {
            pic: c.acf.project_picture,
            cancontent: c.acf.tester3,
            id: c.id,
            type: c.type,
            title: c.title.rendered,
          };
        });

        // create a new "state" object without mutating
        // the original state object.
        const newState = Object.assign({}, this.state, {
          contacts: newContacts
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
       	
<header class="site__header">
  <nav class="properties-nav">
    <ul class="right-menu">
      <li> <a href="#">Mobile</a></li>
      <li><a href="#">Internet</a></li>
    </ul>
    <ul class="left-menu">
      <li><a href="#">About</a></li>
      <li><a href="#">Help</a></li>
      <li><a href="#" class="btn-cta">Sign up / Sign in</a></li>
    </ul>
  </nav>
  <nav class="main-nav">
    <div class="brand">
      <h1><a href="#"> 
          <span class="brand_tagline">link</span></a></h1>
    </div>
    <ul class="main-menu">
      <li> <a href="#">link 1</a></li>
      <li style={{display:'none'}}><a href="#"> </a></li>
      <li class="dropdown-submenu"><a href="#">Ting towns</a>
        <ul>
          <li><a href="#">a
              bye</a></li>
          <li><a href="#">b
              bye</a></li>
          <li><a href="#">c
              bye</a></li>
          <li><a href="#">d
              bye</a></li>
          <li><a href="#">e
              bye</a></li>
          <li><a href="#">f
              bye</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</header>
<section class="section section__welcome-intro">
  <div class="container"> 
    <h2 class="section__title">Welcome to <span>Canigan Health</span></h2>
    <p class="section__overview" style={{background:'#222',maxWidth:'67%',margin:'auto',color:'#fff',padding:'5px 7px 5px 7px'}}>Need income ? covids got you fucked up?</p>
  </div>
</section>
        <ContactList contacts={this.state.contacts} />
{/* <section class="section section__towns">
  <div class="container">
    <h2 class="section__title">Get the best Internet in town.</h2>
    <p class="section__overview">Order <strong>crazy fast fiber Internet.</strong> today! </p>
    <ul class="towns-list">
      <li class="town">
        <figure>
          <div class="town__vector-bg"></div>
          <figcaption class="town__link"><a href="#">Centennial, CO</a></figcaption>
        </figure>
      </li>
      <li class="town">
        <figure>
          <div class="town__vector-bg"></div>
          <figcaption class="town__link"><a href="#">Charlottesville, VA  </a></figcaption>
        </figure>
      </li>
      <li class="town">
        <figure>
          <div class="town__vector-bg"></div>
          <figcaption class="town__link"><a href="#">Holly Springs, NC</a></figcaption>
        </figure>
      </li>
      <li class="town">
        <figure>
          <div class="town__vector-bg"></div>
          <figcaption class="town__link"><a href="#">Sandpoint, ID</a></figcaption>
        </figure>
      </li>
      <li class="town">
        <figure>
          <div class="town__vector-bg"></div>
          <figcaption class="town__link"><a href="#">Westminster, MD </a></figcaption>
        </figure>
      </li>
      <li class="town">
        <figure>
          <div class="town__vector-bg"></div>
          <figcaption class="town__link"><a href="#">Centennial, CO </a></figcaption>
        </figure>
      </li>
    </ul>
  </div>
</section> */}
<section class="section section__where-to">                       
  <div class="container">
    <h2 class="section__title">Where to next?</h2>
    <p class="section__overview">Pre-order now to bring <strong>crazy fast fiber Internet</strong> to your town.</p>
    <div class="next-town-block">
      <figure>
        <div class="town__vector-bg"></div>
        <figcaption class="town__link"><a href="#">Fuquay-Varina, NC</a></figcaption>
      </figure>
    </div>
    <p>Want to be the next Ting town? Help us <a href="#">bring Ting to your city.</a></p>
  </div>
</section>
<section class="section section__ting-tv">                       
  <div class="container">
    <div class="wrapper">
      <div class="text">
        <h2 class="section__title">Ting TV. Really smart TV.</h2>
        <p class="section__overview">Get all the HD local, cable and specialty channels you want with the Ting pricing and customer experience you deserve.</p>
        <button>Learn more</button>
      </div>
      <div class="illustration"><img src="https://static.ting.com/static/node/dist/20181210/src/assets/images/illustrationInternetTvBanner.svg"/></div>
    </div>
  </div>
</section>
<div class="fiber-cta-link">   
  <p>Need fiber for your business? <a href="#">We do that too.</a></p>
</div>
<footer class="site__footer"> 
  <div class="footer__links">
    <div class="container">
      <div class="wrapper">
        <div class="block">
          <h4>Get started</h4>
          <ul>
            <li> <a href="">Ting TV</a></li>
            <li><a href="">Check availability    </a></li>
            <li><a href="">Fiber for business</a></li>
            <li><a href=""> Ting Makerspace</a></li>
          </ul>
        </div>
        <div class="block">
          <h4>Ting towns</h4>
          <ul>
            <li> <a href="">Centennial, CO</a></li>
            <li><a href="">Charlottesville, VA</a></li>
            <li><a href="">Fuquay-Varina, NC</a></li>
            <li><a href=""> Holly Springs, NC</a></li>
            <li><a href=""> Sandpoint, ID</a></li>
            <li><a href=""> Westminster, MD</a></li>
          </ul>
        </div>
        <div class="block">
          <h4>Learn more</h4>
          <ul>
            <li> <a href="">About us</a></li>
            <li><a href="">Jobs</a></li>
          </ul>
        </div>
        <div class="block">
          <h4>Support</h4>
          <ul>
            <li> <a href="">Speedtest</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href="">Help</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <nav class="footer__navbar">
    <div class="container">
      <ul>
        <li><span class="copy">&#169; Ting 2018</span></li>
        <li><a href="#">Sitemap</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Terms</a></li>
      </ul>
      <ul class="social-icons">
        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
      </ul>
    </div>
  </nav>
</footer>
   

      
      </div>
    );
  }
}

export default App;
