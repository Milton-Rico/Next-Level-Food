'use client';
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name, defaultValue }) {
  const [pickedImage, setPicketImage] = useState();

  const imageInputRef = useRef();

  function handlePickClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPicketImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPicketImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt='The image selected by the user.'
              fill
              sizes='100vw'
            />
          )}
        </div>
        <input
          className={classes.input}
          type='file'
          id={name}
          accept='image/png, image/jpeg'
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
          defaultValue={defaultValue}
        />
        <button
          className={classes.button}
          type='button'
          onClick={handlePickClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
