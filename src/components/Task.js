import React, {useContext}  from 'react'
import { FaTimes } from 'react-icons/fa'
import {GlobalContext} from './contexts/GlobalState'

const Task = ({task}) => {

    const { deleteTask }   = useContext(GlobalContext);


  return (
    <div className="task" >
      <h3>{task.text} 
      <FaTimes onClick={ ()=> deleteTask(task.id) }

       style={{ color:"red" , cursor:"pointer"}}/></h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
