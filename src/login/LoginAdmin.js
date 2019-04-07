import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { auth } from 'firebase';
import { connect } from 'react-redux';
import { messageShow } from '../Store/Actions';

 class SimpleFormExample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {
                email: 'Admin@Admin.com',
                password: '0041462fa',
            },
            submitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit() {
        const {email,password} = this.state.formData

            auth().signInWithEmailAndPassword(email, password)
            .then(() => {
            this.props.ifTrue();

            this.props.messageShow("success","Login SuccesFull")

            })
            .catch(err => {
              this.props.messageShow("error",err.message)
                      
            });
        

        
    }

    render() {
        const { formData, submitted } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <h2>Simple form</h2>
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <br />
                <TextValidator
                    label="Password"
                    onChange={this.handleChange}
                    name="password"
                    type="password"
                    value={formData.password}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                >

                 Submit
                 
                </Button>
                <br />
            </ValidatorForm>
 );
    }
}

function mapStateToProp(state) {
    return ({
         })
  }
  
  
  
  function mapDispatchToProp(dispatch) {
    return ({
        messageShow: (type,val) => { dispatch(messageShow(type,val)) },
          
    })
  }
  
  export default connect(mapStateToProp, mapDispatchToProp)(SimpleFormExample);
