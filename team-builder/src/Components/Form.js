import React from 'react'
import './Form.css'


function Form(props) {

    const { onSubmit, onChangeText, values } = props


return (

    <div class='member-form'>
        <div class='member-info'>
            <label>Name: </label>
            <input onChange={onChangeText} type='text' name='name' value={values.name} />
        </div>
        <div class='member-info'>
            <label>Email: </label>
            <input onChange={onChangeText} type='text' name='email' value={values.email} />
        </div>
        <div class='member-info'>
            <label>Role: </label>
            <select onChange={onChangeText} name='role' value={values.role}>
                <option value='Frontend Engineer'>Frontend Engineer</option>
                <option value='Backend Engineer'>Backend Engineer</option>
                <option value='Designer'>Designer</option>
            </select>
        </div>
        <div class='member-info-btn'>
            <button onClick={onSubmit}>Add Member</button>            
        </div>
    
    </div>
)


}

export default Form;