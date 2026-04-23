import React from 'react'
import './App.css'

function Student(props) {
  return (
    <div className="student-card">
      <div className="student-name">{props.name}</div>
      <div className="student-detail">Course: {props.course}</div>
      <div className="student-detail">Marks: {props.marks}</div>
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <div className="title">Student Information</div>

      <Student name="Rahul Sharma" course="Computer Science"      marks={85} />
      <Student name="Anita Verma"  course="Information Technology" marks={92} />
      <Student name="Rohan Gupta"  course="Electronics"            marks={78} />
    </div>
  )
}

export default App
