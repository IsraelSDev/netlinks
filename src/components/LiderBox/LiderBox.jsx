import React from 'react';
import "./liderbox.css";
import iconLink from '../../assets/social/linkedin.svg';

const LiderBox = (props) => {

  const { name, job, description, linkedin } = props;

  return (
    <div className='box-lider'>
      <div className="pic-box"></div>
      <span>{name ? name : 'Tiago Faria'}</span><br />
      <span>{job ? job : "CSO e Founder"}</span>
      <p>
        {
          description ? description : "Conhecido no mundo das startups como Aspira, tem uma linda jornada em gigantes como Rock Content, Conta Azul, Kenoby e Gupy, atuando em cargos estratégicos e gestão de times de alta performance. Hoje em dia é responsável por inovação, processos e todo o setor de vendas na Netlinks."
        }
      </p>
      <div className="icon-boxer"><div className="icon-box-wraper">
        <a href={linkedin ? linkedin : "https://www.linkedin.com/in/rodrigo-lemos-a8a8b8b4/"} target="_blank"><img src={iconLink} alt="" />
        </a></div>
      </div>
    </div>
  );
}

export default LiderBox;
