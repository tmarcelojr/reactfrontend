import { useState } from 'react';
import axios from 'axios'
import './styles.css'

const Form = ({ fetchStudents, editForm, studentToEdit }) => {

    console.log('studentToEdit', studentToEdit)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    // console.log(firstName, lastName)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newStudent = {
            firstname: firstName,
            lastname: lastName
        }
        try {
            if(editForm) {
                // EDIT - UPDATING
                const response = await axios.put(`https://springbackend-demo.herokuapp.com/api/v1/student/${studentToEdit.id}`, newStudent)
            } else {
                // ADDING STUDENT
                const response = await axios.post('https://springbackend-demo.herokuapp.com/api/v1/addstudent', newStudent)

                if(response.status === 200) {
                    setFirstName('')
                    setLastName('')
                }    
            }
            
      
            fetchStudents()
        } catch(err) {
            console.log(err)
        }
    }


    return (
        <div className="ui centered grid">
            <form className="ui form" id="form-container" onSubmit={handleSubmit}>
                <div className="field">
                    <label className='ui left aligned container'>First Name</label>
                    <input
                        type="text"
                        name="first-name"
                        placeholder={studentToEdit.firstname}
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label className='ui left aligned container'>Last Name</label>
                    <input
                        type="text"
                        name="last-name"
                        placeholder={studentToEdit.lastname}
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>
                <div className="ui right aligned container">

                    <button className="ui button" type="submit">
                        {editForm ? "Edit" : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
