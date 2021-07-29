import Header from "./components/Header";
import Tasks from "./components/Tasks";
import './index.css';
import React ,{ useContext} from 'react'
import {GlobalProvider , GlobalContext } from './components/contexts/GlobalState';





function App() {


  const { tasks } = useContext(GlobalContext);


  return (
    <GlobalProvider>
    <div className="container">
      <Header title="Hello"/>
      <Tasks tasks={tasks}/>

      
    
    </div>
    </GlobalProvider>
  );
}






export default App;
