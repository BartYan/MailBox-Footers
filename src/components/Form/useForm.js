import { useState, useEffect } from 'react';
import axios from 'axios';

const useForm = (callback, validate) => {

  //----------------------------- FORM INPUTS -----------------------------
  const [values, setValues] = useState({
    //common values
    username: '',
    surname: '',
    position: '',
    phone: '',
    email: '',
    image: '',
    fileImage: '',
    //company info in mail footer tables- (company)
    cName: '',
    cAddress: '',
    cStreet: '',
    cNip: '',
    cMail: '',
    cPhone: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });

    // set image from file input
    if (e.target.files && e.target.files[0]) {
      setValues({
        ...values,
        'image':(URL.createObjectURL(e.target.files[0]))
      });
    }

  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    // [errors]
  );

  //----------------------------- FORM IMAGES -----------------------------

  //FTP FOLDER - GET IMAGES
  const [data, newData] = useState(null);
  // useEffect(() => {
  //     fetch('/')
  //       .then((response) => response.json())
  //       .then((response) => newData(response));
  //     }, []);
  console.log(data);

  //SELECT IMAGE FROM FOLDER
  const [src, selectFile] = useState(null);

  const handleFileChange = e => {
    selectFile(e)
    // for input type file
    // selectFile(URL.createObjectURL(e.target.files[0]))
  }

  //CROP IMAGE AREA
  const [crop, setCrop] = useState({
    aspect: 1 / 1,
    x:0,
    y:0,
    width: 200,
    height: 200,
    unit: 'px'
  });

  const [cropImage, setCropImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);

  //CROP IMAGE FUNC
  function getCroppedImg() {
      console.log(crop);
      console.log(cropImage);

      const canvas = document.createElement("canvas");
      const scaleX = cropImage.naturalWidth / cropImage.width;
      const scaleY = cropImage.naturalHeight / cropImage.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext("2d");

      //New lines to be added from https://www.npmjs.com/package/react-image-crop
      const pixelRatio = window.devicePixelRatio;
      canvas.width = crop.width * pixelRatio;
      canvas.height = crop.height * pixelRatio;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      ctx.imageSmoothingQuality = "high";

      ctx.drawImage(
        cropImage,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );

      //Code below gives you temporary image, as Base64 string: data:image/jpeg;base64,/9j/4A...
      //We need it to set croppes image preview (blob is a file object, not a link what you are able to show)
      const base64Image = canvas.toDataURL("image/jpeg");
      setPreview(base64Image);

      //A Blob() is almost a File() - it's just missing the two properties below which we will add .lastModifiedDate & .name
      //This final cropped file is sending to server
      canvas.toBlob(blob => {
        blob.lastModifiedDate = new Date();
        blob.name = "cropped-image.png";
        setFile(blob)
      },
      "image/png",
      1,
      )
      console.log(file);
  }

  //UPLOADER
  function uploadImage() {
    const formData =  new FormData();
    formData.append('image', file);
    formData.append('fname', file.name);
    let url = "/";
    axios.post(url, formData, {
    })
    .then(res => {
        console.log(res.data);
        console.log(file);
        console.log(res.data.url);
        setValues({
          ...values,
          image: res.data.url
        });
    })
  }
  //UPLOADER THE END

  return { handleChange, handleSubmit, values, errors, data, src, handleFileChange, cropImage, setCropImage, crop, setCrop, getCroppedImg, preview, uploadImage};
};

export default useForm;