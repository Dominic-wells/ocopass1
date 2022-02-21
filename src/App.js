
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages';
import SigninPage from './pages/Signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/Signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
