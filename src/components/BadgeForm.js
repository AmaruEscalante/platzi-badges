import { Component } from 'react';

class BadgeForm extends Component {

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleClick = e => {
        console.log('button was clicked');
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {

        return <div>
            <h1>New Attendant</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label className="form-label"  htmlFor="">First Name</label>
                    <input 
                    onChange={this.props.onChange} 
                    className="form-control" 
                    type="text" 
                    name="firstName"
                    value ={this.props.formValues.firstName}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label"  htmlFor="">Last Name</label>
                    <input 
                    onChange={this.props.onChange} 
                    className="form-control" 
                    type="text" 
                    name="lastName"
                    value ={this.props.formValues.lastName}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label"  htmlFor="">Email</label>
                    <input 
                    onChange={this.props.onChange} 
                    className="form-control" 
                    type="email" 
                    name="email"
                    value ={this.props.formValues.email}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label"  htmlFor="">Job Title</label>
                    <input 
                    onChange={this.props.onChange} 
                    className="form-control" 
                    type="text" 
                    name="career"
                    value ={this.props.formValues.career}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label"  htmlFor="">Twitter</label>
                    <input 
                    onChange={this.props.onChange} 
                    className="form-control" 
                    type="text" 
                    name="twitter"
                    value ={this.props.formValues.twitter}
                    />
                </div>
                <button onClick={this.handleClick} className="btn btn-primary">Save</button>
            </form>
        </div>
    }
}

export default BadgeForm;