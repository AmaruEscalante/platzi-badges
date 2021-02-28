import { Component, Fragment } from 'react';
import BadgeForm from '../components/BadgeForm';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import './styles/BadgeNew.css'

class BadgeNew extends Component{
    state = { form: {
        firstName: '',
        lastName: '',
        email: '',
        career: '',
        twitter: '',
    }};

    handleChange = e => {
        this.setState({
            form: {
                ... this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() {
        return (
            <Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName} 
                            career={this.state.form.career}
                            email={this.state.form.email}
                            gravatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon" 
                            twitter={this.state.form.twitter}/>
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BadgeNew;