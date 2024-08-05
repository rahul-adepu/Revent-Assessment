import './App.css';
import Filter from './components/Filter';
import { useState } from 'react';
import Sort from './components/Sort';
import Navbar from './components/Navbar';
import DisplayProducts from './components/DisplayProducts';
import Home from './components/Home';


function App() {
  const [searchedData, setSearchedData] = useState([]);
  const [text, setText] = useState("");

  return (
    <div>

      <Navbar text={text} setText={setText} searchedData={searchedData} setSearchedData={setSearchedData} />

      <div style={{width:"87%",margin:"auto",display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Filter searchedData={searchedData} setSearchedData={setSearchedData} />
        <Sort searchedData={searchedData} setSearchedData={setSearchedData} />
      </div>

      <Home searchedData={searchedData} setSearchedData={setSearchedData} />
      
      <DisplayProducts data={searchedData} />

    </div>
  );
}

export default App;
