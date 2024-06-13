import React from 'react';
import ItemList from './components/ItemList';
import "bootstrap/dist/css/bootstrap.min.css";
// import AddItem from './components/AddItem';
// import './App.css'

const App = () => {
  return (
    <div>
      <h1 align="center">Portal Berita Zaid</h1>
      {/* <AddItem /> */}
      <ItemList />
    </div>
  );
};

export default App;