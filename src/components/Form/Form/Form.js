import React from 'react';


const Form = ({children, handleSubmit}) => {

  return (
    <>
        <form onSubmit={handleSubmit} className='form' noValidate>
            <h1 className='form__head'>
                Wypełnij formularz i&nbsp;skopiuj stopkę!
            </h1>
            {children}
        </form>
    </>
  );
};

export default Form;