import { Routes, Route } from 'react-router-dom';
import Bluecoding from '../pages/Bluecoding';

function Router() {
  return (
    <Routes>
      <Route path="/bluecoding" element={<Bluecoding />} />
    </Routes>
  );
}

export default Router;
