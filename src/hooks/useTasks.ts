import useLocalStorage from 'use-local-storage';
import { TASKS_KEY, TaskState, type Task } from '../models/task';
import { useCallback, useEffect, useState } from 'react';
import { delay } from '../helpers/utils';

export default function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);

  const fetchTasks = useCallback(async () => {
    if (isLoadingTasks) {
      await delay(2000);
      setIsLoadingTasks(false);
    }

    setTasks(tasksData);
  }, [tasksData, isLoadingTasks]);

  useEffect(() => {
    fetchTasks();
  }, [tasksData, fetchTasks]);

  return {
    tasks,
    tasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
    isLoadingTasks,
  };
}
