import React from 'react';

// import Helper from '../../Helper/Helper';
import '../../../Style/style.scss';

const StandardContent = () => {
  return (
    <>
      <div className='content-header'>
        <h1 className='content-header--head'>Tytuł <br/>Podstrony</h1>
        <p className='content-header--text'>
          Wypełnij formularz i skopiuj swoją stopkę mailową.
          <br/> W razie potrzeby, możesz skorzystać z linków w podpowiedzi!
        </p>
      </div>

      {/* <Helper/> */}
    </>
  );
};

export default StandardContent;