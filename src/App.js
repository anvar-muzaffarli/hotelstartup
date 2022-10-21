import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css';


// komponentler
import Navbar from './components/Navbar';
import Introsection from './components/Introsection';
import Carousel from './components/Carousel'

function App() {
  return (
    <>
    <Navbar />
    <Introsection />
    <Carousel />
    </>
  );
}

export default App;
