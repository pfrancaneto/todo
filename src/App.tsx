import { BrowserRouter, Route, Routes } from 'react-router';
import Components from './pages/Components';
import LayoutMain from './pages/LayoutMain';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path="/componentes" element={<Components />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
