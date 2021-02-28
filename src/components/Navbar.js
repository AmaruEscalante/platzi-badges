import { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import logo from '../images/logo.svg'

class Navbar extends Component{
    render() {
        return <div className="Navbar">
            <div className="container-fluid">

            <Link className="Navbar__brand" to="/">
                <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                <span className="fw-light">Platzi</span>
                <span className="fw-bold">Conf</span>
            </Link>
            </div>
        </div>
    }
}

export default Navbar;