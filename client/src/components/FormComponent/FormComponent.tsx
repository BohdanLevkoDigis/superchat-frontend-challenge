import React, { useState } from "react";
import { Form, FormikProps } from "formik";
import { Grid, TextField, Button } from "@material-ui/core";
import { useDropzone } from "react-dropzone";
import { useStyles } from "./styles";
import { IFormStatus, ILinkPage } from "../../Pages/LinkCreation/LinkCreation";
import { Skeleton } from "@material-ui/lab";
import { AddPhotoAlternate, FileCopy } from "@material-ui/icons";
import { GithubPicker } from "react-color";
import { CardPreview } from "../CardPreview/CardPreview";

export interface IFormComponentProps extends FormikProps<ILinkPage> {
  displayFormStatus: boolean;
  formStatus: IFormStatus;
  createdLink?: string;
}

interface Color {
  hex: string;
}

export const FormComponent: React.FC<IFormComponentProps> = ({
  setFieldValue,
  formStatus,
  displayFormStatus,
  createdLink,
  ...props
}) => {
  const classes = useStyles();
  const [files, setFiles] = useState<{ name: string }[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: async (acceptedFiles) => {
      setFiles((prevFiles) => [acceptedFiles[0]]);
      setFieldValue("icon", acceptedFiles);
    },
  });

  const { values, touched, errors, handleBlur, handleChange, isSubmitting } =
    props;
  return (
    <div className={classes.container}>
      <Form className={classes.creationForm} encType="multipart/form-data">
        <h1 className={classes.creationFormTitle}>Create Link</h1>
        <Grid container justify="space-around" direction="row">
          <Grid
            item
            lg={10}
            md={10}
            sm={10}
            xs={10}
            className={classes.creationFormTextField}
          >
            <TextField
              name="userName"
              id="userName"
              label="User Name"
              value={values.userName}
              type="text"
              helperText={
                errors.userName && touched.userName
                  ? errors.userName
                  : "Enter your user name."
              }
              error={errors.userName && touched.userName ? true : false}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid
            item
            lg={10}
            md={10}
            sm={10}
            xs={10}
            className={classes.creationFormTextField}
          >
            <TextField
              name="repositoryName"
              id="repositoryName"
              label="Repository name"
              value={values.repositoryName}
              helperText={
                errors.repositoryName && touched.repositoryName
                  ? errors.repositoryName
                  : "Enter your repository name."
              }
              error={
                errors.repositoryName && touched.repositoryName ? true : false
              }
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid
            item
            lg={10}
            md={10}
            sm={10}
            xs={10}
            className={classes.creationFormTextField}
          >
            <div className={classes.creationFormSubTitle}>Pick color</div>
            <GithubPicker
              className={classes.creationFormColorPicker}
              onChangeComplete={(color: Color) =>
                setFieldValue("color", color.hex)
              }
            />
          </Grid>
          <Grid
            item
            lg={10}
            md={10}
            sm={10}
            xs={10}
            className={classes.creationFormTextField}
          >
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <Skeleton variant="text" />
              <div className={classes.creationFormImageUpload}>
                Add product images
                <AddPhotoAlternate fontSize="large" />
              </div>
              <Skeleton variant="rect" />
            </div>
          </Grid>

          <Grid item lg={10} md={10} sm={10} xs={10}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disabled={isSubmitting}
              className={classes.creationFormSubmitButton}
            >
              Submit
            </Button>
            {displayFormStatus && (
              <div className={classes.creationFormStatus}>
                {formStatus.type === "error" ? (
                  <p className={classes.creationFormErrorMessage}>
                    {formStatus.message}
                  </p>
                ) : (
                  <>
                    <p className={classes.creationFormSuccessMessage}>
                      Your link successfully generated
                    </p>
                    <Button
                      type="button"
                      variant="contained"
                      color="primary"
                      startIcon={<FileCopy />}
                      className={classes.creationFormCopyButton}
                      onClick={() =>
                        navigator.clipboard.writeText(`${createdLink}`)
                      }
                    >
                      Copy link
                    </Button>
                  </>
                )}
              </div>
            )}
          </Grid>
        </Grid>
      </Form>
      <CardPreview
        repositoryName={values.repositoryName}
        userName={values.userName}
        color={values.color}
        icon={files[0] ? URL.createObjectURL(files[0]) : ""}
      />
    </div>
  );
};
