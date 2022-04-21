import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <h1>Slack Clone</h1>
      <Header />
      <div className="app__body">
        <SideBar />
        {/* React Router */}
      </div>
    </div>
  );
}

export default App;
