import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', {
        username,
        email,
        password,
      });
      alert(response.data.message);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Kayıt işlemi sırasında bir hata oluştu.');
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="auth-container card p-5 shadow" style={{ maxWidth: '500px', height: '500px' }}>
        <h2 className="auth-title text-center mb-4">Kayıt Ol</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="bi bi-person-fill"></i>
            </span>
            <input
              type="text"
              placeholder="Kullanıcı Adı"
              required
              className="form-control"
              style={{ height: '50px', fontSize: '16px' }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="bi bi-envelope-fill"></i>
            </span>
            <input
              type="email"
              placeholder="Email"
              required
              className="form-control"
              style={{ height: '50px', fontSize: '16px' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="bi bi-lock-fill"></i>
            </span>
            <input
              type="password"
              placeholder="Şifre"
              required
              className="form-control"
              style={{ height: '50px', fontSize: '16px' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3">Kayıt Ol</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
