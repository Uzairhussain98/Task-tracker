export default (state, action) => {
    switch(action.type){
        case 'DELETE_TASK':
        return{
            ...state,
            tasks : state.tasks.filter(task => task.id !== action.payload )}
    case 'ADD_TRANSACTION' :
    return    {
        ...state,
        transactions : [action.payload,...state.transactions]


    }     

    default:
        return state ;
    }

}