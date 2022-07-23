import React, { Component } from 'react';
import FormUserDetails1 from './FormUserDetails1';
import FormPersonalDetails1 from './FormPersonalDetails1'; 
import Success1 from './Success1';
import FormPaymentDetails from './FormPaymentDetails'; 
export class UserForm1 extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    DateofTravelling: '',
    ContactNumber: '',
    Age: '',
    Email: '',
    City: '',
    ModeofTransportation: '', 
    TypeofTrip: '',
    ModeOfPayment: '',
    Nameonthecard: '',
    CreditCardNumber: '',
    ExpMonth: '',
    CVV: '',
    ExpYear: '', 
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, DateofTravelling, ContactNumber, Age, Email, city, ModeofTransportation, TypeofTrip, ModeOfPayment, Nameonthecard, CreditCardNumber, ExpMonth, CVV, ExpYear } = this.state;
    const values = { firstName, lastName, DateofTravelling, ContactNumber, Age, Email,city, ModeofTransportation, TypeofTrip, ModeOfPayment, Nameonthecard, CreditCardNumber, ExpMonth, CVV, ExpYear};

    switch (step) {
      case 1:
        return (
          <FormUserDetails1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails1
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 3:
          return (
            <FormPaymentDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          ); 
      case 4:
        return <Success1 />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}
export default UserForm1; 