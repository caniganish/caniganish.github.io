import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";


function Contact(props) {
  return (
<li class="town">
<img style={{height:'45%',width: '100%'}} src={props.pic} alt="canigan post"/>
{/* <div style={{backgroundColor:'#000'}}><span>{props.cancontent}</span></div> */}
        <figure>
          <div class="town__vector-bg"></div>
          <figcaption class="town__link"><a href="#">{props.title}</a></figcaption>
        </figure>
      </li>
  );
}

Contact.propTypes = {
  type: PropTypes.string.isRequired
};

export default Contact;
