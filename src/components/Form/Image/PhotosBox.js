import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

function PhotosBox({
    photosBoxToggle,
    photosBoxActive,
    setPhotosBoxActive,
    data,
    src,
    handleFileChange,
    cropImage,
    setCropImage,
    crop,
    setCrop,
    getCroppedImg,
    uploadImage,
    overlayToggle,
    foldersActive,
    setfoldersActive,
    foldersToggle,
    preview}) {
    // overlayActive - overlay for avatar and photos (useBox)
    // avatarBoxActive -avatar view (useBox)
    // photosBoxActive - main box ftp (useBox)
    // foldersActive - folders view in main box (useBox)
    // photosFolderActive - photos from foler view
    // cropActive - crop image view

    //open or close photos window
    const [photosFolderActive, setphotosFolderActive] = useState("false");
    const photosFolderToggle = (e) => {
            e.preventDefault();
            setphotosFolderActive(!photosFolderActive);
    };
    //open or close crop window
    const [cropActive, setCropActive] = useState("false");
    const cropToggle = (e) => {
            e.preventDefault();
            setCropActive(!cropActive);
    };

    //watch over react-image-crop img element
    //you need it only if you want upload image after load from ftp, without drag and move crop area
    //without this, "React" doesn't see choosen photo as a new img state(cropImage) and you will have to drag and move crop area to change the state
    useEffect(() => {
        const imgEl = document.querySelector(".ReactCrop__image");
        setCropImage(imgEl)
        console.log("firstImageElement - " + imgEl)
        console.log("cropImage - " + cropImage)
    });

    //Photo list from clicked ftp folder (folder.content)
    const [photoList, setPhotoList] = useState(null);

    return (
        <>
            <div className={photosBoxActive ? "hide" : "showAvatars"}>

                <div className="closeBtn__container">
                    <button type="text" className="closeBtn"
                        onClick={(e)=>{overlayToggle(e);
                        setPhotosBoxActive('false');
                        foldersToggle(e); //to keep this state, toggle it, it will be changed back when you return to this view(image.js)
                        }}>
                        Zamknij
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.072 4.8L8 6.872L5.928 4.8L4.8 5.928L6.872 8L4.8 10.072L5.928 11.2L8 9.128L10.072 11.2L11.2 10.072L9.128 8L11.2 5.928L10.072 4.8ZM8 0C3.576 0 0 3.576 0 8C0 12.424 3.576 16 8 16C12.424 16 16 12.424 16 8C16 3.576 12.424 0 8 0ZM8 14.4C4.472 14.4 1.6 11.528 1.6 8C1.6 4.472 4.472 1.6 8 1.6C11.528 1.6 14.4 4.472 14.4 8C14.4 11.528 11.528 14.4 8 14.4Z" fill="#787878"/>
                        </svg>
                    </button>
                </div>
                {/* FTP FOLDERS VIEW */}
                <div className={foldersActive ? "hide" : "show"}>
                    <h4 className="activeBox-title">Wybierz folder</h4>
                    <div className={"dropdown-content folder-content"}>
                        {foldersActive ? null : data.map((folder, index) => (
                            <div className="largeBtn" key={uuidv4()}
                                onClick={(e) => {
                                        setPhotoList(folder.content);
                                        photosFolderToggle(e);
                                        foldersToggle(e);
                                    }}
                            >
                                <p>{folder.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* (clicked)FOLDER PHOTOS VIEW */}
                <div className={photosFolderActive ? "hide" : "show"}>
                    <div className="activeBox-headBox">
                        <svg className="activeBox-back" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                        onClick={(e) => {
                                        photosFolderToggle(e);
                                        foldersToggle(e);
                                    }}>
                        <path d="M16 7H3.83L9.415 1.415L8 0L0 8L8 16L9.415 14.585L3.83 9H16V7Z" fill="#787878"/>
                        </svg>
                        <h4 className="activeBox-title">Wybierz zdjęcie</h4>
                    </div>
                    <div className={"dropdown-content photos-content"}>
                        {photosFolderActive ? null : photoList.map((image, index) => (
                        <img
                            key={uuidv4()}
                            src={image}
                            className="server-img"
                            onClick={(e) => {
                                        cropToggle(e);
                                        photosFolderToggle(e);
                                        setfoldersActive("false");
                                        handleFileChange(image);
                                    }}
                            alt="zdjęcie"/>
                        ))}
                    </div>
                    <span className="boxFade"></span>
                </div>

                {/* CROP IMAGE VIEW */}
                <div className={cropActive ? "hide" : "show"}>
                    <div className="activeBox-headBox">
                        <svg className="activeBox-back" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                        onClick={(e) => {
                            cropToggle(e);
                            photosFolderToggle(e);
                        }}>
                        <path d="M16 7H3.83L9.415 1.415L8 0L0 8L8 16L9.415 14.585L3.83 9H16V7Z" fill="#787878"/>
                        </svg>
                        <h4 className="activeBox-title">Wykadruj zdjęcie i zaakceptuj</h4>
                    </div>
                    <p className="activeBox-text">
                        Przed wysłaniem wybierz odpowiedni kadr dla swojego zdjęcia.
                        <br/>Następnie kliknij przycisk "wyślij" aby je zaktualizować i ustawić w stopce.
                    </p>

                    <div className="dropdown-content crop-content">
                        <div className="cropArea__flex">
                            <div className="cropArea__crop">
                                <div className="cropArea__crop-cropper">
                                    <ReactCrop src={src} crop={crop} onImageLoaded={setCropImage} locked={true} onChange={(e) => {setCrop(e); getCroppedImg(e); }}/>
                                </div>
                            </div>
                            {/* Use this code if you need preview cropped image before accept*/}
                            {/* <button onClick={getCroppedImg} className="smallBtn">przytnij zdjęcie</button> */}
                            {/* {preview && <div className="cropArea__preview">
                                <p>Podgląd:</p>
                                <img src={preview} alt="przycięte zdjęcie" className="server-img"/>
                                <p className="small-text">Jeśli odpowiada Ci kadr który wybrałeś, przejdź do "Wyślij"!</p>
                            </div>} */}
                        </div>
                    </div>

                    {/* UPLODER */}
                    <form className="crop__submit">
                        {/* <input type="file" name="image" onChange={this.onChangeImg} /> */}
                        <button
                            type="button"
                            onClick={(e) => {
                                        //getCroppedImg(e);
                                        uploadImage(e);
                                        photosBoxToggle(e);
                                        overlayToggle(e);
                                        foldersToggle(e); //to keep this state, toggle it, it will be changed back when you return to this view(image.js)
                                    }}
                            className="largeBtn">
                            Akceptuję
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PhotosBox;

