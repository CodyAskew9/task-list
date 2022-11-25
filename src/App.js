import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faL, faPen, faTrashCan
 } from "@fortawesome/free-solid-svg-icons"
import './App.css';

function App() {
 
const [toDo, setToDO] = useState([
  {"id":1, "title": "task 1", "status": false},
  {"id":2, "title": "task 2", "status": false}
])

const [newTask, setNewTask] = useState('')
const [update, setUpdate] = useState('')
const [score , setScore] =useState(0)
const [highScore, setHighScore] = useState(100)

// add task
const addTask = () => {
  if(newTask) {
    let num = toDo.length +1;
    let newEntry = {id:num, title: newTask, status:false}
    setToDO([...toDo, newEntry])
    setNewTask('')
   
  }
}

// delete tasks
const deleteTask = (id) => {
let newTask = toDo.filter( task => task.id !== id)
setToDO(newTask)
setScore(score -100)
}

// update tasks
const updateTasks = (e) => {
  let newEntry = {
    id:update.id,
    title: e.target.value,
    status: update.status ? true : false
  }
  setUpdate(newEntry)
}

// cancel update
const cancelUpdateTasks = () => {
  setUpdate('')
}

// complete tasks and update score
const completeTask = (id) =>{
const newTask = toDo.map( task => {
  if(task.id === id){
    return ({...task, status: ! task.status})
  } return task;
})
setToDO(newTask)
setScore(score +100)
if(score >= highScore){
   setHighScore( score +100)
} else {setScore(score +100)}


}

// Change task for update
const changeTasks = () =>{
  let filteredTasks = [...toDo].filter(task => task.id !== update.id)
  let updatedObjet= [...filteredTasks, update]
  setToDO(updatedObjet)
  setUpdate('')
}


  return (
    <div className="container App">
      <div className='scoreBoard'>
        <h3>Score {score}</h3>
        <h3>High Score {highScore}</h3>
        </div>
      <br />
      <br />
      <h1>Tasks</h1>
      <br />
      <br />

      <div className='row'>
        <div className='col'>
          <input value={update && update.title} onChange={ (e) => updateTasks(e)} className='form-control form-control-ig' />
        </div>
        <div className='col-auto'>
          <button onClick={changeTasks} className='btn btn-lg btn-success mr-20'>Update</button>
          <button className='btn btn-lg btn-warning '>Cancel</button>

        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <input value={newTask} onChange={(e) => setNewTask(e.target.value)} className='form-control form-control-lg'/>
        </div>
        <div className='col-auto'>
        <button onClick={addTask} className='btn btn-lg btn-success'>add task</button>
        </div>
      </div>
      
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
                <span title='Complete' onClick={(e) => completeTask(task.id)}><FontAwesomeIcon icon={faCircleCheck}/></span>
                {task.status ? null : (
                  <span title='Update' onClick={ () => setUpdate({ id: task.id, title:task.title, status: task.status ? true : false})}><FontAwesomeIcon icon={faPen}/></span>
                )}
                <span title='Delete' onClick={ () => deleteTask(task.id)}><FontAwesomeIcon icon={faTrashCan} /></span>
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
