import React, { useRef, useState } from "react";
import Card from "../../../../../UI/Card/views/Card";
import Container from "../../../../../UI/Container/views/Container";
import ContainerLink from "../../../../../UI/ContainerLink/views/ContainerLink";
import HeadingH3 from "../../../../../UI/Heading/views/Heading";
import IconButton from "../../../../../UI/IconButton/views/IconButton";
import classes from "../css/Uploads.Module.css";
import { GrCloudUpload } from "react-icons/gr";
import Input from "../../../../../UI/Input/views/Input";
import Text from "../../../../../UI/Text/views/Text";
import Button from "../../../../../UI/Button/views/Button";
import { backendURL } from "../../../../../config/config";
import { Link } from "react-router-dom";

const UploadNew = (props) => {
  const [imageFile, setImageFile] = useState({});
  const [onFileSelect, setOnFileSelect] = useState(false);

  const clickHandler = (e) => {
    const imageUpload = document.getElementById("image-upload");
    imageUpload.click();
  };

  const changeHandler = (e) => {
    setOnFileSelect(true);
    console.log(e.target.files[0]);
    setImageFile(e.target.files[0]);
  };

  const uploadFileHandeler = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("prescription_image", imageFile);
    console.log(data);

    let response = await fetch(`${backendURL}/uploads/images`, {
      method: "POST",
      body: data,
    });
    console.log(response);
  };

  return (
    <div>
      <HeadingH3 content="New Upload" />
      <Card className={classes.uploads__child__card__newupload}>
        <Container>
          <ContainerLink className={classes.uploads__child__card__section01}>
            <Input
              type="file"
              id="image-upload"
              className={classes.uploads__input__form}
              onChange={changeHandler}
            />

            <IconButton
              icon={<GrCloudUpload />}
              className={classes.uploads__children__icon__button}
              onClick={clickHandler}
            />
            <Text content="Upload Your Prescription" />
            {imageFile.name && <Text content={imageFile.name} />}
            {onFileSelect && (
              <Button
                text="Upload"
                className={classes.upload__button__uploader}
                onClick={uploadFileHandeler}
              />
            )}
          </ContainerLink>

          <ContainerLink className={classes.uploads__child__card__section02}>
            <Text
              content="If you have the prescription list details
            then you can simply fill the upload form below and we'll respond
            to your query"
            />
            <Button
              text="Fill Form"
              className={classes.upload__button__uploader}
              link="/uploads/presc-form"
            />
          </ContainerLink>
        </Container>
      </Card>
    </div>
  );
};

export default UploadNew;
