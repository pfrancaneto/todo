import { NavLink, Outlet } from 'react-router';
import Container from '../components/Container';
import Text from '../components/Text';

export default function LayoutMain() {
  return (
    <>
      <Container className="mt-8 md:mt-20" as="header">
        Olámundo = Header
      </Container>
      <main className="mt-4 md:mt-8">
        <Outlet />
      </main>
      <footer className="my-5 md:my-10">
        <nav className="flex items-center justify-center gap-2">
          <NavLink to="/">
            <Text variant="body-sm-bold" className="text-gray-300">
              Tarefas
            </Text>
          </NavLink>
          <NavLink to="/componentes">
            <Text variant="body-sm-bold" className="text-gray-300">
              Componentes
            </Text>
          </NavLink>
        </nav>
      </footer>
    </>
  );
}
