// src/components/Auth/Login.jsx
import './Auth.css';

function Login() {
  return (
    <div className="auth-container">
      <h2>Giriş Yap</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Şifre" required />
        <button type="submit" className="submit-button">Giriş Yap</button>
      </form>
    </div>
  );
}

export default Login;
