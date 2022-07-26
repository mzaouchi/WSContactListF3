import logo from './logo.svg';
import './App.css';
import { NavUser } from './Compontes/NavUser';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Compontes/Home';
import { Profile } from './Compontes/Profile';
import { Register } from './Compontes/Register';
import { Loggin } from './Compontes/Loggin';
import { PrivateRoute } from './Compontes/PrivateRoute';
import { Errors } from './Compontes/Errors';

function App() {
  return (
    <div>
      <NavUser/>
      <Errors/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/loggin' element={<Loggin/>}/>
      </Routes>
    </div>
  );
}

export default App;
