import React from "react";

import Input from '../Input';

function Common(props) {

    return (
    <>
        <Input
          label='Imię'
          className='form-input'
          type='text'
          name='username'
          placeholder='Wpisz swoje Imię'
          //value={values.username}
          value={props.username}
          handleChange={props.handleChange}
        />
        <div className="input__error-box">
          <p className="input__error">{props.errorUser}</p>
        </div>
        <Input
          label='Nazwisko'
          className='form-input'
          type='text'
          name='surname'
          placeholder='Wpisz swoje Nazwisko'
          value={props.surname}
          handleChange={props.handleChange}
        />
        <div className="input__error-box">
          <p className="input__error">{props.errorSur}</p>
        </div>
        <Input
          label='Stanowisko'
          className='form-input'
          type='text'
          name='position'
          placeholder='Wpisz swoje Stanowisko'
          value={props.position}
          handleChange={props.handleChange}
        />
        <div className="input__error-box">
          <p className="input__error">{props.errorPosition}</p>
        </div>
        <Input
          label='Email'
          className='form-input'
          type='email'
          name='email'
          placeholder='Wpisz swój email'
          value={props.email}
          handleChange={props.handleChange}
        />
        <div className="input__error-box">
          <p className="input__error">{props.errorEmail}</p>
        </div>
        <Input
          label='Telefon'
          className='form-input'
          type='text'
          name='phone'
          placeholder='Wpisz swój nr tel. bez spacji'
          value={props.phone}
          handleChange={props.handleChange}
        />
        <div className="input__error-box">
          <p className="input__error">{props.errorPhone}</p>
        </div>
    </>
    );
}

export default Common;