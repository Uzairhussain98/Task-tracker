import React ,{ useState , useContext} from "react"
import {GlobalContext} from './contexts/GlobalState'

 

const AddTask = () => {


    const [text,settext] = useState('');
    const [day,setday] = useState('');


    const { addTask } = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();

    

    const newTask = {
        id : Math.floor(Math.random() * 100000000),
        text,
        day: +day,
        reminder : true,

      }
        addTask(newTask);
    
    }


  return (
      <>
    <form onSubmit={onSubmit}>
        <div className="form-control">
         <label htmlFor="text">Text</label>
             <input type="text" value={text} onChange={(e) => settext(e.target.value)}  placeholder="Enter text..." />
             </div>
             <div className="form-control">
         <label htmlFor="text">Day</label>
             <input type="text" value={day} onChange={(e) => setday(e.target.value)}  placeholder="Enter day..." />
             </div>
             <button className="btn">Add </button>

      
    </form>
    </>
  )

  }
export default AddTask
