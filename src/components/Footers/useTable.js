import { useState, useEffect } from 'react';

const useTable = () => {

  // copy table content
  function copyDivToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("divtocopy"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    setCopySuccess('skopiowano')
  }

  // copy table code
  function codeCopy() {
    var dummy = document.createElement("textarea");
    let divtopcopy = document.getElementById("divtocopy").innerHTML;
    console.log(divtopcopy);
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = divtopcopy;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    setCopySuccess('skopiowano')
  }

  const [copySuccess, setCopySuccess] = useState('')

  useEffect(() => {
    setTimeout(() => setCopySuccess(''), 5000)
  }, [copySuccess])


  //MailBox options
  // const [isGmail, setIsGmail] = useState(false);
  // const [isThunder, setIsThunder] = useState(false);
  // const [isOutlook, setIsOutlook] = useState(false);

  const [mailBox, setMailBox] = useState('');
  function MailBoxFunc() {
    setMailBox("outlook")
  }
  useEffect(() => {
    console.log(mailBox)
  })
  return { copyDivToClipboard, codeCopy, copySuccess, mailBox, setMailBox, MailBoxFunc};
};

export default useTable;