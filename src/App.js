import { BrowserRouter } from 'react-router-dom';
import VendingMachine from "./VendingMachine"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <VendingMachine />
      </BrowserRouter>
    </div>
  );
}

export default App;
