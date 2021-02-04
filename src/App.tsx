import React from 'react';
import styles from './assets/styles/App.module.scss';
import { Header } from './components/header/index';
import { TaskForm, TaskList } from './features/task/index';

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
