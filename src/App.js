import { Routes, Route } from 'react-router-dom';
// components
import Nav from './components/Nav';
// pages
import Students from './pages/Students';
import './App.css';

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='students' element={<Students />} />
      </Routes>
    </div>
  );
}

export default App;
