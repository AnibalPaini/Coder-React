import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer producto="Remera"/>
    </>
  )
}

export default App
