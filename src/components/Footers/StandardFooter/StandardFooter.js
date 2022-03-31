import React from 'react';

function StandardFooter({name, surname, position, phone, email, image}) {

  var phoneResult = phone.substr(0, 3) + " " + phone.substr(3, 3) + " " + phone.substr(6, 3);
    return (
      <div id="divtocopy" style={{padding: "20px"}}>
      <table cellpadding="0" width="600" style={{verticalAlign: "-webkit-baseline-middle"}}>
      <tr className="gmail-fix">
        <td>
          <table cellpadding="0" cellspacing="0" border="0" align="center" width="500">
            <tr>
              <td cellpadding="0" cellspacing="0" border="0" height="1">
                <img src="/" width="500" height="1" style={{display:"block",maxHeight:"1px",minHeight:"1px",inWidth:"500px",width:"500px"}} alt=""/>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table width="100%">
            <tr>
              <td style={{width:"200px", textAlign:"left"}}>
                <img style={{verticalAlign:"middle",borderRadius:'6px'}} src={image} alt="avatar" width="150px"/>
              </td>
              <td style={{color:"rgb(0, 0, 0)", padding:"10px 0 0", verticalAlign:"top"}}>
                <h1 style={{fontFamily:"Arial",margin:"0", fontWeight:"400",fontSize:"28px"}}>
                  {name}
                  <span style={{fontSize:"28px",fontFamily:"Arial",fontWeight:"700"}}>
                    &nbsp;{surname}
                  </span>
                </h1>
                <h4 style={{fontFamily:"Arial",fontWeight:"normal",margin:"0",padding:"0 0 25px",fontSize:"14px",color:"#fd5600"}}>
                  {position}
                </h4>
                {!phone ? (
                    <span></span>
                  ) : (
                    <>
                    <img style={{verticalAlign:"bottom",width:"17px",margin:"16px 0 8px"}} src="/" alt=""/>
                    <span style={{fontFamily:"Arial",margin:"16px 0 8px",lineHeight:"16px",fontWeight:"400",fontSize:"14px",padding:"0 0 0 6px",display:"inline-block"}}>
                      +48 {phoneResult}
                    </span>
                    </>
                  )}
                <br/>
                <img style={{verticalAlign:"middle", width:"17px"}} src="/" alt=""/>
                <span style={{fontFamily:"Arial",margin:"0",lineHeight:"16px",fontWeight:"400",fontSize:"14px",paddingLeft:"6px",display:"inline-block"}}>
                    {email}
                </span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr style={{height:"30px",verticalAlign:"middle"}}>
          <td>
            <span style={{display:"block",height:"1px",width:"99%",backgroundColor:"#DFEAF3",margin:"0 auto"}}></span>
          </td>
      </tr>
      <tr>
        <td>
          <table>
            <tr>
              <td style={{width:"200px"}}>
                <table style={{borderSpacing: "0"}}>
                  <tr>
                    <td>
                      <img src="/" alt="" style={{verticalAlign:"middle",width:"40px"}}/>
                    </td>
                    <td style={{lineHeight:"13px",fontSize:"10px",fontFamily:"Arial",color:"rgb(0, 0, 0)",fontWeight:"400",padding:"0 0 0 20px"}}>
                      <span style={{color:"#000",fontSize:"10px",fontWeight:"700",verticalAlign: "middle"}}>
                        Nazwa Firmy
                      </span>
                      <br />kod pocztowy
                      <br />adres
                    </td>
                  </tr>
                </table>
              </td>
              <td>
                <table style={{borderSpacing: "0"}}>
                  <tr>
                    <td style={{width:"200px",lineHeight:"13px",fontSize:"10px",fontFamily: "Arial",color:"rgb(0, 0, 0)",fontWeight:"400",padding:"0"}}>
                      NIP:
                      <br/>email firmowy
                      <br/>tel. firmowy
                    </td>
                  </tr>
                </table>
              </td>
              <td>
                <table style={{borderSpacing:"0",width:"100%"}}>
                    <tr>
                      <td style={{textAlign:"right",width:"200px"}}>
                        <span style={{display:"inline-block"}}>
                          <a style={{display:"inline-block",textDecoration:"none",marginRight:"12px"}} href="/">
                            <img style={{width:"20px"}} src="/" alt=""/>
                          </a>
                          <a style={{display:"inline-block",textDecoration:"none",marginRight:"12px"}} href="/">
                            <img style={{width:"20px"}} src="/" alt=""/>
                          </a>
                          <a style={{display:"inline-block", textDecoration: "none",marginRight:"12px"}} href="/">
                            <img style={{width:"20px", display: "inline-block"}} src="/" alt=""/>
                          </a>
                          <a style={{display:"inline-block", textDecoration:"none",marginRight:"12px"}} href="/">
                            <img style={{width:"20px"}} src="/" alt=""/>
                          </a>
                          <a style={{textDecoration: "none"}} href="/">
                            <img style={{width: "20px"}} src="/" alt=""/>
                          </a>
                        </span>
                      </td>
                    </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr style={{verticalAlign:"middle"}}>
          <td>
            <p style={{fontFamily:"Arial",fontStyle: "normal",fontWeight: "normal",fontSize: "7px",lineHeight: "8px",color: "#787878",marginTop: "20px"}}>
              Administratorem Państwa danych osobowych jest ...
            </p>
          </td>
      </tr>
    </table>
  </div>
    );
}

export default StandardFooter;