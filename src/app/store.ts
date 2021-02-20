import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import taskReducer from '../features/task/taskSlice';
import { save, load } from 'redux-localstorage-simple';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer,
  },
  preloadedState: load(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(save()),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
