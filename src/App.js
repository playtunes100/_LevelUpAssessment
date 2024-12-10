import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import CreateGraduate from './pages/CreateGraduate';
import UpdateGraduate from './pages/UpdateGraduate';
import ViewAllGraduates from './pages/ViewAllGraduates';
import ViewGraduate from './pages/ViewGraduate';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/_LevelUpAssessment' element={<Welcome />} />
        <Route path='_LevelUpAssessment/create' element={<CreateGraduate />} />
        <Route path='update/:id' element={<UpdateGraduate />} />
        <Route path='_LevelUpAssessment/viewall' element={<ViewAllGraduates />} />
        <Route path='customer/:id' element={<ViewGraduate />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
