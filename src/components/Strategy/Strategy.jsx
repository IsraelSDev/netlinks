import React from 'react';
import "./strategy.css";
import Spiral from '../Spiral/Spiral';

import frame from '../../assets/spiral/frame1.svg';
import icon from '../../assets/spiral/icon1.svg';

import frame2 from '../../assets/spiral/frame2.svg';
import icon2 from '../../assets/spiral/icon2.svg';

import frame3 from '../../assets/spiral/frame3.svg';
import icon3 from '../../assets/spiral/icon3.svg';

import frame4 from '../../assets/spiral/frame4.svg';
import icon4 from '../../assets/spiral/icon4.svg';

const Strategy = () => {
  return (
    <>
      <div className='strategy-container'>
        <h1 className='strategy-title'>
          <span>Como</span>&nbsp;
          vamos te ajudar
        </h1>
        <Spiral img={frame} icon={icon} title={"Estratégia"} text={"Uma boa estratégia é o principal fator responsável pelo SEO que gera vendas. Através da escolha certa de palavras-chave, análise de concorrência, auditoria técnica e monitoramento dos resultados é que vamos alcançar os resultados e metas. Um dos nossos diferenciais é a estratégia de Cauda Longa, uma técnica focada em priorizar palavras-chave com menor volume de buscas mas altas taxas de conversão, além de serem conquistadas mais rapidamente."} flex={"row"} />
        <Spiral img={frame2} icon={icon2} title={"Conteúdo"} text={"Criamos conteúdos de posts, páginas e produtos que os clientes e os buscadores amam. Contamos com redatores e analistas de conteúdo criativos, com grande conhecimento das boas práticas de redação e geração de vendas. O processo funciona com a pesquisa de referências por nossa equipe ou com alguém da sua equipe nutrindo com direcionamentos especializados. Também garantimos que todos os nossos conteúdos são originais através de ferramentas anti-plágio."} flex={"row-reverse"} />
        <Spiral img={frame3} icon={icon3} title={"Autoridade"} text={"Conhecida como Link Building, nossa solução de aumento de autoridade é crucial para mostrar aos buscadores que sua empresa domina determinados assuntos. Fazemos isso através de uma técnica conhecida como Guest Post, onde enviamos artigos ricos e contextuais para editores de portais, blogs e empresas brasileiras que já possuem uma boa autoridade. Nesses artigos, inserimos um link para seu site de forma natural e bem vista pelo Google."} flex={"row"} />
        <Spiral img={frame4} icon={icon4} title={"Tecnologia"} text={"Além do SEO que gera vendas, somos especialistas na criação e manutenção de sites em WordPress e UX e UI Design. Essa habilidade nos permite ajudar empresas que não contam com um time interno ou fornecedor de confiança nessas áreas. Essas soluções são muito importantes para a correção dos erros técnicos encontrados na auditoria técnica. Caso você já tenha um fornecedor ou equipe interna, trabalhamos super bem em conjunto, sem nenhum problema."} flex={"row-reverse"} last={true} />
        <button className='btn-strategy'>Vamos conversar</button>
      </div>
    </>
  );
}

export default Strategy;
