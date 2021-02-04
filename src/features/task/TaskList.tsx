import React from 'react';
import { useSelector } from 'react-redux';
import { selectTask } from './taskSlice';
import { TaskItem } from './index';
import styles from '../../assets/styles/TaskList.module.scss';

const TaskList: React.FC = () => {
  const tasks = useSelector(selectTask);

  return (
    <ul className={styles.root}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
