import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import { useState } from 'react';
const App =() => {
  const [searchItem, setSearchItem] = useState("");
  return(
   <div className='flex flex-col items-center'>
     <Header />
     <SearchBar searchItem={searchItem} setSearchItem={setSearchItem} />
   </div>

  );
};

export default App;
