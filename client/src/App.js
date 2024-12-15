import logo from './logo.svg';
import './App.css';
import ProtectedRoute from "./Component/ProtectedRoute";
import { Provider } from "react-redux";
import store from "./redux/store";

import './pages/Login/loginpage.css'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Hospital from "./pages/Hospital";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Ambulance from "./pages/Ambulance";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Provider store ={store}>

          <BrowserRouter>
              <Routes>
                
                <Route path="/" element={<ProtectedRoute> <Home /> </ProtectedRoute>}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/hospital" element={<ProtectedRoute> <Hospital/></ProtectedRoute>}> </Route>
                <Route path="/ambulance" element={<ProtectedRoute><Ambulance/></ProtectedRoute>}></Route>
                <Route path="/user" element={<ProtectedRoute><User/></ProtectedRoute>}></Route>
                <Route path="/admin" element={<ProtectedRoute><Admin/></ProtectedRoute>}></Route>

                
              </Routes>
          </BrowserRouter>
      </Provider>
      
      


    </div>
  );
}

export default App;
