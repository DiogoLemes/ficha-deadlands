import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

////////////////////
const listaStats = [{id: "personagem1", name: "personagem 1", defesa: 1, agilidade: "1", vigor: "1", inteligencia: "1", força:"1", magia:"1", furtividade:"1", ataque:"1", investigar:"1", intimidar:"1", convencer:"1"},
              {id: "personagem2", name: "personagem 2", defesa: 2, agilidade: "2", vigor: "2", inteligencia: "2", força:"2", magia:"2", furtividade:"2", ataque:"2", investigar:"2", intimidar:"2", convencer:"2"},
              {id: "personagem3", name: "personagem 3", defesa: 3, agilidade: "3", vigor: "3", inteligencia: "3", força:"3", magia:"3", furtividade:"3", ataque:"3", investigar:"3", intimidar:"3", convencer:"3"},
              {id: "personagem4", name: "personagem 4", defesa: 4, agilidade: "4", vigor: "4", inteligencia: "4", força:"4", magia:"4", furtividade:"4", ataque:"4", investigar:"4", intimidar:"4", convencer:"4"},
              {id: "personagem5", name: "personagem 5", defesa: 5, agilidade: "5", vigor: "5", inteligencia: "5", força:"5", magia:"5", furtividade:"5", ataque:"5", investigar:"5", intimidar:"5", convencer:"5"},
              {id: "personagem6", name: "personagem 6", defesa: 6, agilidade: "6", vigor: "6", inteligencia: "6", força:"6", magia:"6", furtividade:"6", ataque:"6", investigar:"6", intimidar:"6", convencer:"6"},
              {id: "personagem7", name: "personagem 7", defesa: 7, agilidade: "7", vigor: "7", inteligencia: "7", força:"7", magia:"7", furtividade:"7", ataque:"7", investigar:"7", intimidar:"7", convencer:"7"},
              {id: "personagem8", name: "personagem 8", defesa: 8, agilidade: "8", vigor: "8", inteligencia: "8", força:"8", magia:"8", furtividade:"8", ataque:"8", investigar:"8", intimidar:"8", convencer:"8"},
              {id: "personagem9", name: "personagem 9", defesa: 9, agilidade: "9", vigor: "9", inteligencia: "9", força:"9", magia:"9", furtividade:"9", ataque:"9", investigar:"9", intimidar:"9", convencer:"9"},
              {id: "personagem10", name: "personagem 10", defesa: 10, agilidade: "10", vigor: "10", inteligencia: "10", força:"10", magia:"10", furtividade:"10", ataque:"10", investigar:"10", intimidar:"10", convencer:"10"},
              {id: "personagem11", name: "personagem 11", defesa: 11, agilidade: "11", vigor: "11", inteligencia: "11", força:"11", magia:"11", furtividade:"11", ataque:"11", investigar:"11", intimidar:"11", convencer:"11"},
              {id: "personagem12", name: "personagem 12", defesa: 12, agilidade: "12", vigor: "12", inteligencia: "12", força:"12", magia:"12", furtividade:"12", ataque:"12", investigar:"12", intimidar:"12", convencer:"12"}
            ]
//////////////////
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App statsData={listaStats}/>
  </React.StrictMode>,
)
