import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import React from 'react';
import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'

function App() {
  return (
    
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
              <Route path="/" exact element={<NotesListPage/>} />
              <Route path="/notes/:id" element={<NotePage />} /> 
              {/* <Route path="/note/new" element={<NotePage />} />  */}
          </Routes>
        </div>
      </div>
    </Router>
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
