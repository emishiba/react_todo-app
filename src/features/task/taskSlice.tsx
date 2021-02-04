import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

type TaskState = {
  countId: number;
  tasks: {
    id: number;
    title: string;
    completed: boolean;
  }[];
  selectedTask: {
    id: number;
    title: string;
    completed: boolean;
  };
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
  },
});

export const { createTask } = taskSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTask = (state: RootState): TaskState['tasks'] =>
  state.task.tasks;

export default taskSlice.reducer;
