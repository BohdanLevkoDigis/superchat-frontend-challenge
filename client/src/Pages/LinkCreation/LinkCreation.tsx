import React from "react";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";

export interface ILinkForm {
  userName: string;
  repositoryName: string;
  color: string;
  icon: string;
}

export interface IFormStatus {
  message: string;
  type: string;
}

const LinkCreation: React.FunctionComponent = () => {
  return (
    <Formik
      initialValues={{
        userName: "",
        repositoryName: "",
        color: "#FF5C5C",
        icon: "",
      }}
      onSubmit={(values: ILinkForm, actions) => {
        console.log(values);
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        repositoryName: Yup.string().required("Enter enter repository name"),
        userName: Yup.string().required("Please enter full user name"),
        color: Yup.string().required("Please select the color"),
        icon: Yup.string().required(
          "Please first select the icon for repository"
        ),
      })}
    >
      {(props: FormikProps<ILinkForm>) => <div>"component here"</div>}
    </Formik>
  );
};

export default LinkCreation;
