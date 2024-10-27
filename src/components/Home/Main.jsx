// src/App.jsx
import Sidebar from './Sidebar/Sidebar';
import Avatar from './Avatar/Avatar';
import InputArea from './InputArea/InputArea';
import '../App.css';

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