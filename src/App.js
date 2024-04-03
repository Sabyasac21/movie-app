import './App.css';
import HorizontalView from './Components/HorizontalView';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Upcoming from './Components/Upcoming';


function App() {
  return (
    <div className="don">
      <Navbar />
      <Main/>
      <HorizontalView/>
      <Upcoming/>
      
    </div>
  );
}

export default App;
