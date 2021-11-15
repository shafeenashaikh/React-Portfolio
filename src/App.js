import './App.scss'
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import { Routes ,Route } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';

function App() {
  return (
    <div className="App">
     
        <div className="sidebar">
          <NavBar/>
        </div>
        <div className="main-content">
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage/>} >
              </Route>
              <Route path="/about"  element={<AboutPage />}>
                
              </Route>
           </Routes>
          </div>
        </div>
    </div>
  );
}

export default App;
