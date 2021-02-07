import React from 'react';
import styles from '../../assets/styles/TaskItem.module.scss';
import Checkbox from '@material-ui/core/Checkbox';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { TaskTypes, completeTask, deleteTask } from './taskSlice';
import { useDispatch, useSelector } from 'react-redux';

// const selector = useSelector((state) => state);

type PropTypes = {
  task: TaskTypes;
  handleModalToggle: (task: TaskTypes) => void;
};

const TaskItem: React.FC<PropTypes> = ({ task, handleModalToggle }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.taskitem}>
      <div className={styles.taskitem__left}>
        <EventNoteIcon />
        {task.title}
      </div>
      <div className={styles.taskitem__right}>
        <Checkbox
          checked={task.completed}
          onChange={() => dispatch(completeTask(task))}
          color="primary"
        />
        <button onClick={() => handleModalToggle(task)}>
          <CreateIcon />
        </button>
        <button onClick={() => dispatch(deleteTask(task))}>
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
