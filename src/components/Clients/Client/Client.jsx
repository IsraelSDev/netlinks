import React from 'react';
import clientPic1 from "../../../assets/clients/client1.svg"
import "./client.css";

const Client = (props) => {

  const { site, logo, second } = props;

  return (
    <div className='client-container' style={!second ? { 'backgroundColor': '#f9f9f9;' } : { 'backgroundColor': 'rgba(255, 255, 255, 0.9)' }}>
      <div className="client-header">
        <div className="client-logo">
          <img src={logo ? logo : clientPic1} alt="" />
        </div>
        <div className="client-description">
          <h5>{site ? site : 'aluguefoco.com.br'}</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum porta arcu vel vulputate.</p>
        </div>
      </div>
      <div className="client-datas">
        <div className="client-datas-image" style={!second ? { 'backgroundColor': 'rgb(259, 259, 259)' } : { 'backgroundColor': '#f9f9f9' }}></div>
        <div className="client-datas-statistics">
          <h5><span>Início SEO: </span>56.000 visitas mensais (out/2020)</h5>
          <p>Resultado:</p>
          <h4>300.000</h4>
          <h6>visitas mensais (out/2021)</h6>
          <hr />
          <h4>535%</h4>
          <h6>de crescimento</h6>
          <p>
            <span>Destaque: </span>
            Primeiras posiçoes na palavra-chave desafiadora ”seguro viagem”
          </p>
        </div>
      </div>
    </div>
  );
}

export default Client;
