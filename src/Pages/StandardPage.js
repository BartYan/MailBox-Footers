import React, { useState } from 'react';

import '../Style/style.scss';
import image from '../Images/energy.jpg';

import validate from '../components/Form/validateInfo';
import useForm from '../components/Form/useForm';
import useBox from '../components/Form/useBox';

import StandardContent from '../components/Content/StandardContent/StandardContent';
import Footer from '../components/Footers/Footer';
import StandardFooter from '../components/Footers/StandardFooter';

import Form from '../components/Form/Form';
import Common from '../components/Form/Common';
import Button from '../components/Form/Button';
import Image from '../components/Form/Image';
import AvatarBox from '../components/Form/Image/AvatarBox';
import PhotosBox from '../components/Form/Image/PhotosBox';
import Overlay from '../components/Overlay';
import Sidebar from '../components/Sidebar';
import Helper from '../components/Helper/Helper';

const StandardPage = () => {

  const {
    overlayToggle,
    avatarBoxToggle,
    photosBoxToggle,
    overlayActive,
    // setOverlayActive,
    avatarBoxActive,
    setAvatarBoxActive,
    photosBoxActive,
    setPhotosBoxActive,
    foldersActive,
    setfoldersActive,
    foldersToggle } = useBox();

  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    data,
    src,
    handleFileChange,
    cropImage,
    setCropImage,
    crop,
    setCrop,
    getCroppedImg,
    preview,
    uploadImage} = useForm(submitForm,validate);

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
          <StandardContent />
        ) : (
          <Footer>
            <StandardFooter
              name={values.username}
              surname={values.surname}
              email={values.email}
              position={values.position}
              phone={values.phone}
              image={values.image}
            />
          </Footer>
        )}
       
      </div>

      <div className='content-right'>
        <img className='content-right--image' src={image} alt="panele" />
        <Form handleSubmit={handleSubmit}>
          <Common
            handleChange={handleChange}
            errorUser={errors.username}
            errorSur={errors.surname}
            errorPosition={errors.position}
            errorEmail={errors.email}
            errorPhone={errors.phone}
          />
          <Image
            image={values.image}
            fileImage={values.fileImage}
            handleChange={handleChange}
            overlayToggle={overlayToggle}
            avatarBoxToggle={avatarBoxToggle}
            photosBoxToggle={photosBoxToggle}
            foldersToggle={foldersToggle}
            setAvatarBoxActive={setAvatarBoxActive}
            setPhotosBoxActive={setPhotosBoxActive}
          />
          <Button />
        </Form>
      </div>

      <Overlay
        overlayToggle={overlayToggle}
        overlayActive={overlayActive}
        setAvatarBoxActive={setAvatarBoxActive}
        setPhotosBoxActive={setPhotosBoxActive}
      >
          <AvatarBox
            handleChange={handleChange}
            avatarBoxToggle={avatarBoxToggle}
            avatarBoxActive={avatarBoxActive}
            overlayToggle={overlayToggle}
          />
          <PhotosBox
            photosBoxToggle={photosBoxToggle}
            photosBoxActive={photosBoxActive}
            setPhotosBoxActive={setPhotosBoxActive}
            data={data}
            src={src}
            handleFileChange={handleFileChange}
            setCropImage={setCropImage}
            cropImage={cropImage}
            crop={crop}
            setCrop={setCrop}
            getCroppedImg={getCroppedImg}
            preview={preview}
            uploadImage={uploadImage}
            overlayToggle={overlayToggle}
            foldersActive={foldersActive}
            setfoldersActive={setfoldersActive}
            foldersToggle={foldersToggle}
          />
      </Overlay>
    </div>
  );
};

export default StandardPage;