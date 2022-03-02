import { useEffect, useState } from 'react'
import axios from 'axios'
import Form from '../../components/Form'

const Students = () => {

    const [students, setStudents] = useState([])
    const [editForm, setEditForm] = useState(false)
    const [studentToEdit, setStudentToEdit] = useState({})

    useEffect(() => {
        fetchStudents()
    }, [])

    const fetchStudents = async () => {
        try {
            const response = await axios.get('https://springbackend-demo.herokuapp.com/api/v1/allstudents')

            console.log(response)
            setStudents(response.data)

        } catch (err) {
            console.log(err)
        }
    }

    const deleteStudent = async (id) => {
        try {
            const response = await axios.delete(`https://springbackend-demo.herokuapp.com/api/v1/student/${id}`)
            fetchStudents()
        } catch(err) {
            console.log(err)
        }
    }

    const handleEdit = (student) => {
        setEditForm(true)
        setStudentToEdit(student)
    }

    // console.log("this is our state", students)
    return (
        <>
            <Form 
                fetchStudents={fetchStudents} 
                editForm={editForm}
                studentToEdit={studentToEdit}
            />

            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        students.map(student => {
                            return (
                                <tr key={student.id}>
                                    <td data-label="First Name">{student.firstname}</td>
                                    <td data-label="Last Name">{student.lastname}</td>
                                    <td data-label="Edit">
                                        <i 
                                            className="pencil alternate icon"
                                            onClick={() => handleEdit(student)}
                                        ></i>
                                        <i 
                                            className="trash alternate icon" 
                                            onClick={() => deleteStudent(student.id)}
                                        ></i>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </>
    );
}

export default Students;
