import './App.css'
import Pericias from './Pericias.jsx'
import Atributos from './Atributos.jsx'
import Poderes from './Poderes.jsx'
import Equipamentos from './Equipamentos.jsx'
import Personagem from './Personagem.jsx'
import React, { useState } from 'react'

function App(props) {
  const listaPoderes = [<Poderes/>,<Poderes/>,<Poderes/>,<Poderes/>,<Poderes/>]
  const listaEquipamentos = [<Equipamentos/>,<Equipamentos/>,<Equipamentos/>,<Equipamentos/>,<Equipamentos/>]

  ///////////////////CRIA COMPONENTE PERSONAGEM E ATUALIZA CAMPOS AO CLICAR NO RESPECTIVO BOTÃO//////////////////// 
  const statsList = props.statsData?.map((stats, index, listaStats) => (
    <Personagem
      id={stats.id}
      name={stats.name}
      indice={index}
      vetor={listaStats}
    />
  ));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////ROLAGEM DE DADOS///////////////////
  const [quantDados, setQuantDados] = useState('0')//os valores são salvos como string
  const [quantLados, setQuantLados] = useState('0')
  const [quantMod, setQuantMod] = useState('0')
  const [resultadoFinal, setResultadoFinal] = useState('')

  function mudaQtdDados(event) {
    setQuantDados(event.target.value)//atualiza o valor pra string
  }
  function mudaQtdLados(event) {
    setQuantLados(event.target.value)
  }
  function mudaQtdMod(event) {
    setQuantMod(event.target.value)
  }

  function calculaResultado(){
    let res = 0
    for (let i = 0; i < parseInt(quantDados); i++){
      res += Math.floor(Math.random() * parseInt(quantLados)) + 1; //passa pra int, gera um valor aleatorio pro dado e soma no total
    }
    let resFinal = res + parseInt(quantMod)//total com modificador para a string de saída
    setResultadoFinal("Resultado: "+ res +" + "+ quantMod + " = " + resFinal)
  }
////////////////////////////////////////////////////////
  let valorNome//é declarado no App.jsx e usado no Personagem.jsx pois é referência a um input no App.jsx
  let valorDef

  return (
    <>
      <div class="header-personagem"> 
          {statsList}
      </div>
      <div className="grid-layout">
        <div className="ficha">
            <fieldset>
                <form id="form">
                    <div>
                        <h3>Nome do Personagem</h3>
                        <input type="text" className="nome" id="nomePersonagem" value={valorNome} defaultValue={''}/>
                        <label for="defesa">Defesa/AC</label>
                        <input type="number" className="defesa" id="defesa" value={valorDef}/>
                    </div>
                    <div>
                        <h3>Perícias</h3>
                        <Pericias name="Agilidade" valor={''}/>
                        <Pericias name="Vigor"/>
                        <Pericias name="Inteligencia"/>
                        <Pericias name="Força"/>
                        <Pericias name="Magia"/>
                    </div>
                    <div>
                        <h3>Atributos</h3>
                        <Atributos name="Furtividade"/>
                        <Atributos name="Ataque"/>
                        <Atributos name="Investigar"/>
                        <Atributos name="Intimidar"/>
                        <Atributos name="Convencer"/>
                    </div>
                    <div>
                        <h3>Poderes/Armas</h3>
                        {listaPoderes}
                    </div>
                    <div>
                        <h3>Equipamentos</h3>
                        {listaEquipamentos}
                    </div>
                </form>
            </fieldset>
        </div>
        <fieldset id='fieldsetDados'>
          <div className="dados">
              <h2>Dados</h2>
              <p>Quantidade de dados</p>
              <input type="text" id="qtdDados" onChange={mudaQtdDados} value={quantDados}/>
              <p>Quantidade de lados</p>
              <input type="text" id="qtdlados" onChange={mudaQtdLados} value={quantLados}/>
              <p>Modificador de rolagem</p>
              <input type="text" id="modificador" onChange={mudaQtdMod} value={quantMod}/>
              <p></p>
              <button id="rolardados" onClick={calculaResultado}>Rolar dados</button>
              <h4>{resultadoFinal}</h4>
          </div>
        </fieldset>
      </div>
    </>  
  )
}

export default App