import React from 'react';
import FormInputReusable from './FormInputReusable.js';
import { FormProvider, useForm } from 'react-hook-form';
import { password_validation } from './utils/inputValidations';

function MyForm() {
  const [formElements, setFormElements] = React.useState({
    name: '',
    emailId: '',
    comments: '',
    fruit: ['apple', 'lime'],
    isChecked: false,
  });

  function changeInput(e) {
    const name = e.target.name;
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormElements({
      [name]: value,
    });
  }

  const methods = useForm();
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  const name_validation = {
    label: 'Reusable Input_NAME: ',
    type: 'text',
    name: 'name',
    id: 'name',
    placeholder: 'Name',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
    },
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={(e) => e.preventDefault()} noValidate>
        <p>This is my form</p>
        <label>
          Name :
          <input
            name="name"
            value={formElements.name}
            type="text"
            placeholder="Name"
            onChange={changeInput}
          />
        </label>
        <br />
        <label>
          EmailId :
          <input
            name="emailId"
            value={formElements.emailId}
            type="text"
            placeholder="abc@gmail.com"
            onChange={changeInput}
          />
        </label>
        <br />
        <label>
          Comments:
          <textarea
            type="text"
            name="comments"
            value={formElements.comments}
            placeholder="This is some text in textarea"
            onChange={changeInput}
          />
        </label>

        <br />
        <label>
          Select:
          <select
            multiple={true}
            value={formElements.fruit}
            onChange={changeInput}
          >
            <option value="grapes">Grapes</option>
            <option value="lime">Lime</option>
            <option value="apple">Apple</option>
            <option value="kiwi">Kiwi</option>
            <option value="pomegranate">Pomegranate</option>
          </select>
        </label>

        <br />

        <label>
          Is Checked? :
          <input
            name="isChecked"
            type="checkbox"
            checked={formElements.isChecked}
            onChange={changeInput}
          />
        </label>

        <h1>Reusable Form Inputs</h1>

        <FormInputReusable {...name_validation} />

        <FormInputReusable {...password_validation} />

        <button onClick={onSubmit}>Submit Form</button>
      </form>
    </FormProvider>
  );
}

export default MyForm;
