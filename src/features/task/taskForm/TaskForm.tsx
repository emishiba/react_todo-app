import React, { useCallback } from 'react';
import styles from '../../../assets/styles/TaskForm.module.scss';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';

type Inputs = {
  taskTitle: string;
};

const TaskForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleCreate = useCallback((data: Inputs) => {
    console.log(data);
    reset();
  }, []);

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit(handleCreate)} className={styles.form}>
        <TextField
          id="outlined-basic"
          label="New Task"
          variant="outlined"
          className={styles.textfield}
          inputRef={register}
          name="taskTitle"
        />
      </form>
    </div>
  );
};

export default TaskForm;
