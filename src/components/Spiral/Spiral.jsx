import React from 'react';
import frame from '../../assets/spiral/frame1.svg';
import icon from '../../assets/spiral/icon1.svg';
import "./spiral.css";

const Spiral = (props) => {
  return (
    <div className='spiral-container'>


      <div className="spiral-content">


        <div className="spiral-content-pic">
          <img src={props.img ? props.img : frame} alt="" />
        </div>


        <div className="icon-wraper">
          <div className="icon-container">
            <img src={props.icon ? props.icon : icon} alt="" />
          </div>
          <div className="icon-line"></div>
        </div>


        <div className="spiral-content-text">
          <h1>
            {props.title ? props.title : 'Estratégia'}
          </h1>
          <p>{props.text ? props.text : "Uma boa estratégia é o principal fator responsável pelo SEO que gera vendas. Através da escolha certa de palavras-chave, análise de concorrência, auditoria técnica e monitoramento dos resultados é que vamos alcançar os resultados e metas. Um dos nossos diferenciais é a estratégia de Cauda Longa, uma técnica focada em priorizar palavras-chave com menor volume de buscas mas altas taxas de conversão, além de serem conquistadas mais rapidamente."}</p>
        </div>
      </div>
    </div>
  );
}

export default Spiral;
