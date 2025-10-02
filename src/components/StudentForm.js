
import React, { useState, useEffect } from "react";
import "./StudentForm.css";

function StudentForm({ addStudent, editStudent, studentToEdit }) {
  const [student, setStudent] = useState({ name: "", age: "", grade: "" });

  useEffect(() => {
    if (studentToEdit) {
      setStudent(studentToEdit);
    }
  }, [studentToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!student.name || !student.age || !student.grade) return;

    if (studentToEdit) {
      editStudent(student);
    } else {
      addStudent(student);
    }
    setStudent({ name: "", age: "", grade: "" });
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={student.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="number"
        name="age"
        value={student.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        type="text"
        name="grade"
        value={student.grade}
        onChange={handleChange}
        placeholder="Grade"
      />
      <button type="submit">{studentToEdit ? "Update" : "Add"} Student</button>
    </form>
  );
}

export default StudentForm;
