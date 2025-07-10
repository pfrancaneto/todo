import Container from '../components/Container';
import TasksList from '../core-components/TasksList';
import TasksSummary from '../core-components/TasksSummary';

export default function Home() {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between">
        <TasksSummary />
      </header>

      <TasksList />
    </Container>
  );
}
