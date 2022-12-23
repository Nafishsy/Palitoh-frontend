import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import VetList from './components/userComponents/VetList';
import ShopView from './components/userComponents/ShopView';
import PetList from './components/userComponents/PetList';
import Dashboard from './components/vetComponents/Dashboard';
import CreateAppinments from './components/vetComponents/CreateAppinments';
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            {/* User */}
                <Route path="/vets" element={<VetList/>}></Route>
                <Route path="/shop" element={<ShopView/>}></Route>
                <Route path="/pets" element={<PetList/>}></Route>
            {/* Vet */}
                <Route path="/vet/dashboard" element={<Dashboard/>}></Route>
                <Route path="/vet/create/appointment" element={<CreateAppinments/>}></Route>

          </Routes>
      </Router>
    </div>
  );
}

export default App;
