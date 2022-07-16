import React from 'react';
import LiderBox from '../LiderBox/LiderBox';
import "./liders.css";

const Liders = () => {
  return (<>
    <div className='liders-container'>
      <div className="first-liders-section">
        <span>Nossos líderes</span>
        <h2><span>Mentoria</span><br /> de peso</h2>
        <p>Além de contar com um time fera de mais de 30 pessoas, a assessoria de SEO da Netlinks nasceu (diferente de outras consultorias e agências) com uma missão clara de <span>transformar o SEO no Brasil.</span><br /><br />
          São <span>6 sócios </span>com background formado em grandes empresas e que se juntaram para criar o produto de SEO ideal pra apoiar pequenas e médias empresas que contam com um time pequeno de marketing mas que sabem a importância de melhorar o tráfego orgânico.</p>
      </div>
      <div className="second-liders-section">
        <LiderBox name={"Rodrigo Lemos"} job={"CEO e Founder"} description={"Um dos fortes nomes de SEO no Brasil, com expertise em estratégias de tráfego orgânico em players como, por exemplo, startup Méliuz, os portais Letras.mus.br, Cifra Club, iDinheiro, entre outros. Atualmente, é CEO da Netlinks cuidando da visão do negócio, professor de SEO e apaixonado por novos negócios."} linkedin={"https://www.linkedin.com/in/rodrigo-lemos-a8a8b8b4/"} />
        <LiderBox />
        <LiderBox />
        <LiderBox name={"Rodrigo Lemos"} job={"CEO e Founder"} description={"Um dos fortes nomes de SEO no Brasil, com expertise em estratégias de tráfego orgânico em players como, por exemplo, startup Méliuz, os portais Letras.mus.br, Cifra Club, iDinheiro, entre outros. Atualmente, é CEO da Netlinks cuidando da visão do negócio, professor de SEO e apaixonado por novos negócios."} linkedin={"https://www.linkedin.com/in/rodrigo-lemos-a8a8b8b4/"} />
        <LiderBox />
        <LiderBox />
      </div>
    </div>
    <div className='wraper-btn-liders'>
      <button className='btn-liders'>Vamos conversar</button>
    </div>
  </>);
}

export default Liders;
