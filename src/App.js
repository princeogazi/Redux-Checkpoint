import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import { Provider } from 'react-redux';
import store from './JS/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{textAlign: "center"}}>
        <h1>ToDo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;