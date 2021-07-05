//Action creator
import jsonPlaceHolder from '../apis/jsonPlaceHolder'

export const addTask = task => {
    //Return an action
    return {
        type: 'TASK_ADD',
        payload: task
    }
}

export const deleteTask = id => {
    return {
        type: 'TASK_DELETE',
        payload: id
    }
}

export const fetchList = () => async dispatch => {
       const response = await jsonPlaceHolder.get("/todos")
        dispatch({type:'FETCH_LIST', payload: response.data.splice(1,5) })
    }


