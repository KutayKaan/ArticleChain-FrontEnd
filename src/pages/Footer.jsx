import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Footer extends Component {
  render() {
    return (
      <div className='container mt-5'>
        <footer className='py-3 my-4'>
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className='nav-item'>
                    <Link to="/AboutUs" className='nav-link px-2 text-body-secondary' style={{color: '#074032	'}}>About Us</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/contactus" className='nav-link px-2 text-body-secondary' style={{color: '#074032	'}}>Contact Us</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/termofuse" className='nav-link px-2 text-body-secondary' style={{color: '#074032	'}}>Term Of Use</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/legal" className='nav-link px-2 text-body-secondary' style={{color: '#074032'}}>Legal</Link>
                </li>
            </ul>
            <p className="text-center text-body-secondary" style={{color: '#071b40'}}>© 2024 Company, Inc</p>
        </footer>
      </div>
    )
  }
}

export default Footer