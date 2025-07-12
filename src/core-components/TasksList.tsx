import Button from '../components/Button';
import PlusIcon from '../assets/icons/plus.svg?react';
import TaskItem from './TaskItem';
import useTasks from '../hooks/useTasks';

export default function TasksList() {
  const { tasks } = useTasks();

  console.log(tasks);

  return (
    <>
      <section>
        <Button icon={PlusIcon} className="w-full">
          Nova tarefa
        </Button>
      </section>
      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  );
}
