import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';
import "../styles/colors.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && !user.emailVerified) {
        auth.signOut();
        setError('E-posta adresiniz henüz doğrulanmamış. Lütfen e-posta adresinizi kontrol ederek doğrulama işlemi yapınız.');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      setError('');
      await auth.signInWithEmailAndPassword(email, password);
      const user = auth.currentUser;

      if (user && user.emailVerified) {
        console.log('Başarılı bir şekilde giriş yapıldı');
        navigate('/');
      } else {
        setError('E-posta adresiniz henüz doğrulanmamış. Lütfen e-posta adresinizi kontrol ederek doğrulama işlemi yapınız.');
        auth.signOut();
      }
    } catch (error) {
        switch (error.code) {
            case 'auth/user-not-found':
              setError('User not found. Please enter a registered email address and password.');
              break;
            case 'auth/invalid-email':
              setError('Invalid email address. Please enter a valid email address.');
              break;
            case 'auth/wrong-password':
              setError('Incorrect password. Please enter the correct password.');
              break;
            default:
              setError('Login failed. Please try again.');
              break;
          }
      console.error('Giriş yapılamadı:', error);
    }
  };

  return (
    <section className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card text-center p-4" style={{ borderRadius: '2rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
              <h5 className="card-title mb-4" style={{color: '#145b8d'}}>Login</h5>
              <div className="form-outline mb-4">
                <input onChange={(e) => setEmail(e.target.value)} name='email' type="email" className="form-control form-control-lg" placeholder="Email address" required/>
              </div>
              <div className="form-outline mb-4">
                <input onChange={(e) => setPassword(e.target.value)} name='password' type="password" className="form-control form-control-lg" placeholder="Password" required/>
              </div>
              <div className="pt-1 mb-4">
                <button onClick={handleLogin} className="btn btn-dark btn-lg btn-block color3" type="submit">Login</button>
              </div>
              {error && <p className="text-danger">{error}</p>}
              <p className="mb-3" style={{ color: '#0C0C0C' }}>Don't have an account? <Link to="/signup" style={{ color: '#57A6A1' }}>Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
