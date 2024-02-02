import Homepage from './pages/homepage';
import Header from './components/Header';
import './App.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPoems } from './features/poems/poemsSlice';
import { Routes, Route } from 'react-router-dom';
import PoemsDirectoryPage from './pages/PoemsDirectory';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPoems());
  }, [dispatch]);

  return (
    <div className='App'>
      <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/poems' element={<PoemsDirectoryPage />} />
        </Routes>
    </div>
  )
}

export default App
