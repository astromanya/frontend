import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import User from './components/User/User';

function App() {
  return (
    <div className="App">
    <Router>
     <NavBar />
     <Routes>
      <Route exact path='/'element={<Home/>}/>
      <Route exact path="/users/:userId" element={<User/>}></Route>
      <Route></Route>
     </Routes>
    </Router>
    </div>
  );
}

export default App;
