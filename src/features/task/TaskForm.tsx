import React, { useCallback } from 'react';
import styles from '../../assets/styles/TaskForm.module.scss';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createTask } from './taskSlice';

type Inputs = {
  taskTitle: string;
};

type PropTypes = {
  edit?: boolean;
};

const TaskForm: React.FC<PropTypes> = ({ edit }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const handleCreate = useCallback(
    (data: Inputs) => {
      dispatch(createTask(data.taskTitle));
      reset();
    },
    [dispatch]
  );

  const handleEdit = useCallback(
    (data: Inputs) => {
      console.log(data);
    },
    [dispatch]
  );
  return (
    <form
      className={styles.form}
      onSubmit={edit ? handleSubmit(handleEdit) : handleSubmit(handleCreate)}
    >
      <div className={styles.form__wrap}>
        <TextField
          label={edit ? 'Edit Task' : 'New Task'}
          variant="outlined"
          inputRef={register}
          name="taskTitle"
          className={styles.form__field}
          defaultValue={edit ? 'default' : ''}
        />
        {edit && (
          <div className={styles.form__button}>
            <button type="submit">Submit</button>
            <button type="button">Cancel</button>
          </div>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
