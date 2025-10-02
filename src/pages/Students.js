import React, { useState, useEffect } from "react";
import "./Students.css";

function Students() {
  const [students, setStudents] = useState(() => {
    // 🔹 Karanta students daga localStorage
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  });

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");
  const [searchId, setSearchId] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // 🔹 Duk lokacin da students ya canza, ajiye shi
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id || !name || !age || !grade) return;

    if (editingIndex !== null) {
      const updated = [...students];
      updated[editingIndex] = { id, name, age, grade };
      setStudents(updated);
      setEditingIndex(null);
    } else {
      setStudents([...students, { id, name, age, grade }]);
    }

    setId("");
    setName("");
    setAge("");
    setGrade("");
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setId(students[index].id);
    setName(students[index].name);
    setAge(students[index].age);
    setGrade(students[index].grade);
  };

  const handleDelete = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
  };

  const filteredStudents = searchId
    ? students.filter((s) => s.id.includes(searchId))
    : students;

  return (
    <div className="students-page">
      <h2>Students Management</h2>

      {/* 🔍 Search by ID */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
      </div>

      {/* 📝 Add/Edit Form */}
      <form className="student-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID Number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
        <button type="submit">
          {editingIndex !== null ? "Update" : "Add"} Student
        </button>
      </form>

      {/* 📋 Students Table */}
      <table className="students-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((s, index) => (
              <tr key={index}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.age}</td>
                <td>{s.grade}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No Students Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
