import './App.css';
import  Footer   from './components/public/Footer';
import Main from './components/public/Main';
import Navbar from './components/public/Navbar';
import { Switch, Route, BrowserRouter, Routes } from "react-router-dom";
import { Detail } from './components/public/Detail';
import { UserForm } from './components/public/UserForm';

function App() {
  return (
 <div>
  <Navbar/>
  <Routes>
        <Route exact path="/" element={<Main/>}  ></Route>
        <Route exact path="/detail/:id" element={<Detail />}  ></Route>
        <Route exact path="/user-form" element={<UserForm />}  ></Route>
      </Routes>
<Footer/>
 </div>
  );
}

export default App;
