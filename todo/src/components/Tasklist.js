import React, {useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteTask, addTask, fetchList } from '../actions'
import { v4 as uuidv4 } from 'uuid';


const Tasklist = props => {

    const { tasks, fetchList, addTask, deleteTask } = props

    const [task, setTask] = useState({id:'', title:""})

    useEffect(() => {fetchList()}, [])

    const updatehandler = event => {
        const title = event.target.value
        const id = uuidv4()
        setTask({title, id})
    }

    const submitHandler = event => {
        event.preventDefault()
        addTask(task)
        setTask({id:'',title:''})
    }

    return (
        <div className='ui divided list'>
            <h2>Task List</h2>
            {
                tasks.map(task => {
                    return (
                        <div key={task.id}>
                            <h3>{task.title}</h3>
                            <button
                            onClick={()=>deleteTask(task.id)}
                            >Delete</button>
                        </div>
                    )
                })
            }
            <form onSubmit={submitHandler}>
                <label>New Task:
                    <input
                        name='title'
                        value={task.title}
                        onChange={updatehandler}
                    ></input>
                </label>
                <button>submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        tasks: state.tasks,

    }
}

export default connect(mapStateToProps, {fetchList, deleteTask, addTask})(Tasklist)
