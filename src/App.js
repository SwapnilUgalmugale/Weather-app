
import './App.css';
import Search from './components/search/search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function App() {
  
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  
  return (
    <div className="container">
    <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
