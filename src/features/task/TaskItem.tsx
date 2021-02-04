import React from 'react';
import styles from '../../assets/styles/TaskItem.module.scss';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

type PropTypes = {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };

  handleModalToggle: () => void;
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
        <button onClick={handleModalToggle}>
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
