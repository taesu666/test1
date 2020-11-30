import React from 'react';

class AttendanceBook extends React.Component{
  
  constructor(props){
    super(props);

    this.state = {
      students:[
        {id: 1, name:'태수'},
        {id: 2,name:'태호'},
        {id: 3,name:'다용'},
        {id: 4,name:'성진'},
        {id: 5,name:'태은'},
      ]
    }
  }

  render(){
    var {students} =this.state;
    // const studentList = students.map((student) =>
    // <li key = {student.id}>{student.name}</li>
    // );

    return(
      <ul>
        {students.map((student)=>
          <li key = {student.id}>{student.name}</li>
        )}
      </ul>
    )
  }
}

export default AttendanceBook;