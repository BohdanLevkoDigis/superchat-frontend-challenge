import React, { useState } from "react";
import { AxiosError } from "axios";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { FormComponent } from "../../components/FormComponent/FormComponent";
import { dataToFormData } from "../../utils/dataToFormData";
import { sendRepoLinkAddForm } from "../../services/repoLinkServices";

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

interface IFormStatusProps {
  [key: string]: IFormStatus;
}

export interface ISuccessResponse extends ILinkPage {
  _id: string;
}

const formStatusProps: IFormStatusProps = {
  success: {
    message: "Link added successfully.",
    type: "success",
  },
  error: {
    message: "Something went wrong. Please try again.",
    type: "error",
  },
};

const LinkCreation: React.FunctionComponent = () => {
  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: "",
    type: "",
  });
  const [displayFormStatus, setDisplayFormStatus] = useState(false);
  const [createdLink, setCreatedLink] = useState("");

  const addNewRepoLink = async (
    values: ILinkPage,
    actions: FormikHelpers<ILinkPage>
  ) => {
    try {
      actions.setSubmitting(true);
      const data: FormData = dataToFormData(values);
      const addRepoLinkStatus: ISuccessResponse | any =
        await sendRepoLinkAddForm(data);
      if (addRepoLinkStatus) {
        setFormStatus(formStatusProps.success);
        setCreatedLink(`http://localhost:5000/${addRepoLinkStatus["_id"]}`);
        actions.resetForm({});
      }
    } catch (error) {
      actions.setSubmitting(false);
      if (!(error as AxiosError).response) {
        setFormStatus(formStatusProps.error);

        return;
      }
      setFormStatus(formStatusProps.error);
    } finally {
      setDisplayFormStatus(true);
    }
  };

  return (
    <Formik
      initialValues={{
        userName: "",
        repositoryName: "",
        color: "#FF5C5C",
        icon: "",
      }}
      onSubmit={addNewRepoLink}
      validationSchema={Yup.object().shape({
        repositoryName: Yup.string().required("Enter enter repository name"),
        userName: Yup.string().required("Please enter full user name"),
        color: Yup.string().required("Please select the color"),
        /*      icon: Yup.string().required(
          "Please first select the icon for repository"
        ), */
      })}
    >
      {(props) => (
        <FormComponent
          {...props}
          displayFormStatus={displayFormStatus}
          formStatus={formStatus}
          createdLink={createdLink}
        />
      )}
    </Formik>
  );
};

export default LinkCreation;
