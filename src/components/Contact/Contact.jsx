import React from 'react';
import bg from '../../assets/contact/contactImage.png';
import Form from '../Form/Form';
import "./contact.css"

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="contact-photo">
        <img src={bg} alt="" />
      </div>
      <div className="contact-form">
        <h3>Vamos <br /><span>conversar?</span></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum porta arcu vel vulputate. Morbi quis egestas dui. Integer nibh mauris, pulvinar eu tempus eget, facilisis et nunc.</p>
        <form>
          <input type="text" name="" id="" placeholder='Nome' />
          <input type="url" name="" id="" placeholder='Seu site' />
          <input type="email" name="" id="" placeholder='Email' />
          <input type="tel" name="" id="" placeholder='Telefone' />
          <input type="submit" value="Falar com Especialista" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
