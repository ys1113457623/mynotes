import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import React from 'react';
import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
            <Route path="/" exact element={<NotesListPage/>} />
            <Route path="/notes" exact element={<Header/>} />
        </Routes>
      </div>
    </BrowserRouter>
    // <Router>
    //   <div className='App'>
    //     <Header />
    //     <Route path='/' exact components={NotesListPage} />
    //     <Route path='/note/:id' components={NotePage} />
    //   </div>
    // </Router>
    
  );
}

export default App;
