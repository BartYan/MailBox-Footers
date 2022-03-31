import React from 'react';
import '../../Style/style.scss';

const Helper = () => {

  return (
    <>
        <div className='content-helper'>
        <h4>
          Zobacz jak łatwo możesz dodać stopkę!
        </h4>
        <p><span role="img" aria-label="light bulb">💡</span>&nbsp;
        <a href="https://support.google.com/mail/answer/8395?hl=pl&co=GENIE.Platform%3DDesktop" target="_blank" rel="noreferrer">TUTAJ</a>
        &nbsp;znajdziesz informacje jak umieścić stopkę w Gmail.</p>

        <p><span role="img" aria-label="light bulb">💡</span> Dla poczty Outlook, pomocny będzie&nbsp;
        <a href="https://support.microsoft.com/pl-pl/office/zmienianie-swojego-podpisu-e-mail-86597769-e4df-4320-b219-39d6e1a9e87b" target="_blank" rel="noreferrer">TEN LINK.</a></p>

        <p><span role="img" aria-label="light bulb">💡</span>&nbsp;
        Jeśli używasz Thunderbird, kliknij <a href="https://support.mozilla.org/pl/kb/sygnatury" target="_blank" rel="noreferrer">TUTAJ.</a>
        </p>
    </div>
      {/* {(mailBox === "thunderbird") ? (
    <div className='content-helper'>
      <h4>
      Zobacz jak łatwo możesz dodać stopkę dla Gmaila!
      </h4>
      <p><span role="img" aria-label="light bulb">💡</span>&nbsp;
      <a href="https://support.google.com/mail/answer/8395?hl=pl&co=GENIE.Platform%3DDesktop" target="_blank" rel="noreferrer">TUTAJ</a>
      &nbsp;znajdziesz szczegółowe informacje jak umieścić stopkę w Gmail.</p>
      <p><span role="img" aria-label="light bulb">📫</span>&nbsp;
      W skrócie, przejdź do: Gmail &gt; Ustawienia &gt; Wszystkie ustawienia &gt; Podpis</p>
      </div>
        ) : (
          <p>sdasd</p>
        )} */}
    </>
  //   if (mailBox === "gmail") {
  //     <div className='content-helper'>
  //       <h4>
  //         Zobacz jak łatwo możesz dodać stopkę dla Gmaila!
  //       </h4>
  //       <p><span role="img" aria-label="light bulb">💡</span>&nbsp;
  //       <a href="https://support.google.com/mail/answer/8395?hl=pl&co=GENIE.Platform%3DDesktop" target="_blank" rel="noreferrer">TUTAJ</a>
  //       &nbsp;znajdziesz szczegółowe informacje jak umieścić stopkę w Gmail.</p>

  //       <p><span role="img" aria-label="light bulb">📫</span>&nbsp;
  //         W skrócie, przejdź do: Gmail &gt; Ustawienia &gt; Wszystkie ustawienia &gt; Podpis</p>
  //     </div>
  //   } else if (mailBox === "thunderbird") {
    
  //     <div className='content-helper'>
  //       <h4>
  //         Przeczytaj jak dodać stopkę w Thunderbird!
  //       </h4>
  //       <p><span role="img" aria-label="light bulb">💡</span>&nbsp;
  //       Jeśli używasz Thunderbird, kliknij <a href="https://support.mozilla.org/pl/kb/sygnatury" target="_blank" rel="noreferrer">TUTAJ.</a>
  //       </p>
  //       <p><span role="img" aria-label="light bulb">🚨</span>&nbsp;
  //       <strong>Uważaj!</strong> Kopiując tę stopkę, kopiujesz kod HTML. Przy wklejaniu podpisu w Thunderbird, upewnij się, że wybrałeś opcję kod HTML.</p>
  //     </div>
  // } else if (mailBox === "outlook") {
    
  //     <div className='content-helper'>
  //       <h4>
  //         Tak umieścisz stopkę w Microsoft Outlook!
  //       </h4>
  //       <p><span role="img" aria-label="light bulb">💡</span> Dla wersji (wersja), kliknij w&nbsp;
  //       <a href="https://support.microsoft.com/pl-pl/office/zmienianie-swojego-podpisu-e-mail-86597769-e4df-4320-b219-39d6e1a9e87b" target="_blank" rel="noreferrer">TEN LINK.</a></p>
  //     </div>
  
  // }


  )
};

export default Helper;
