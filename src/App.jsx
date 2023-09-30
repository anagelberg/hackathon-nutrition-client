// style
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

// Pages

import DailyDataPage from './pages/DailyDataPage/DailyDataPage';
import RecipeEntryPage from './pages/RecipeEntryPage/RecipeEntryPage';


// Components
import Navigation from './components/Navigation/Navigation';
import { useState } from 'react';


function App() {


  //goals in grams
  const [goals, setGoals] = useState(
    {
      protein: 125,
      fat: 50,
      carbs: 150
    }
  )

  const [consumed, setConsumed] = useState({
    protein: 0,
    fat: 0,
    carbs: 0
  })

  const eatFood = (data) => {
    setConsumed({
      protein: consumed.protein + data.protein,
      fat: consumed.fat + data.fat,
      carbs: consumed.carbs + (data.carbs) / 3
    })
  }

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<DailyDataPage goals={goals} consumed={consumed} />} />
        <Route path="/entry" element={< RecipeEntryPage eatFood={eatFood} />} />
        <Route path="/options" element={<optionsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;