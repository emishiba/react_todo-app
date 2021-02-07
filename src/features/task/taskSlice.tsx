import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

export type TaskTypes = {
  id: number;
  title: string;
  completed: boolean;
};

type TaskState = {
  countId: number;
  tasks: TaskTypes[];
  selectedTask: TaskTypes;
  isModalOpen: boolean;
};

const initialState: TaskState = {
  countId: 1,
  tasks: [{ id: 1, title: 'taskA', completed: false }],
  selectedTask: { id: 0, title: '', completed: false },
  isModalOpen: false,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    createTask: (state: TaskState, action: PayloadAction<string>) => {
      state.countId++;

      const newTask = {
        id: state.countId,
        title: action.payload,
        completed: false,
      };

      state.tasks = [newTask, ...state.tasks];
    },
    selectTask: (state: TaskState, action: PayloadAction<TaskTypes>) => {
      state.selectedTask = action.payload;
    },

    completeTask: (state: TaskState, action: PayloadAction<TaskTypes>) => {
      state.tasks.filter(
        (task) =>
          task.id === action.payload.id && (task.completed = !task.completed)
      );
    },

    editTask: (state: TaskState, action: PayloadAction<TaskTypes>) => {
      state.tasks.filter(
        (task) =>
          task.id === action.payload.id && (task.title = action.payload.title)
      );
    },

    deleteTask: (state: TaskState, action: PayloadAction<TaskTypes>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },

    handleModal: (state: TaskState, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const {
  createTask,
  selectTask,
  completeTask,
  editTask,
  deleteTask,
  handleModal,
} = taskSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTasks = (state: RootState) => state.task.tasks;

export const selectIsModalOpen = (state: RootState) => state.task.isModalOpen;

export const selectSelectedTask = (state: RootState) => state.task.selectedTask;

export default taskSlice.reducer;
