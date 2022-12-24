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
import ReportList from './components/adminComponents/ReportList';
import Transaction from './components/adminComponents/Transaction';
import PetManage from './components/shopComponents/PetManage';
import ShopManage from './components/shopComponents/ShopManage';
import UpdatePet from './components/shopComponents/UpdatePet';
function App() {
  return (

    <div className="App">
      {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link> */}
      <Router>
          <Routes>
            {/* All */}
                <Route path="/" element={<Home/>}></Route>
                <Route path="/registration" element={<Registration/>}></Route>
            
            {/* Admin */}
                <Route path="/Admin/Home" element={<UserList/>}></Route>
                <Route path="/user/edit/:id" element={<EditUser/>}></Route>
                <Route path="/Admin/Reports" element={<ReportList/>}></Route>
                <Route path="/Admin/Transactions" element={<Transaction/>}></Route>


            {/* User */}

                <Route path="/Customer/Home" element={<PetList/>}></Route>
                <Route path="/Customer/vets" element={<VetList/>}></Route>
                <Route path="/Customer/shop" element={<ShopView/>}></Route>

            {/* Vet */}
                <Route path="/vet/dashboard" element={<Dashboard/>}></Route>
                <Route path="/vet/create/appointment" element={<CreateAppinments/>}></Route>

            {/* Shop */}
                <Route path="/shop/pet/manage" element={<PetManage/>}></Route>
                <Route path="/shop/manage" element={<ShopManage/>}></Route>
                <Route path="/shop/pet/update/:id" element={<UpdatePet/>}></Route>                


          </Routes>
      </Router>
    </div>
  );
}

export default App;
