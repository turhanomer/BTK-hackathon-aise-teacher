// src/components/Auth/Register.jsx
import './Auth.css';
import 'bootstrap/dist/css/bootstrap.css';

function Register() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="auth-container card p-5 shadow" style={{ maxWidth: '500px', height: '500px' }}>
        <h2 className="auth-title text-center mb-4">Kayıt Ol</h2>
        <form>
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="bi bi-person-fill"></i> {/* Kullanıcı Adı ikonu */}
            </span>
            <input
              type="text"
              placeholder="Kullanıcı Adı"
              required
              className="form-control"
              style={{ height: '50px', fontSize: '16px' }}
            />
          </div>
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="bi bi-envelope-fill"></i> {/* Email ikonu */}
            </span>
            <input
              type="email"
              placeholder="Email"
              required
              className="form-control"
              style={{ height: '50px', fontSize: '16px' }}
            />
          </div>
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="bi bi-lock-fill"></i> {/* Şifre ikonu */}
            </span>
            <input
              type="password"
              placeholder="Şifre"
              required
              className="form-control"
              style={{ height: '50px', fontSize: '16px' }}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3">Kayıt Ol</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
