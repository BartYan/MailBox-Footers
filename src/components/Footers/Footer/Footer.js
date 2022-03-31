import React from 'react';

import useTable from '../useTable';

function Footer({children}) {

  const { copyDivToClipboard, codeCopy, copySuccess, mailBox, setMailBox} =  useTable();
    return (
      // EXAMPLE VIEW FOR FOOTERS - need some custom changes
      <>
      <div className='content-header'>
        <p className='content-header--text'>
          <span className='content-header--small'>Prawie gotowe!</span>
          <br/>Upewnij się, że dane są dobrze wprowadzone.
          <br/>Skopiuj podgląd stopki i umieść ją w podpisie swojego maila:
        </p>

      {document.queryCommandSupported('copy') && (
        <div className="modal-content">
          <div className="mail-tabs">
            <div className="buttonwrap">
              <button className="smallBtn" onClick={() => setMailBox("gmail")}>
                gmail
              </button>
            </div>
            <div className="buttonwrap">
              <button className="smallBtn" onClick={() => setMailBox("thunderbird")}>
                thunderbird
              </button>
            </div>
            <div className="buttonwrap">
              <button className="smallBtn" onClick={() => setMailBox("outlook")}>
                outlook
              </button>
            </div>
          </div>

          {children}

          <div className="mail-copy">
            <div className="buttonwrap">
              <button className="smallBtn" onClick={() => copyDivToClipboard()}>
                {copySuccess ? <span>{copySuccess}</span> : 'skopiuj stopkę'}
              </button>
            </div>
            <div className="buttonwrap">
              <button className="smallBtn" onClick={() => codeCopy()}>
                {copySuccess ? <span>{copySuccess}</span> : 'skopiuj kod stopki'}
              </button>
            </div>
          </div>

        </div>
       )}
       </div>

      {/* HELPER */}
      {(mailBox === "gmail") ? (
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
      ) : (mailBox === "thunderbird") ? (
          <div className='content-helper'>
          <p>thunder</p>
          </div>
      ) : (mailBox === "outlook") ? (
          <div className='content-helper'>
          <p>outlook</p>
          </div>
      ) : (
          <p></p>
      )}
       </>
    );
}

export default Footer;