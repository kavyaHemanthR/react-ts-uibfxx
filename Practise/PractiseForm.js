import React from 'react';
import ReusableInput from '../Practise/ReusableInput';

export default function PractiseForm() {
  const [formElements, setFormElements] = React.useState({
    emailId: '',
    isEmailvalid: false,
    isFormValid: false,
    formErrors: {
      email: '',
    },
  });

  function onInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    // setFormElements({
    //   [name]: value,
    // });
    setFormElements((prevValue) => ({
      ...prevValue,
      [name]: value,
      emailId: event.target.value,
    }));
    console.log(name, value, formElements);
    validatefield(name, value);
  }

  function validatefield(fieldName, value) {
    let emailValid = formElements.isEmailvalid;
    let fieldErrors = formElements.formErrors;

    switch (fieldName) {
      case 'emailId':
        console.log('after switch', fieldName);
        const validateEmailRegex =
          /^[\w\.-]+@[\w\.-]+\.(com|net|org|edu|gov|int|mil|arpa|aero|coop|museum|name|pro|biz|info)$/i;
        console.log(
          'validateEmailRegex',
          validateEmailRegex.test(value),
          emailValid
        );
        emailValid = validateEmailRegex.test(value);

        fieldErrors.email = emailValid ? '' : 'Please enter valid email';
        break;
      default:
        break;
    }

    // setFormElements({
    //   formErrors: fieldErrors,
    //   isEmailvalid: emailValid,
    // });
    setFormElements((prevValue) => ({
      ...prevValue,
      formErrors: fieldErrors,
      isEmailvalid: emailValid,
    }));

    console.log({ formElements });
    validateForm();
  }

  function validateForm() {
    // setFormElements({
    //   isFormValid: formElements.isEmailvalid,
    // });
    setFormElements((prevValue) => ({
      ...prevValue,
      isFormValid: formElements.isEmailvalid,
    }));
    console.log('end', { formElements });
  }

  function onSubmit(data) {
    console.log('hi', data);
  }

  return (
    <form>
      <h1>Practise form</h1>
      <ReusableInput
        label="EmailId: "
        id="emailid"
        name="emailId"
        type="emailid"
        placeholder="Enter your email..."
        value={formElements.emailId}
        onChange={onInputChange}
      />

      <button onSubmit={onSubmit} disabled={!formElements.isEmailvalid}>
        Submit
      </button>
    </form>
  );
}
