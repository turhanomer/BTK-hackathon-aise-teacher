// src/App.jsx
import Sidebar from './components/Sidebar/Sidebar';
import Avatar from './components/Avatar/Avatar';
import InputArea from './components/InputArea/InputArea';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="avatar-container">
        <Avatar />
      </div>
      <div className="input-container">
        <InputArea />
      </div>
    </div>
  );
}

export default App;
