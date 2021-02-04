import React, { useCallback, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { TaskForm } from './index';
import styles from '../../assets/styles/TaskEdit.module.scss';

const TaskEdit: React.FC = () => {
  return (
    <div className={styles.edit__wrap}>
      <p className={styles.edit__title}>Edit Task Title</p>
      <TaskForm edit />
    </div>
  );
};

export default TaskEdit;
