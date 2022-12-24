import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import VetList from './components/userComponents/VetList';
import ShopView from './components/userComponents/ShopView';
import PetList from './components/userComponents/PetList';
import Dashboard from './components/vetComponents/Dashboard';
import CreateAppinments from './components/vetComponents/CreateAppinments';
import Home from './components/publicComponents/Home';
import Registration from './components/publicComponents/Registration';
import UserList from './components/adminComponents/UserList';
import EditUser from './components/adminComponents/EditUser';
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            {/* All */}
                <Route path="/" element={<Home/>}></Route>
                <Route path="/registration" element={<Registration/>}></Route>
            
            {/* Admin */}
                <Route path="/Admin/Home" element={<UserList/>}></Route>
                <Route path="/user/edit/:id" element={<EditUser/>}></Route>


            {/* User */}
                <Route path="/vets" element={<VetList/>}></Route>
                <Route path="/shop" element={<ShopView/>}></Route>
                <Route path="/pets" element={<PetList/>}></Route>/vets
            {/* Vet */}
                <Route path="/vet/dashboard" element={<Dashboard/>}></Route>
                <Route path="/vet/create/appointment" element={<CreateAppinments/>}></Route>

          </Routes>
      </Router>
    </div>
  );
}

export default App;
