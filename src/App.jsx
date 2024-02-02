import HomePage from './pages/homepage';
import Header from './components/Header';
import './App.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPoems } from './features/poems/poemsSlice';
import { Routes, Route } from 'react-router-dom';
import PoemsDirectoryPage from './pages/PoemsDirectory';
import AboutPage from './pages/AboutPage';
import PoemDetailPage from './pages/PoemDetailPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPoems());
  }, [dispatch]);

  return (
    <div className='App'>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/poems' element={<PoemsDirectoryPage />} />
          <Route path='/poems/:poemId' element={<PoemDetailPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
    </div>
  )
}

export default App
