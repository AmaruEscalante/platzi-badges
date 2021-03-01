import { Component, Fragment } from 'react';
import BadgeForm from '../components/BadgeForm';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import api from '../api'
import './styles/BadgeNew.css'

class BadgeNew extends Component{
    state = { form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
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

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({loading: true, error: null})

        try{
            await api.badges.create(this.state.form)
            this.setState({loading: false})
        } catch (error) {
            this.setState({ loading: false, error: error})
        }
    }

    render() {
        return (
            <Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                            firstName={this.state.form.firstName || 'John'}
                            lastName={this.state.form.lastName || 'Doe' } 
                            jobTitle={this.state.form.jobTitle || 'Space Carpenter'}
                            email={this.state.form.email || 'email'}
                            gravatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon" 
                            twitter={this.state.form.twitter || 'twitter'}/>
                        </div>
                        <div className="col-6">
                            <BadgeForm  onSubmit={this.handleSubmit} onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BadgeNew;