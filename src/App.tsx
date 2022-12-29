import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages';
import DashboardLayout from './_layout';
import NotFound from './components/404page';

import './App.css';

const App = (): JSX.Element => {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;
