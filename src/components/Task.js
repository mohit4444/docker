import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete}) => {
  return (
    <div className='task reminder'>
      <h3>
        {task.item}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => { if (window.confirm('Are you sure you want to delete this item?')) onDelete(task._id) } }
        />
      </h3>
      <p>{task.amount}</p>
    </div>
  )
}

export default Task
