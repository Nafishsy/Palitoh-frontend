import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import VetList from './components/userComponents/VetList';
import ShopView from './components/userComponents/ShopView';
import PetList from './components/userComponents/PetList';
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
                <Route path="/vets" element={<VetList/>}></Route>
                <Route path="/shop" element={<ShopView/>}></Route>
                <Route path="/pets" element={<PetList/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
