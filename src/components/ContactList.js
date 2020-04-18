import React from "react";
import PropTypes from "prop-types";

// import the Contact component
import Contact from "./Contact";

function ContactList(props) {
  return (
    
    <section class="section section__towns">
  <div class="container" >
    <h2 class="section__title">Get the best in town.</h2>
    <p class="section__overview">Order <strong>.</strong> today! </p>
    <ul class="towns-list" >
  {
  props.contacts.map(c => 
  <Contact 
    key={c.id} 
    type={c.type} 
    pic={c.pic} 
    cancontent={c.cancontent}
    title={c.title} />)
  }
   </ul>  
    
  </div>
</section>
    
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired
};

export default ContactList;
