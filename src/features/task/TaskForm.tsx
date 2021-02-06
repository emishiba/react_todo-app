import React, { useCallback } from 'react';
import styles from '../../assets/styles/TaskForm.module.scss';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  createTask,
  handleModal,
  selectSelectedTask,
  editTask,
} from './taskSlice';

type Inputs = {
  taskTitle: string;
};

type PropTypes = {
  edit?: boolean;
};

const TaskForm: React.FC<PropTypes> = ({ edit }) => {
  const dispatch = useDispatch();
  const selectedTask = useSelector(selectSelectedTask);

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
      const sendData = { ...selectedTask, title: data.taskTitle };
      dispatch(editTask(sendData));
      dispatch(handleModal(false));
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
          defaultValue={edit ? selectedTask.title : ''}
        />
        {edit && (
          <div className={styles.form__button}>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => dispatch(handleModal(false))}>
              Cancel
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
