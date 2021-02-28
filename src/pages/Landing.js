import './styles/Landing.css';
import confLogo from '../images/platziconf-logo.svg';
import heroLogo from '../images/astronauts.svg'
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Landing(){
    return (
        <Fragment>
            <div className="Landing__hero">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="Landing__col col-12 col-md-4">
                            <img className="img-fluid" src={confLogo} alt=""/>
                            <h1 class="fw-bold">Badge Management System</h1>
                            <Link to="/badges" className="btn btn-primary">
                                Start Now
                            </Link>
                        </div>
                        <div className="Landing__col d-none d-md-block col-6">
                            <img className="img-fluid" src={heroLogo} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}