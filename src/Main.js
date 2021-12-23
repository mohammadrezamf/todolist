import React , {useState} from 'react'

export default function Main() {

    const [taskname , settaskname] = useState('')
    const [taskList , setTaskList] = useState([])

    // function !!
    const addTask = () => {
        setTaskList([...taskList , taskname])
    }
    const deleteTask =(index) => {
        let duparray = [ ...taskList]
        duparray.splice(index , 1)
        setTaskList(duparray)
    }

    const deleteAll = () => {
        setTaskList([])
    }



    const tasklistcontent = taskList.map((task ,index) => {
        return(
            <div className='addTaskBox'>
                <p className='task'>{task}</p>
                <i class="fas fa-trash" onClick={()=>{deleteTask(index)}}></i>
            </div>
        )
    })


    return (
        <div className='container'>
            <div className='row justify-content-center'>
                < div className='col-md-5 shadow-lg p-3 mb-5 bg-white rounded'>
                    <h1>React To Do List</h1>
                    <div className="wrapper">
                        <input type="text " placeholder="enter text"  className="form-control" 
                            defaultValue={taskname} onChange={(e) => {settaskname(e.target.value)}}
                        />

                            <div className="buttonBox">
                                <button className="btn btn-success" onClick={addTask} >ADD</button>
                                <button className='btn btn-primary ' onClick={deleteAll}>Delete All</button>
                            </div>
                        
                        <br/>
                    </div>
                    
                        {tasklistcontent}
                </div>

            </div>
            
        </div>
    )
}
