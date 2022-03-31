import React from 'react';

import Helper from '../../Helper/Helper';
import '../../../Style/style.scss';

const MainContent = () => {
  return (
    <>
      <div className='content-header'>
        <h1 className='content-header--head'>Cześć!</h1>
        <p className='content-header--text'>
          Jesteś na stronie dzięki której wygenerujesz swoją stopkę mailową.
          <br/> Wybierz pozycję z menu i uzupełnij formularz.
          <br/> W razie potrzeby, możesz skorzystać z linków w podpowiedzi!
        </p>
      </div>

      <Helper/>
    </>
  );
};

export default MainContent;