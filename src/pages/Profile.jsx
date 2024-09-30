import { useEffect, useState } from 'react';
import { auth, firestore } from '../firebase-config';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDocRef = firestore.collection('users').doc(user.uid);
          const userDoc = await userDocRef.get();

          if (userDoc.exists) {
            setUserData(userDoc.data());
          } else {
            console.log('Kullanıcı belgesi bulunamadı.');
          }
        }
      } catch (error) {
        console.error('Kullanıcı bilgilerini alma hatası:', error);
      }
    };

    fetchUserData(); 
  }, []); 

  if (!userData) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="container mt-5">
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    alt="Admin"
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="mt-3">
                    <h4>{userData.name}</h4>
                    <p className="text-secondary mb-1">{userData.researchField}</p>
                    <p className="text-muted font-size-sm">
                        {userData.keywords.map((keyword, index) => (
                            <span key={index} className="badge bg-soft-secondary fs-14 mt-1 ml-1">{keyword}</span>
                        ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 p-2">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{userData.name}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{userData.email}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Country</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{userData.country}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Institution</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{userData.institution}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Department</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{userData.department}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
