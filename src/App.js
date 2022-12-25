// import './App.css';
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
import UpdateFood from './components/shopComponents/UpdateFood';
import ShopDetails from './components/adminComponents/ShopDetails';
import AdmBarChart from './components/adminComponents/ADMBarChart';
import AreaChart from './components/adminComponents/AreaChart';
import ChatSys from './components/userComponents/ChatSys';
import Appoinments from './components/userComponents/Appoinments';
import ChatSysVet from './components/vetComponents/ChatSysVet';
function App() {
  return (

    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
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
                <Route path="/Admin/Shop/Transactions" element={<ShopDetails/>}></Route>
                <Route path="/Admin/Shop/Transactions/Chart/Bar" element={<AdmBarChart/>}></Route>
                <Route path="/Admin/Shop/Transactions/Chart/Chart" element={<AreaChart/>}></Route>


            {/* User */}

                <Route path="/Customer/Home" element={<PetList/>}></Route>
                <Route path="/Customer/vets" element={<VetList/>}></Route>
                <Route path="/Customer/shop" element={<ShopView/>}></Route>
                <Route path="/Customer/:c_id/Consult/:id" element={<ChatSys/>}></Route>
                <Route path="/Customer/:c_id/Vet/:v_id/Consult/:id" element={<ChatSys/>}></Route>
                <Route path="/Customer/Appointments" element={<Appoinments/>}></Route>

            {/* Vet */}
                <Route path="/vet/dashboard" element={<Dashboard/>}></Route>
                <Route path="/vet/create/appointment" element={<CreateAppinments/>}></Route>
                <Route path="/Vet/:c_id/Customer/:c_id/Consult/:id" element={<ChatSysVet/>}></Route>


            {/* Shop */}
                <Route path="/shop/pet/manage" element={<PetManage/>}></Route>
                <Route path="/shop/food/manage" element={<ShopManage/>}></Route>
                <Route path="/shop/pet/update/:id" element={<UpdatePet/>}></Route>                
                <Route path="/shop/food/update/:id" element={<UpdateFood/>}></Route>                


          </Routes>
      </Router>
    </div>
  );
}

export default App;
