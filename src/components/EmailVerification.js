import React, { Component } from 'react';

class EmailVerification extends Component {
  render() {
    return (
      <div className='Contact' style={{ padding: '120px 10px' }}>
        <h1>Email confirmation</h1>
        <br />
        <div>
          <h4 style={{ backgroundColor: 'Green', color: 'white', borderRadius: '5px', padding: '20px 0 20px 0' }}>Your email has been successfully verified. You must Sign In now.
          </h4>
          <br />
          <a href='/Signin' style={{ color: 'rgb(227, 166, 45)', fontSize: '1.5em' }}>Sign In now</a>
          <br />
        </div>
        <br />
        <div>
          <h4 style={{ backgroundColor: 'red', color: 'white', borderRadius: '5px', padding: '20px 0 20px 0' }}>An error occurred while checking your email. Please try again.</h4>
          <br />
          <a href='/Signin' style={{ color: 'rgb(227, 166, 45)', fontSize: '1.5em' }}>Send back the confirmation email</a>
          <br />
        </div>
        <div className='belowDesc'>
        </div>
      </div>
    );
  }
}

export default EmailVerification;
