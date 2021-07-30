import React, {useContext}  from 'react'
import {GlobalContext} from './contexts/GlobalState'
import { FaTimes } from 'react-icons/fa'



const Tasks = ( ) => {

  const { tasks , deleteTask}   = useContext(GlobalContext);

    


  return (
    <div className="task">
         {
          tasks.map(task => ( 
          <div>
          <h3> {task.text}
          <FaTimes  onClick={ ()=> deleteTask(task.id)  } style={{color:"red"}} />

           </h3> 
           <p>{task.day}</p>
            </div>     
             ))}
      
    </div>
  )
}

export default Tasks



