import React from "react";

function Image({image, avatarBoxToggle, photosBoxToggle, setPhotosBoxActive, setAvatarBoxActive, overlayToggle, foldersToggle }) {

    return (
        <>
            <div className="form-avatar">
              <label className='form-label'>
                Wybierz swoje zdjęcie lub awatar
              </label>
              <div className="form-avatar--buttons">
                <button type="text" className="smallBtn" onClick={(e) => {overlayToggle(e); setAvatarBoxActive("false"); photosBoxToggle(e); foldersToggle(e)}}>Wybierz zdjęcie</button>
                <button type="text" className="smallBtn" onClick={(e) => {overlayToggle(e); setPhotosBoxActive("false"); avatarBoxToggle(e);}}>Wybierz avatar</button>
              </div>
            </div>
            <div className="preview">
              <img className="previewImg"
                  src={image}
                  alt="" />
            </div>
        </>
    )
}

export default Image;

