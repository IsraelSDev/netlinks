import React from 'react';
import "./about.css";
import mapIcon from '../../assets/map-icon.svg';

const About = () => {
  return (
    <>
      <div className="about-overlay">
        <div className="about-blend-container">
          <div className='about-container'>
            <p className='why-us'>Quem somos</p>
            <h2><span>Sobre</span> a <br />Netlinks</h2>
            <div className="statistic-wraper">
              <div className="statistic-resume">
                <p>Somos uma agência especializada em SEO, apaixonada em ajudar empresas a venderem mais no Google, através de metodologia comprovada, pessoas criativas e foco em resultados</p>
              </div>
              <div className="statistic-boxes">
                <div className="box-statistic">
                  <h6>80</h6>
                  <p>casos de sucesso.</p>
                </div>
                <div className="box-statistic box-destaq">
                  <h6>30</h6>
                  <p>colaboradores dedicados</p>
                  <span>Sem freelancers</span>
                </div>
                <div className="box-statistic">
                  <h6>5</h6>
                  <p>anos de CNPJ</p>
                </div>
                <div className="box-statistic">
                  <h6>0</h6>
                  <p>reclamações</p>
                </div>
              </div>
            </div>
          </div>
          <p className='unity'>Unidades</p>
          <div className="about-unidades-container">
            <div className="box-unidade">
              <div className="icon-box"><img src={mapIcon} alt="" /></div>
              <div className="desc-box">
                <span>Belo Horizonte</span>
                <p>Endereço: R. Juiz Achilles Velloso, 160
                  Bairro Estoril, BH - CEP 30494-180
                  Telefone: (31) 4042-5566</p>
              </div>
            </div>
            <div className="box-unidade">
              <div className="icon-box"><img src={mapIcon} alt="" /></div>
              <div className="desc-box">
                <span>São Paulo</span>
                <p>Endereço: Rua Flórida, 1738 Cj 121
                  Bairro Brooklin, SP - CEP 04565-001
                  Telefone: (11) 2500-2228</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>);

}

export default About;
