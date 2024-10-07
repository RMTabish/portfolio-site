import logo from './logo.svg';
import './App.css';
import Head from './components/Head';

import Home from './components/home';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';



function App() {
  return (
   <Router>
    <div className='App'>
      <Head/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>

      </Routes>

    </div>
   </Router>
  );
}

export default App;
