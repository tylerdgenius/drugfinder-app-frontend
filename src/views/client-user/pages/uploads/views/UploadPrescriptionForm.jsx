import React, { useState } from "react";
import { backendURL } from "../../../../../config/config";
import Button from "../../../../../UI/Button/views/Button";
import Card from "../../../../../UI/Card/views/Card";
import Container from "../../../../../UI/Container/views/Container";
import HeadingH3 from "../../../../../UI/Heading/views/Heading";
import Input from "../../../../../UI/Input/views/Input";
import Label from "../../../../../UI/Label/views/Label";
import Select from "../../../../../UI/Select/views/Select";
import classes from "../css/Uploads.Module.css";

const UploadPrescriptionForm = (props) => {
  const [uploadFormDetails, setUploadFormDetails] = useState({
    drugname: "",
    drugclass: "",
    brandspecific: "",
    drugmanufacturer: "",
    drugstrength: "",
    dosageform: "",
  });

  const selectValues = [
    { optionValues: "Yes", text: "Yes" },
    { optionValues: "No", text: "No" },
  ];
  const selectValues02 = [
    {
      optionValues: "Supplements",
      text: "Supplements",
    },
    {
      optionValues: "Vitamins/Multivitamins and Minerals",
      text: "Vitamins/Multivitamins and Minerals",
    },
    {
      optionValues: "Eye Drops",
      text: "Eye Drops",
    },
    {
      optionValues: "Pain/Migraine Medications",
      text: "Pain/Migraine Medications",
    },
    {
      optionValues: "Anti-Ulcer Medications/Acids Reflux",
      text: "Anti-Ulcer Medications/Acids Reflux",
    },
    {
      optionValues: "Herpes Medications",
      text: "Herpes Medications",
    },
    {
      optionValues: "Thrush Creams (Anti-Thrush)",
      text: "Thrush Creams (Anti-Thrush)",
    },
    {
      optionValues: "Pessaries",
      text: "Pessaries",
    },
    {
      optionValues: "Anti-Hypertensives",
      text: "Anti-Hypertensives",
    },
    {
      optionValues: "Sexual Enhancers/Condoms",
      text: "Sexual Enhancers/Condoms",
    },
    {
      optionValues: "Anti-Malarial",
      text: "Anti-Malarial",
    },
    {
      optionValues: "Worm Expellers",
      text: "Worm Expellers",
    },
    {
      optionValues: "Anti-Asthma",
      text: "Anti-Asthma",
    },
    {
      optionValues: "Men & Women Wellness",
      text: "Men & Women Wellness",
    },
    {
      optionValues: "Cold and Flu Remedy",
      text: "Cold and Flu Remedy",
    },
    {
      optionValues: "Cough Remedies",
      text: "Cough Remedies",
    },
    {
      optionValues: "Congestion Relief",
      text: "Congestion Relief",
    },
    {
      optionValues: "Diarrhoea Remedies",
      text: "Diarrhoea Remedies",
    },
    {
      optionValues: "Nausea and Vomiting",
      text: "Nausea and Vomiting",
    },
    {
      optionValues: "Haemorrhoids and Piles",
      text: "Haemorrhoids and Piles",
    },
    {
      optionValues: "Nasal Sprays",
      text: "Nasal Sprays",
    },
    {
      optionValues: "Vaccines",
      text: "Vaccines",
    },
  ];

  const changeHandler = (e) => {
    let newData = { ...uploadFormDetails, [e.target.name]: e.target.value };
    setUploadFormDetails(newData);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let response = await fetch(`${backendURL}/uploads/presc-form`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(uploadFormDetails),
    });
    console.log(response);
  };

  return (
    <>
      <HeadingH3 content="Upload Prescription" />
      <Card className={classes.uploads__child__card__uploadform}>
        <Container className={classes.uploads__container__flex}>
          <HeadingH3
            content="Upload Form"
            className={classes.uploads__child__heading}
          />
          <Container className={classes.uploads__child__prescription_form}>
            <Label title="Name of Drug" htmlFor="drugname" />
            <Input
              type="text"
              name="drugname"
              value={uploadFormDetails.drugname}
              onChange={changeHandler}
            />
          </Container>
          <Container className={classes.uploads__child__prescription_form}>
            <Label title="Class of Drug" htmlFor="drugclass" />
            <Select
              type="text"
              name="drugclass"
              values={selectValues02}
              value={uploadFormDetails.drugclass}
              onChange={changeHandler}
            />
          </Container>
          <Container className={classes.uploads__child__prescription_form}>
            <Label title="Are you Brand Specific?" htmlFor="brandspecific" />
            <Select
              type="text"
              name="brandspecific"
              values={selectValues}
              value={uploadFormDetails.brandspecific}
              onChange={changeHandler}
            />
          </Container>
          <Container className={classes.uploads__child__prescription_form}>
            <Label title="Drug Manufacturer" htmlFor="drugmanufacturer" />
            <Input
              type="text"
              name="drugmanufacturer"
              value={uploadFormDetails.drugmanufacturer}
              onChange={changeHandler}
            />
          </Container>
          <Container className={classes.uploads__child__prescription_form}>
            <Label title="Drug Strength" htmlFor="drugstrength" />
            <Input
              type="text"
              name="drugstrength"
              placeholder="e.g 5mg, 10mg, 100mg"
              value={uploadFormDetails.drugstrength}
              onChange={changeHandler}
            />
          </Container>
          <Container className={classes.uploads__child__prescription_form}>
            <Label title="Dosage Form" htmlFor="dosageform" />
            <Input
              type="text"
              name="dosageform"
              placeholder="e.g Syrup, Tablet, Capsule"
              value={uploadFormDetails.dosageform}
              onChange={changeHandler}
            />
          </Container>
          <Button text="Submit" onClick={submitHandler} />
        </Container>
      </Card>
    </>
  );
};

export default UploadPrescriptionForm;
