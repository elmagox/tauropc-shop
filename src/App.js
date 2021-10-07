import './assets/main.scss';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './containers/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="">
      <NavBar/>
      <ItemListContainer greeting="Saludos desde ItemListContainer"/>
    </div>
  );
}

export default App;
