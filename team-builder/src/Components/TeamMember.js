import React from 'react'
import './TeamMember.css'


function TeamMember (props) {

    const { member } = props

return (

<div class='member'>
    <div>
        <p><span class='bold'>Name:</span> {member.name}</p>
        <p><span class='bold'>Email:</span> {member.email}</p>
        <p><span class='bold'>Role:</span> {member.role}</p>
        <button class='btn'>Edit</button>
    </div>   
</div>



)



}

export default TeamMember;