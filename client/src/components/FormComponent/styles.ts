import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: 1200,

      gap: 80,
      margin: "0 auto",
      padding: "40px 20px",

      color: "#707172",
    },

    creationForm: {
      width: 450,
      height: "620px",

      borderRadius: 15,
      boxShadow:
        "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
    },

    creationFormTitle: { paddingTop: 20, textAlign: "center" },

    creationFormSubTitle: {
      marginTop: 10,
    },
    creationFormImageUpload: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
    creationFormColorPicker: {
      margin: "40px auto",
    },

    creationFormTextField: {
      "& > *": {
        width: "100%",
      },
    },
    creationFormSubmitButton: {
      display: "block",
      width: "50%",
      margin: "48px auto 10px",
    },
    creationFormStatus: {
      display: "block",
      marginBottom: 20,
      textAlign: "center",
    },
    creationFormSuccessMessage: { color: "green" },
    creationFormErrorMessage: { color: "red" },
  })
);
