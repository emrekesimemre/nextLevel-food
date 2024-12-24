'use client';

import React from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

const ImagePicker = ({ label, name }) => {
  const [image, setImage] = React.useState(null);
  console.log('🚀 ~ file: image-picker.js:8 ~ ImagePicker ~ image:', image)
  const imageInputRef = React.useRef();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setImage(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }

  const handlePickClick = () => {
    imageInputRef.current.click();
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {image && <Image src={image} alt="Preview" fill />}
          {!image && <p>No image picked yet.</p>}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept=".jpg,.jpeg,.png"
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button
          onClick={handlePickClick}
          type="button"
          className={classes.button}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
