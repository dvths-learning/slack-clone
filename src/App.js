import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/SideBar';
import Chat from './components/Chat/Chat';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="app__body">
          <SideBar />
          <Routes>
            <Route path="/room/:roomId" element={<Chat />} />
            <Route path="/" element={<h3>Welcome</h3>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
