import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import TextFieldComponent from '../../Components/textfield-component/TextfieldComponent';
// import { Button } from '@mui/material';

// function ContactUs() {
//   const [formData, setFormData] = useState({
//     // Initialize form data state
//     firstName: '',
//     lastName: '',
//     email: '',
//   });

//   const handleInputChange = (event) => {
//     const { name, value,} = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     console.log(value,"value");
//     console.log(name,"name");
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Form Data:', formData);
//   };

//   return (
  
//     <div className="formcenter">

//         <form onSubmit={handleSubmit}>
//       <TextFieldComponent
//         fieldtitle="First Name"
//         name="firstName"
//         value={formData.firstName}
//         onChange={handleInputChange}
//       />
//       <TextFieldComponent
//         fieldtitle="Last Name"
//         name="lastName"
//         value={formData.lastName}
//         onChange={handleInputChange}
//       />
//       <TextFieldComponent
//         fieldtitle="Email"
//         name="email"
//         value={formData.email}
//         onChange={handleInputChange}
//       />
//       <Button variant="contained" type="submit">Submit</Button>
//     </form>
//     </div>
  
    
//   );

// }

function LoginPage() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate=useNavigate()

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        setTimeout(()=>{
          navigate("/")
        },3000);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <h6>Log in to Vinayan</h6>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default LoginPage
