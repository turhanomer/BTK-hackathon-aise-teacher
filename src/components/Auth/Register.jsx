// src/components/Auth/Register.jsx
import './Auth.css';

function Register() {
  return (
    <div className="auth-container">
      <h2>Kayıt Ol</h2>
      <form>
        <input type="text" placeholder="Kullanıcı Adı" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Şifre" required />
        <button type="submit" className="submit-button">Kayıt Ol</button>
      </form>
    </div>
  );
}

export default Register;
