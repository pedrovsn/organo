import "./Dropdown.css"

const Dropdown = (props) => {
    const onChange = (event) => {
        props.onChanged(event.target.value)
    }

    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select onChange={onChange} required={props.required}>
                <option value=""></option>
                {
                    props.itens.map(item => {
                        return <option key={item}>{item}</option>
                    })                    
                }
            </select>
        </div>
    )
}

export default Dropdown