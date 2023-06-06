import { useState } from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown';
import TextField from '../TextField';
import "./Form.css"

const Form = (props) => {

    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    const [image, setImage] = useState("")
    const [team, setTeam] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        props.onSubmit(
            {
                name,
                role,
                image,
                team
            }
        )
        setName("")
        setRole("")
        setImage("")
        setTeam("")
    }

    return (
        <section className="form">
            <form onSubmit={onSubmit}>
                <h2>Fill this form to create an employee card</h2>
                <TextField 
                    label="Name" 
                    placeholder="Write your name"
                    value={name}
                    onChanged={value => setName(value)}
                    ></TextField>
                <TextField 
                    label="Role" 
                    placeholder="Write your role"
                    value={role}
                    onChanged={value => setRole(value)}
                    ></TextField>  
                <TextField 
                    label="Image" 
                    placeholder="Upload your image"
                    value={image}
                    onChanged={value => setImage(value)}></TextField>  
                <Dropdown 
                    label="Team" 
                    itens={props.teams.map(t => { return t.name })}
                    value={team}
                    onChanged={value => setTeam(value)}></Dropdown>
                <Button>Create Card</Button>
            </form>
        </section>
    )
}

export default Form