
import './App.css';
import Home from './screens/Home';
import Login from  './screens/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
       <div className="App">
     <Routes>
      <Route exact path="/" element={<Home/>} >
        
      </Route>
      <Route exact path="/Login" element={<Login/>} >
        
      </Route>
     </Routes>
    </div>
    </Router>
   
  );
}

export default App;
