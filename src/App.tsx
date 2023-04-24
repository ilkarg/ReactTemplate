import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RequestStore } from './commonFunctions/RequestStore';
import './App.sass';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
