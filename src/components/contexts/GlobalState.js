import React ,{ createContext , useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    tasks : [ {
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
    },



]}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ( {children} ) => {
    const [state, dispatch ] = useReducer(AppReducer,initialState);


    function deleteTask(id){
        dispatch({
            type: 'DELETE_TASK',
            payload : id

        }) }


        function addTask(task){
            dispatch({
                type: 'ADD_TASK',
                payload : task
    
            }) }
    


    return ( <GlobalContext.Provider value={ {tasks : state.tasks,
        deleteTask,
        addTask,
          }}>
        {children}
    </GlobalContext.Provider>


    )
    }