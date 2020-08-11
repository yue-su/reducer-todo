
export default (state=[], action) => {
    switch (action.type) {
        case 'FETCH_LIST': 
            return action.payload
        case 'TASK_DELETE':
            return state.filter(task => task.id !== action.payload)
        case 'TASK_ADD':
            return [...state, action.payload]
        default:
            return state
    }
}
