import './App.css';
import {Footer} from './MyComponents/Footer';//It is passed in curly brackets because it is not exported by default through its function.
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';

function App() {
  
  return (
    <>
      <Header title="My-Todo's-List" searchBar={true}/>
      <Footer/>
      <Todos/>
    </>
  );
}

export default App;
