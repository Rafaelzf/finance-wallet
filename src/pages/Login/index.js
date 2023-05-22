import { useState, useCallback, useMemo } from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/icons/logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');

  const handleClickEmail = useCallback((val) => {
    setEmail(val);
  }, []);
  const handleClickPassword = useCallback((val) => setPassWord(val), []);

  const isAllow = useMemo(() => {
    console.log('memo', email, password);
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email) && password.length;
  }, [email, password]);

  return (
    <div className="container flex-content">
      <div className="box">
        <h1>
          <img src={ Logo } alt="Logo Wallet" className="logo" />
        </h1>
        <form className="flex-content" id="login-form">
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={ email }
            onChange={ (e) => handleClickEmail(e.target.value) }
            data-testid="email-input"
          />
          <input
            type="password"
            placeholder="Senha"
            name="password"
            value={ password }
            onChange={ (e) => handleClickPassword(e.target.value) }
            maxLength={ 6 }
            data-testid="password-input"
          />

          {isAllow ? (
            <NavLink to="/carteira" data-testid="go-to-page">
              Entrar
            </NavLink>
          ) : (
            <button className="disable" type="button" disabled>
              Entrar
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
