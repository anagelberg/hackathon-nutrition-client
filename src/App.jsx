// style
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

// Pages

import DailyDataPage from './pages/DailyDataPage/DailyDataPage';
import RecipeEntryPage from './pages/RecipeEntryPage/RecipeEntryPage';


// Components
import Navigation from './components/Navigation/Navigation';


function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<DailyDataPage />} />
        <Route path="/entry" element={< RecipeEntryPage />} />
        {/* <Route path="/options" element={<optionsPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;