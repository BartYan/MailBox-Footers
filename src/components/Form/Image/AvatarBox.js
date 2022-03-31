import React from "react";
import { v4 as uuidv4 } from 'uuid';

import data from "./AvatarList";


function AvatarBox({avatarBoxToggle, avatarBoxActive, handleChange, overlayToggle}) {

    return (
        <>
            {/* Open Avatar drop down - avatarBoxToggle state true*/}
            {/* <div className="dropdown"> */}
            <div className={avatarBoxActive ? "hide" : "showAvatars"}>
                <div className="closeBtn__container">
                    <button type="text" className="closeBtn" onClick={(e)=>{overlayToggle(e); avatarBoxToggle(e);}}>
                        Zamknij
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.072 4.8L8 6.872L5.928 4.8L4.8 5.928L6.872 8L4.8 10.072L5.928 11.2L8 9.128L10.072 11.2L11.2 10.072L9.128 8L11.2 5.928L10.072 4.8ZM8 0C3.576 0 0 3.576 0 8C0 12.424 3.576 16 8 16C12.424 16 16 12.424 16 8C16 3.576 12.424 0 8 0ZM8 14.4C4.472 14.4 1.6 11.528 1.6 8C1.6 4.472 4.472 1.6 8 1.6C11.528 1.6 14.4 4.472 14.4 8C14.4 11.528 11.528 14.4 8 14.4Z" fill="#787878"/>
                        </svg>
                    </button>
                </div>
                <h4 className="activeBox-title">Wybierz awatar</h4>
                <div id="myDropdown" className="dropdown-content">
                    {data.map(elem => (
                        <div key={uuidv4()} className="inputwrap">
                            <input
                                type="radio"
                                name="image"
                                value={elem.value}
                                id={`a${elem.id}`}
                                className="avatar"
                                onClick={(e) => {
                                    avatarBoxToggle(e);
                                    overlayToggle(e);
                                    handleChange(e);
                                }}
                            />
                            <label htmlFor={`a${elem.id}`}>
                                <img
                                src={elem.value}
                                alt=""
                            /></label>
                        </div>
                    ))}
                </div>
                <span className="boxFade"></span>
            </div>
        </>
    )
}

export default AvatarBox;

