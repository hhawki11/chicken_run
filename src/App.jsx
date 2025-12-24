import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import InformationPage from './pages/InformationPage';
import NextRunPage from './pages/info/NextRunPage';
import HistoryPage from './pages/info/HistoryPage';
import RoadsPage from './pages/info/RoadsPage';
import RidersPage from './pages/info/RidersPage';
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
        <Route path="/info/roads" element={<RoadsPage />} />
        <Route path="/info/riders" element={<RidersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
