import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// import '../stijlen/App.css';



import Navbar from '../componenten/navbar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home.js'
import Probeersel from './Probeersel.js';

function App() {
  return (
    <div className="App">
      <p>hallo</p>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Probeersel' element={<Probeersel />} /> {/* Nieuwe route voor de probeersel pagina */}

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
