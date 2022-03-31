import React, { useState } from 'react';

import '../Style/style.scss';
import image from '../Images/agents.jpg';

import validate from '../components/Form/validateInfo';
import useForm from '../components/Form/useForm';

import CompanyContent from '../components/Content/CompanyContent/CompanyContent';
import Footer from '../components/Footers/Footer';
import CompanyFooter from '../components/Footers/CompanyFooter';

import Form from '../components/Form/Form';
import Common from '../components/Form/Common';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button/Button';

import Sidebar from '../components/Sidebar';
// import Helper from '../components/Helper/Helper';

const CompanyPage = () => {

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className='container'>
      <Sidebar/>

      <div className='content-left columbus'>
        {/*if form is completed, show footer table with data*/}
        {!isSubmitted ? (
          <CompanyContent />
        ) : (
          <Footer>
            <CompanyFooter
              name={values.username}
              surname={values.surname}
              email={values.email}
              position={values.position}
              phone={values.phone}
              image={values.image}
              cName={values.cName}
              cAddress={values.cAddress}
              cStreet={values.cStreet}
              cNip={values.cNip}
              cMail={values.cMail}
              cPhone={values.cPhone}
            />
          </Footer>
        )}
      </div>

      <div className='content-right'>
        <img className='content-right--image' src={image} alt="meeting" />
        <Form handleSubmit={handleSubmit}>
          <Common
            handleChange={handleChange}
            errorUser={errors.username}
            errorSur={errors.surname}
            errorPosition={errors.position}
            errorEmail={errors.email}
            errorPhone={errors.phone}
          />
          <Input
            label='Nazwa Firmy'
            className='form-input'
            type='text'
            name='cName'
            placeholder='Wpisz Nazwę Firmy'
            value={values.cName}
            handleChange={handleChange}
          />
          {/* <div className="input__error-box">
            <p className="input__error">{errorcName}</p>
          </div> */}
          <Input
            label='Kod Pocztowy i Miejscowość Firmy'
            className='form-input'
            type='text'
            name='cAddress'
            placeholder='Podaj Kod pocztowy i miejscowość Firmy'
            value={values.cAddress}
            handleChange={handleChange}
          />
          {/* <div className="input__error-box">
            <p className="input__error">{errorcAddress}</p>
          </div> */}
          <Input
            label='Ulica z Siedzibą Firmy'
            className='form-input'
            type='text'
            name='cStreet'
            placeholder='Wpisz ulicę z siedzibą firmy'
            value={values.cStreet}
            handleChange={handleChange}
          />
          {/* <div className="input__error-box">
            <p className="input__error">{errorcStreet}</p>
          </div> */}
          <Input
            label='NIP'
            className='form-input'
            type='text'
            name='cNip'
            placeholder='Wpisz NIP Firmy'
            value={values.cNip}
            handleChange={handleChange}
          />
          {/* <div className="input__error-box">
            <p className="input__error">{errorcName}</p>
          </div> */}
          <Input
            label='Email Firmy'
            className='form-input'
            type='email'
            name='cMail'
            placeholder='Podaj mail do Firmy'
            value={values.cMail}
            handleChange={handleChange}
          />
          {/* <div className="input__error-box">
            <p className="input__error">{errorcName}</p>
          </div> */}
          <Input
            label='Telefon do firmy'
            className='form-input mb'
            type='text'
            name='cPhone'
            placeholder='Wpisz telefon do firmy'
            value={values.cPhone}
            handleChange={handleChange}
          />
          {/* <div className="input__error-box">
            <p className="input__error">{errorcPhone}</p>
          </div> */}

          <Button />
        </Form>
      </div>

    </div>
  );
};

export default CompanyPage;