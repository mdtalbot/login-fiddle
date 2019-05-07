import React, { Component } from 'react'
import { Link } from 'react-router'

class RegisterPage extends Component {
  render() {
    return (
      <div>
        <h3>RegistrationPage</h3>
        Already have an account? <Link to='login'>Log in here</Link>
      </div>
    )
  }
 }

export default RegisterPage;

