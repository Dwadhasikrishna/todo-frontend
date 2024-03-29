import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Todo from './pages/Todo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/todo' element={<Todo/>}/>
      </Routes>
    </div>
  );
}

export default App;
