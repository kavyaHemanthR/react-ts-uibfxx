import React from 'react';
import { useFormContext } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { MdError } from 'react-icons/md';
import { findInputError, isFormInvalid } from './utils';

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

export const input = ({}) => {
  return <div>Input!!</div>;
};

const InputError = ({ message }) => {
  return (
    <motion.p {...framer_error}>
      <MdError />
      <div>{message}</div>
    </motion.p>
  );
};

export default function FormInputReusable({
  label,
  type,
  id,
  placeholder,
  validation,
  name,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const inputError = findInputError(errors, label);
  const isInvalid = isFormInvalid(inputError);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <AnimatePresence mode="wait" initial={false}>
        {isInvalid && (
          <InputError
            message={inputError.error.message}
            key={inputError.error.message}
          />
        )}
      </AnimatePresence>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(name, validation)}
      />
    </div>
  );
}
