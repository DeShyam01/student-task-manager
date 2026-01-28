import { useContext, useEffect } from 'react'
import { TaskContext } from '../context/TaskContext.jsx'
import TaskCard from '../components/TaskCard'
import '../styles/pages/Tasks.css'

const Tasks = () => {
  const { tasks, fetchTasks } = useContext(TaskContext)

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div className='tasks-container'>
        {tasks.map((task) => (
          <TaskCard key={task._id} heading={task.title} description={task.description} due={task.dueDate} status={task.status} />
        ))}
    </div>
  )
}

export default Tasks
