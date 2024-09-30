import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, firestore } from '../firebase-config';
import "../styles/colors.css";

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [institution, setInstitution] = useState('');
  const [orcid, setOrcid] = useState('');
  const [department, setDepartment] = useState('');
  const [country, setCountry] = useState('');
  const [firstOption, setFirstOption] = useState('');
  const [secondOption, setSecondOption] = useState([]);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [error, setError] = useState('');


  const navigate = useNavigate();


  const handleSignUp = async () => {

    if (!name || !email || !password || !country) {
      setError('Please fill out all required fields.');
      return;
    }


    try {
      setError('');

      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      await user.sendEmailVerification();

      await firestore.collection('users').doc(user.uid).set({
        name,
        password,
        email,
        institution,
        department,
        country,
        orcid,
        researchField: firstOption,
        keywords: selectedKeywords
      });
      auth.signOut();
      console.log('Kullanıcı kaydedildi:', user);
      navigate('/'); 

    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('This email address is already in use.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address.');
          break;
        case 'auth/weak-password':
          setError('Password must be at least 6 characters long.');
          break;
        default:
          setError('An error occurred during user registration. Please try again.');
          break;
      }
      console.error('Kullanıcı kaydı sırasında hata oluştu:', error);
    }
  };


  const handleDynamicSelect = (event) => {
    const selectedOption = event.target.value;
    setFirstOption(selectedOption);

    let options = [];
    switch (selectedOption) {
      case 'Computer Science':
        options = ['Object-Oriented Programming', 'Web Development', 'Machine Learning', 'Database Management', 'Algorithms', 'Project Management'];
        break;
      case 'Medicine':
        options = ['Medical Research', 'Health Science', 'Clinical Study', 'Medical Journal', 'Pharmacology', 'Epidemiology'];
        break;
      case 'Physics':
        options = ['Quantum Mechanics', 'Thermodynamics', 'Relativity', 'Nuclear Physics', 'Electromagnetism', 'Particle Physics'];
        break;
      case 'Biotechnology':
        options = ['Genetic Engineering', 'Biopharmaceuticals', 'Bioinformatics', 'Stem Cells', 'Microbial Biotechnology', 'Bioprocessing'];
        break;
      case 'Environmental Science':
        options = ['Climate Change', 'Ecology', 'Biodiversity', 'Renewable Energy', 'Pollution', 'Water Resources'];
        break;
      default:
        options = [];
        break;
    }

    setSecondOption(options);
    setSelectedKeywords([]);
  };


  const handleSelectChange = (event) => {
    const selectedKeywordsArray = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedKeywords(selectedKeywordsArray);
  };

  return (
    <section className="vh-auto justify-content-center align-items-center" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card text-center p-5 mt-5 mb-5" style={{ borderRadius: '2rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
              <h4 className="card-title mb-4" style={{ color: '#074032' }}>Sign Up</h4>

              <div className="form-outline mb-4">
                <input onChange={(e) => setName(e.target.value)} type="text" className="form-control form-control-m" placeholder="Full Name*" required />
              </div>

              <div className="form-outline mb-4">
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control form-control-m" placeholder="Email Address*" required />
              </div>

              <div className="form-outline mb-4">
                <input onChange={(e) => setInstitution(e.target.value)} type="text" className="form-control form-control-m" placeholder="Institution" />
              </div>

              <div className="form-outline mb-4">
                <input onChange={(e) => setDepartment(e.target.value)} type="text" className="form-control form-control-m" placeholder="Department"/>
              </div>

              <div className="form-outline mb-4">
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control form-control-m" placeholder="Password*" required />
              </div>

              <div className="form-outline mb-4">
                <input onChange={(e) => setCountry(e.target.value)} type="text" className="form-control form-control-m" placeholder="Country*" />
              </div>

              <div className='form-outline mb-4'>
                <select onChange={handleDynamicSelect} className="form-control form-control-m" id='firstSelect' value={firstOption}>
                  <option value="" disabled>Select Research Field</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Medicine">Medicine</option>
                  <option value="Physics">Physics</option>
                  <option value="Biotechnology">Biotechnology</option>
                  <option value="Environmental Science">Environmental Science</option>
                </select>
              </div>

              <div className='form-outline mb-4'>
                <select
                  disabled={secondOption.length === 0}
                  className="form-control form-control-m"
                  multiple
                  aria-label="multiple select example"
                  value={selectedKeywords}
                  onChange={handleSelectChange}
                >
                  {secondOption.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="form-outline mb-4">
                <input onChange={(e) => setOrcid(e.target.value)} type="text" className="form-control form-control-m" placeholder="ORCID" />
              </div>

              <div className="pt-1 mb-4">
                <button onClick={handleSignUp} className="btn btn-dark btn-lg btn-block color3" type="button">Sign Up</button>
              </div>

              {error && <p className="text-danger">{error}</p>}

              <p className="mb-0" style={{ color: '#0C0C0C' }}>Already have an account? <Link to="/login" style={{ color: '#57A6A1' }}>Sign In</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
