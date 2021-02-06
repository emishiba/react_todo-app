import React, { useState, useCallback } from 'react';
import { selectTasks, selectTask } from './taskSlice';
import { TaskItem, TaskEdit } from './index';
import styles from '../../assets/styles/TaskList.module.scss';
import Modal from '@material-ui/core/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { handleModal, selectIsModalOpen } from './taskSlice';
import { TaskTypes } from './taskSlice';

const TaskList: React.FC = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);

  const handleModalToggle = useCallback(
    (task: TaskTypes) => {
      dispatch(selectTask(task));
      dispatch(handleModal(!isModalOpen));
    },
    [isModalOpen]
  );

  return (
    <>
      <ul className={styles.root}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleModalToggle={() => handleModalToggle(task)}
          />
        ))}
      </ul>
      <Modal open={isModalOpen} onClose={handleModalToggle}>
        <div>
          <TaskEdit />
        </div>
      </Modal>
    </>
  );
};

export default TaskList;
