import React from 'react';
import "./form.css";

const Form = () => {
  return (
    <div className='form-container'>
      <form>
        <div className="form-title">
          <h3>Quer aumentar seu tráfego?</h3>
        </div>
        <div className="form-input">
          <input type="text" name="" id="" placeholder='Nome' />
          <input type="url" name="" id="" placeholder='Seu site' />
          <input type="email" name="" id="" placeholder='Email' />
          <input type="tel" name="" id="" placeholder='Telefone' />
          <input type="submit" value="Falar com Especialista" />
        </div>
      </form>
    </div>
  );
}

export default Form;
