import Header from "./components/Header";
import Tasks from "./components/Tasks";
import './index.css';
import React ,{useState} from 'react'




function App() {

  const [tasks , setTasks] = useState([
    {
        id:1,
        text: "Go to dentist",
        day : "5th feb 2021",
        reminder : true,
    },

    {
        id:2,
        text: "Buy Books",
        day : "8th feb 2021",
        reminder : true,
    },

    {
        id:3,
        text: "Go to school",
        day : "9th feb 2021",
        reminder : true,
    }



])

  return (
    <div className="container">
      <Header title="Hello"/>
      <Tasks tasks={tasks}/>
      
    
    </div>
  );
}






export default App;
