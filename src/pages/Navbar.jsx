import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbarStyle.css';
import { auth } from '../firebase-config';
import '../styles/colors.css'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      showModal: false
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    });
  }

  handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("Logout successful");
      this.setState({ showModal: false });
    } catch (error) {
      console.log("Logout failed");
    }
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { isLoggedIn, showModal } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark p-3 color1">
          <div className='container'>
            <Link className="navbar-brand navbar-main mr-5" to="/" style={{ pointerEvents: 'none' }}>
            <i class="fa-brands fa-codepen fa-xl"></i> ArticleChain
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-3">
                  <Link className="nav-link navItem" to="/"><i className="fa-solid fa-house"></i> Home</Link>
                </li>
                <li className="nav-item mr-3">
                  <Link className="nav-link navItem" to="/articles"><i className="fa-solid fa-newspaper"></i> Articles</Link>
                </li>
                <li className="nav-item mr-3">
                  <Link className="nav-link navItem" to="/bcexplorer"><i className="fa-solid fa-chart-simple"></i> BC Explorer</Link>
                </li>
              </ul>
              <ul className='navbar-nav'>
                {isLoggedIn ? (
                  <Fragment>
                    <li className="nav-item mr-3">
                      <Link className="nav-link navItem" to="/profile"> <i className='fa-solid fa-user'></i> Profile</Link>
                    </li>
                    <li className="nav-item mr-3">
                      <Link to="#" onClick={this.openModal} className="nav-link navItem">
                        <i className='fa-solid fa-right-from-bracket'></i> Log Out
                      </Link>
                    </li>
                  </Fragment>
                ) : (
                  <Fragment>
                    <li className="nav-item mr-3">
                      <Link className="nav-link navItem" to="/login"><i class="fa-solid fa-right-to-bracket"></i> Log In</Link>
                    </li> 
                    <li className="nav-item mr-3">
                      <Link className="nav-link navItem" to="/signup"><i class="fa-solid fa-user-plus fa-sm"></i> Sign Up</Link>
                    </li>
                  </Fragment>
                )}
              </ul>
            </div>
          </div>
        </nav>

        {showModal && (
          <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Confirm Logout</h5>
                  <button type="button" className="close" onClick={this.closeModal}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Are you sure you want to logout?
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={this.closeModal}>Cancel</button>
                  <button type="button" className="btn btn-dark color3" onClick={this.handleLogout}>Logout</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Navbar;
