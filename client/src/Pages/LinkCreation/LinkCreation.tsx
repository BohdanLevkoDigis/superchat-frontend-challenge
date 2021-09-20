import React from "react";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { FormComponent } from "../../components/FormComponent/FormComponent";

export interface ILinkPage {
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
      onSubmit={(values: ILinkPage, actions) => {
        console.log(values);
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        repositoryName: Yup.string().required("Enter enter repository name"),
        userName: Yup.string().required("Please enter full user name"),
        color: Yup.string().required("Please select the color"),
        /*      icon: Yup.string().required(
          "Please first select the icon for repository"
        ), */
      })}
    >
      {(props: FormikProps<ILinkPage>) => <FormComponent {...props} />}
    </Formik>
  );
};

export default LinkCreation;
