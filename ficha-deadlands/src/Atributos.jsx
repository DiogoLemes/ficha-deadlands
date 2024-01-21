function Atributos(props) {
    return(
        <div>
            <label>{props.name}:</label>
            <input type="text" className="atributo" id={props.name}/>
        </div>
    )
}

export default Atributos;