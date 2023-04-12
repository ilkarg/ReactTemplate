import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RequestStore } from './commonFunctions/RequestStore';
import './App.sass';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
