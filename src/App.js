import './App.css';
import Frontpage from './Frontpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from './components/success';
function App() {
  return (
  
    <Router>
 
    <Routes>
    
      <Route path="/" element={<Frontpage />} />
      <Route path="/payment-success" element={<Success />} />
    </Routes>
  </Router>
  
  );
}

export default App;
