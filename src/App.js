
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import MovieDescription from './pages/MovieDescription';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" >
              <Route index element={<Home />} />
              <Route path="movies/:id" element={<MovieDescription />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
