import React from "react";
import Button from "../../Button/views/Button";
import Image from "../../Image/views/Image";
import Input from "../../Input/views/Input";
import Text from "../../Text/views/Text";
import classes from "../css/UploadFile.Module.css";

const UploadFile = ({
  image,
  onClick,
  onImageClick,
  name,
  alt,
  inputId,
  inputClassName,
  imageClassName,
  buttonDisabled,
  imageText,
}) => {
  // const clickHandler
  return (
    <div className={classes.upload__parent__container}>
      <Input
        className={classes.upload__parent__top}
        name={name}
        type="file"
        id={inputId}
        style={{ display: "none" }}
      />
      <Image
        src={image}
        alt={alt}
        className={`${classes.upload__child__image} ${imageClassName}`}
        onClick={onImageClick}
      />
      <Text content={imageText} />
      <Button text="Update" disabled={buttonDisabled} />
    </div>
  );
};

export default UploadFile;
