import React from 'react';
import styles from '../../assets/styles/TaskItem.module.scss';
import Checkbox from '@material-ui/core/Checkbox';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { TaskTypes } from './taskSlice';

type PropTypes = {
  task: TaskTypes;
  handleModalToggle: (task: TaskTypes) => void;
};

const TaskItem: React.FC<PropTypes> = ({ task, handleModalToggle }) => {
  return (
    <li className={styles.taskitem}>
      <div className={styles.taskitem__left}>
        <EventNoteIcon />
        {task.title}
      </div>
      <div className={styles.taskitem__right}>
        <Checkbox
          checked={task.completed}
          onChange={() => console.log(task.id)}
          name="checkedB"
          color="primary"
        />
        <button onClick={() => handleModalToggle(task)}>
          <CreateIcon />
        </button>
        <button>
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
