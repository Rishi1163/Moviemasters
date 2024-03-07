
import './App.css';
import Home from './pages/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import MovieDescription from './pages/MovieDescription';
import Signup from "./Components/Signup"
import SignIn from "./Components/Signin"
import Movies from './pages/Movies';
import { QueryClient, QueryClientProvider } from 'react-query';
import Intro from './pages/Intro';
import PrivateComp from './Components/PrivateComp';

const queryClient = new QueryClient();
function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Routes>
            {/* <Route  path="/" element={<Navigate to={"/intro"}/>}/> */}
            
              <Route element={<PrivateComp/>}>
              <Route path="/home" element={<Home />} />
              <Route path="movies/:id" element={<MovieDescription />} />
              <Route path="Movies" element={<Movies/>}/>
              </Route>
              
              
              <Route path="/" element={<Intro/>}/>
              <Route path='/register' element={<Signup/>}/>
              <Route path="/login" element={<SignIn/>}/>
          
      </Routes>
    </QueryClientProvider>
      {/* <Navbar /> */}
      
    </>
  );
}

export default App;
