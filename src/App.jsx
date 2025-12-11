import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import InformationPage from './pages/InformationPage';
import NextRunPage from './pages/info/NextRunPage';
import HistoryPage from './pages/info/HistoryPage';
import EarlyRunsPage from './pages/info/EarlyRunsPage';
import RoadsPage from './pages/info/RoadsPage';
import RidersPage from './pages/info/RidersPage';
import AfterPage from './pages/info/AfterPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery/0" element={<InformationPage />} />
        <Route path="/gallery/:id" element={<GalleryPage />} />
        <Route path="/info/next-run" element={<NextRunPage />} />
        <Route path="/info/history" element={<HistoryPage />} />
        <Route path="/info/early-runs" element={<EarlyRunsPage />} />
        <Route path="/info/roads" element={<RoadsPage />} />
        <Route path="/info/riders" element={<RidersPage />} />
        <Route path="/info/after" element={<AfterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
