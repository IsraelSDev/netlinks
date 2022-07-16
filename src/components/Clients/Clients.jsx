import React from 'react';
import Client from './Client/Client';
import logo2 from '../../assets/clients/client2.svg';
import logo3 from '../../assets/clients/client3.svg';
import logo4 from "../../assets/clients/client4.svg";

import "./clients.css";

const Clients = () => {
  return (
    <div className='clients-container'>
      <Client />
      <Client second={true} logo={logo2} site={"precato.com.br"} />
      <Client logo={logo3} site={"virtuspay.com.br"} />
      <Client second={true} logo={logo4} site={"scopi.com.br"} />
    </div>
  );
}

export default Clients;
