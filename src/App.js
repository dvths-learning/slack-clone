import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/SideBar';
import Login from './components/Login/Login';
import Chat from './components/Chat/Chat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <h1>
            <Login />
          </h1>
        ) : (
          <>
            <Header />
            <div className="app__body">
              <SideBar />
              <Routes>
                <Route path="/room/:roomId" element={<Chat />} />
                <Route path="/" element={<h3>Welcome</h3>} />
              </Routes>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
