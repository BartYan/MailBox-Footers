import { useState } from 'react';

const useBox = () => {
  //show or hide overlay box
  const [overlayActive, setOverlayActive] = useState("false");
  const overlayToggle = (e) => {
    e.preventDefault();
    setOverlayActive(!overlayActive);
  };
  //show or hide avatar box
  const [avatarBoxActive, setAvatarBoxActive] = useState("false");
  const avatarBoxToggle = (e) => {
        e.preventDefault();
        setAvatarBoxActive(!avatarBoxActive);
  };
  //show or hide main ftp box
  const [photosBoxActive, setPhotosBoxActive] = useState("false");
  const photosBoxToggle = (e) => {
        e.preventDefault();
        setPhotosBoxActive(!photosBoxActive);
  };
  //open or close folders window
  const [foldersActive, setfoldersActive] = useState("false");
  const foldersToggle = (e) => {
          e.preventDefault();
          setfoldersActive(!foldersActive);
  };

  return {
    overlayToggle,
    avatarBoxToggle,
    photosBoxToggle,
    overlayActive,
    setOverlayActive,
    avatarBoxActive,
    setAvatarBoxActive,
    photosBoxActive,
    setPhotosBoxActive,
    foldersActive,
    setfoldersActive,
    foldersToggle };
};

export default useBox;