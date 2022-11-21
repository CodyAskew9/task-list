import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faPen, faTrashCan
 } from "@fortawesome/free-solid-svg-icons"
import './App.css';

function App() {
 
const [toDo, setToDO] = useState([
  {"id":1, "title": "task 1", "status": false},
  {"id":1, "title": "task 2", "status": false}
])

const [newTask, setNewTask] = useState('')
const [update, setUpdate] = useState('')
const [score , setScore] =useState(0)

// delete tasks
const deleteTask = (id) => {}

// update tasks
const updateTasks = () => {}

// cancel update
const cancelUpdateTasks = () => {}

// complete tasks and update score
const completeTasks = (id) =>{}

// Change task for update
const changeTasks = (e) =>{}


  return (
    <div className="container App">
      <br />
      <br />
      <h1>Tasks</h1>
      <br />
      <br />
      
      {toDo && toDo.length ? '' : 'Jobs Done!'}

      {toDo && toDo.map((task, index) => {
        return(
          <React.Fragment key={task.id}>
            <div className='col taskBg'>
              <div className={task.status ? 'done' : ''}>

          <span className='taskNumber'>{index +1}</span>
          <span className='taskText'>{task.title}</span>
              </div>
              <div className='iconWrap'>
                <span><FontAwesomeIcon icon={faCircleCheck}/></span>
                <span><FontAwesomeIcon icon={faPen}/></span>
                <span><FontAwesomeIcon icon={faTrashCan}/></span>
              </div>
            </div>

          </React.Fragment>
        )
      })
      }

      <div className='container'>
        
      </div>

    </div>
  );
}

export default App;
