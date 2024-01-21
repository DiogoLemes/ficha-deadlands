function Personagem(props) {
    
    function mudaValores(i){
        let valorNome = document.getElementById("nomePersonagem")
        let valorDef = document.getElementById("defesa")
        let valorAg = document.getElementById("Agilidade")
        let valorVig = document.getElementById("Vigor")
        let valorInt = document.getElementById("Inteligencia")
        let valorFor = document.getElementById("Força")
        let valorMag = document.getElementById("Magia")
        let valorFur = document.getElementById("Furtividade")
        let valorAtk = document.getElementById("Ataque")
        let valorInv = document.getElementById("Investigar")
        let valorIntim = document.getElementById("Intimidar")
        let valorConv = document.getElementById("Convencer")
        valorNome.value = props.vetor[i].name
        valorDef.value = props.vetor[i].defesa
        valorAg.value = props.vetor[i].agilidade
        valorVig.value = props.vetor[i].vigor
        valorInt.value = props.vetor[i].inteligencia
        valorFor.value = props.vetor[i].força
        valorMag.value = props.vetor[i].magia
        valorFur.value = props.vetor[i].furtividade
        valorAtk.value = props.vetor[i].ataque
        valorInv.value = props.vetor[i].investigar
        valorIntim.value = props.vetor[i].intimidar
        valorConv.value = props.vetor[i].convencer
    }

    return(
        <>
            <div class="personagem">
                <button class="personagens" id={props.id} onClick={() => {mudaValores(props.indice)}}> 
                    {props.name}
                </button></div>
        </>
    )
}

export default Personagem;