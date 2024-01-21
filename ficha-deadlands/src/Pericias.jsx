function Pericias(props) {
    return(
        <div>
            <label>{props.name}:</label>
            <input type="text" className="pericias" id={props.name}/>
        </div>
    )
}

export default Pericias;