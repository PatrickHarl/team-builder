import React from 'react';
import './App.css';
import { useState } from 'react'
import TeamMember from './Components/TeamMember'
import Form from './Components/Form'
import uuid from 'uuid'

function App() {

  const initialTeamMember= {

    id: uuid(),
    name:'Patrick Harl',
    email:'patrick@gmail.com',
    role:'Frontend Engineer'
  
  }

  const initialFormValues={

    name:'',
    email:'',
    role:'Backend Engineer'

  }

const [teamMembers, setTeamMembers] = useState([initialTeamMember])
const [formValues, setFormValues] = useState(initialFormValues)
const [memberToEdit, setMemberToEdit] = useState()

const editMember = (event) => {

  const chosenMemberArr = teamMembers.filter(member => {


    if(member.id === event.target.id)
    {

      return member

    }


  })

  setMemberToEdit(chosenMemberArr[0])

}

const onChangeText = (event) => {

  const name = event.target.name
  const value = event.target.value
  
  setFormValues({

    ...formValues, [name]: value


  })

}

const onSubmit = (event) => {

  event.preventDefault();
  const newMember = {

    id: uuid(),
    name: formValues.name,
    email: formValues.email,
    role: formValues.role

  }

  setTeamMembers([...teamMembers, newMember])

}


  return (
    <div className="App">
      {

        teamMembers.map(member => {


          return (
          <TeamMember editMember={editMember} member={member}/>
          )

        })

      }

      <div>

        <Form setFormValues={setFormValues} memberToEdit={memberToEdit} values={formValues} onChangeText={onChangeText} onSubmit={onSubmit} />

      </div>
    </div>
    
  );
}

export default App;
