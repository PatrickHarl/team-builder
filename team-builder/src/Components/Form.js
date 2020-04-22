import React from 'react'
import './Form.css'
import { useEffect } from 'react'


function Form(props) {

    const { setFormValues, memberToEdit, onSubmit, onChangeText, values } = props

    
    //console.log(memberToEdit)
    useEffect(() => {

        if(memberToEdit)
        {
        setFormValues({
        
            name: memberToEdit.name,
            email: memberToEdit.email,
            role: memberToEdit.role

        })
        }

    }, [memberToEdit]) 



    
    

return (

    <div className='member-form'>
        <div className='member-info'>
            <label>Name: </label>
            <input onChange={onChangeText} type='text' name='name' value={values.name} />
        </div>
        <div className='member-info'>
            <label>Email: </label>
            <input onChange={onChangeText} type='text' name='email' value={values.email} />
        </div>
        <div className='member-info'>
            <label>Role: </label>
            <select onChange={onChangeText} name='role' value={values.role}>
                <option value='Frontend Engineer'>Frontend Engineer</option>
                <option value='Backend Engineer'>Backend Engineer</option>
                <option value='Designer'>Designer</option>
            </select>
        </div>
        <div className='member-info-btn'>
            <button onClick={onSubmit}>Add Member</button>            
        </div>
    
    </div>
)


}

export default Form;