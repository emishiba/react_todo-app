import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectTask } from './taskSlice';
import { TaskItem, TaskEdit } from './index';
import styles from '../../assets/styles/TaskList.module.scss';
import Modal from '@material-ui/core/Modal';

const TaskList: React.FC = () => {
  const tasks = useSelector(selectTask);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const [open, setOpen] = useState<boolean>(false);

  const handleModalToggle = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <>
      <ul className={styles.root}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleModalToggle={handleModalToggle}
          />
        ))}
      </ul>
      <Modal open={open} onClose={handleModalToggle}>
        <TaskEdit />
      </Modal>
    </>
  );
};

export default TaskList;
