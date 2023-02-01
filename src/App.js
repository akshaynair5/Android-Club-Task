import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Register from './pages/register';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Register" element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
