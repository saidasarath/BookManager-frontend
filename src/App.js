import Home from './routes/Home';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Availablebboks from './routes/Availablebboks';
import Mybooks from './routes/Mybooks';
import NewBookRegister from './routes/NewBookRegister';
import Login from './routes/Login';
import Register from './routes/Register';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/available" element={<Availablebboks/>}/>
      <Route path="/mybooks" element={<Mybooks/>}/>
      <Route path="/newbook" element={<NewBookRegister/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
     </Routes>
    </div>
  );
}

export default App;
