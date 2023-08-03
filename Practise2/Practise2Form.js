import React from 'react';
import { useForm } from 'react-hook-form';

function Practise2Form() {
  const {register,handleSubmit,formState: { errors }} = useForm();
  
  function onSubmit(data) {
    console.log(data);
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstname', {required : true})}/>
      {errors.firstname && <p>Please enter First Name</p>}
      <input type="submit" />
    </form>
  );
}

export default Practise2Form;
