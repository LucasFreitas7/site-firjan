import logo from './imagens/firjan.png';
import botao from './imagens/botao.png'
import digital from './imagens/digital.png'
import receba from './imagens/receba.png'
import analise from './imagens/analise.png'
import juros from './imagens/jurosbaixos.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /><br></br>
          <text className= "App-text1">Aquele jeitinho que você estava precisando.</text>
        <p>
         <text className= "App-text8">Empréstimo fácil, rápido e seguro.</text>
        </p>
        <br></br>
        <button
          type="button"
          className = "App-button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href='https://register.caas.digital/ac7pay/proposal/company';
          }}
          > <img src={botao} className="App-botao" alt="botao" /></button>
          <br>
          </br>
          <br>
          </br>
      </header>
        <div className = "App-img1">
          <img src={digital} className="App-digital" alt="digital"/>
          <img src={analise} className="App-analise" alt="analise"/>
          <img src={receba} className="App-receba" alt="receba"/>
          <img src={juros} className="App-juros" alt="juros"/>
      {/* <div className = "App-img2">
      <img src={receba} className="App-receba" alt="receba"/>
      <img src={juros} className="App-juros" alt="juros"/>
      </div> */}
     <div className= "App-teste2">
        <text className= "App-text3">EMPRÉSTIMO PESSOA JURÍDICA</text>>
          <br>
          </br>
          <p className= "App-text4"><text className = "App-text12">Crédito à jato</text> para as pequenas e médias empresas  retomarem a dinâmica de seus negócios, disponibilizando capital de giro de forma rápida, desburocratizada e simples.</p>     
          <text className= "App-text3">EMPRÉSTIMO PESSOAL</text>
          <br>
          </br>
          <p className= "App-text4"><text className = "App-text12">Ajuda rápida nas decisões de reorganizar a sua vida pessoal:</text> Reformar a casa, reorganizar as finanças, abrir seu negócio, fazer a viagem dos sonhos, com o nosso empréstimo pessoal sorria para o mundo e ele sorri de volta pra você.</p>
       <br>
       </br>
       </div>
      </div>
     <div className = "App-info-final">
       <p className = "App-text5">
       AC7 PAY S/A, sociedade com sede na Rua Paraíba, nº 330 - Sala 1002 - Bairro Funcionários - Belo Horizonte/MG, inscrita no CNPJ nº 40.076.659/0001-46. A AC7 PAY não é uma instituição financeira: somos uma correspondente bancária da Sul Brasil Securitizadora S/A uma consultora especializada em Fundos de Investimento em Direitos Creditórios (FDIC) inscrito no CNPJ sob nº 09.602.719/0001-77, atuando por meio da plataforma de empréstimos operacionalizada pela LiveOn Meios de Pagamentos S/A inscrito no CNPJ nº 29.593.763/0001-75 nos termos da Resolução no 3.954, de 24 de fevereiro de 2011.
       </p>
     </div>
     <div className = "App-info-final">
      <p className = "App-text6">Fique ligado: AC7 PAY não cobra nenhum valor antecipado para aprovar ou depositar seu empréstimo. Caso alguém, se passando pela AC7 PAY, ou seus associados solicite qualquer depósito antecipado, encerre o contato e fale com a gente. Você pode estar sendo vítima de uma tentativa de fraude.</p>
     </div>
     <div className = "App-info-final">
       <p  className = "App-text5"><text className = "App-text6">Para empréstimo pessoal online sem garantia: </text> a CET varia de 1,99% ao mês (23,88% ao ano) a 12,4% ao mês (306,63% ao ano). O período de quitação é de 6 a 12 meses, podendo ser antecipado a qualquer momento. Exemplo: um empréstimo de R$ 1.000,00 em 12 meses terá parcelas de R$ 142,96, (somando IOF) um valor total de R$ 1.715,52, CET de 7,99% a.m (95,88% a.a.). As taxas apresentadas são meramente ilustrativas, <a className = "App-text11" href = "https://register.caas.digital/ac7pay/proposal/company">faça uma simulação aqui.</a> Crédito sujeito a análise. </p>
     </div>
     <div className = "App-info-final">
       <p  className = "App-text5"><text className = "App-text6">Empréstimo online pessoa jurídica: </text> a CET varia de 1,49% ao mês (17,8% ao ano) a 5,99% ao mês (71,8% ao ano). O período de quitação é de 3 a 12 meses, podendo ser antecipado a qualquer momento. Exemplo: um empréstimo de R$ 20.000,00 em 12 meses terá parcelas de R$ 1.921,31, (somando IOF) um valor total de R$ 23.055,72, CET de 1,99 a.m (23,8% a.a.). As taxas apresentadas são meramente ilustrativas, <a className = "App-text11"  href = "https://register.caas.digital/ac7pay/proposal/company">faça uma simulação aqui.</a> Crédito sujeito a análise.</p>
     </div>
     <div className = "App-info-termos">
     <p className = "App-text7"><a className = "App-text10" href = "https://ac7pay.caas.digital/terms-of-use.html">TERMOS DE USO</a> | <a className = "App-text10" href = "https://ac7pay.caas.digital/privacy-terms.html">TERMOS DE PRIVACIDADE</a> | <a  className = "App-text10" href="mailto:central@ac7.pay.com.br">CENTRAL DE ATENDIMENTO</a></p>
     </div>
     <div className = "App-info-final"></div>
     <text>   COPYRIGHT © 2021 AC7 PAY        </text>
     <br>
     </br>
     <text>  TODOS OS DIREITOS RESERVADOS.       </text>
     </div>
  
    
    
  );
}

export default App;
