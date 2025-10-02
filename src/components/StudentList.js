
import React from "react";
import "./StudentList.css";

function StudentList({ students, deleteStudent, setStudentToEdit }) {
  return (
    <div className="student-list">
      {students.length === 0 ? (
        <p>No students available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
                <td>
                  <button onClick={() => setStudentToEdit(student)}>Edit</button>
                  <button onClick={() => deleteStudent(student)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentList;
