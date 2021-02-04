import React, { useCallback } from 'react';
import styles from '../../assets/styles/TaskForm.module.scss';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import { TaskList } from './index';
import { useDispatch } from 'react-redux';
import { createTask } from './taskSlice';

type Inputs = {
  taskTitle: string;
};

const TaskForm: React.FC = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const handleCreate = useCallback(
    (data: Inputs) => {
      dispatch(createTask(data.taskTitle));
      reset();
    },
    [dispatch]
  );

  return (
    <form onSubmit={handleSubmit(handleCreate)} className={styles.form}>
      <div className={styles.text__wrap}>
        <TextField
          label="New Task"
          variant="outlined"
          inputRef={register}
          name="taskTitle"
          className={styles.text__field}
        />
      </div>
      <TaskList />
    </form>
  );
};

export default TaskForm;
