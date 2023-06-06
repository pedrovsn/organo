import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Team from './components/Team';
import employee from './components/Employee';

function App() {

	const teams = [
		{
			name: "Backend",
			primaryColor: "#57CE78",
			secondaryColor: "#D9F7E9"
		},
		{
			name: "Frontend",
			primaryColor: "#82CFFA",
			secondaryColor: "#E8F8FF"
		},
		{
			name: "Data Science",
			primaryColor: "#DB6EBF",
			secondaryColor: "#FAE9FS"
		},
		{
			name: "Devops",
			primaryColor: "#FFBA29",
			secondaryColor: "#FFEEDF"
		}
	]

	const [employees, setEmployees] = useState([])
	const addEmployee = (employee) => {
		console.log("On submit...", employee)
		setEmployees([...employees, employee])
	}

	return (
		<div className="App">
			<Header></Header>
			<Form onSubmit={addEmployee} teams={teams}></Form>
			{teams.map(team => <Team 
				key={team.name} 
				name={team.name} 
				primaryColor={team.primaryColor} 
				secondaryColor={team.secondaryColor}
				employees={employees.filter(employee => employee.team === team.name)}></Team>)}
		</div>
	);
}

export default App;
