import Button from '../components/Button';
import PlusIcon from '../assets/icons/plus.svg?react';
import TaskItem from './TaskItem';
import useTasks from '../hooks/useTasks';
import useTask from '../hooks/useTask';
import { TaskState, type Task } from '../models/task';

export default function TasksList() {
  const { tasks, isLoadingTasks } = useTasks();
  const { prepareTask } = useTask();

  function handleNewTask() {
    prepareTask();
  }

  return (
    <>
      <section>
        <Button
          icon={PlusIcon}
          className="w-full"
          onClick={handleNewTask}
          disabled={
            tasks.some((task) => task.state === TaskState.Creating) ||
            isLoadingTasks
          }
        >
          Nova tarefa
        </Button>
      </section>
      <section className="space-y-2">
        {!isLoadingTasks &&
          tasks.map((task) => <TaskItem key={task.id} task={task} />)}
        {isLoadingTasks && (
          <>
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
          </>
        )}
      </section>
    </>
  );
}
