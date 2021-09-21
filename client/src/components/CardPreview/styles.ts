import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      width: 320,

      color: "white",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    cardBody: {
      display: "block",
      padding: 10,

      backgroundColor: "#1C1D21",
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    cardTitle: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",

      fontSize: 18,
      fontWeight: "bold",
      fontStyle: "italic",
    },
    cardGitIcon: {
      display: "block",
      width: 45,
      height: 35,
      padding: 0,

      textAlign: "right",
      color: "white",
    },
    cardRepository: {},
    cardRepositoryIcon: {
      display: "block",
      height: 160,
      width: 160,
      margin: "0 auto",

      borderRadius: "50%",
    },
    cardRepositoryAuthor: {
      marginTop: 15,
    },
    cardRepositoryItem: {
      display: "flex",
      alignItems: "center",
      marginTop: 10,
    },
    cardRepositoryItemIcon: {
      marginRight: 10,
    },
    cardRepositoryStars: {
      display: "flex",
      alignItems: "center",
      marginTop: 10,
    },
    cardTitleText: { paddingTop: 20, textAlign: "center" },
    cardSubText: {
      marginLeft: 5,
      fontStyle: "italic",
    },
    cardRepositoryRating: {
      marginLeft: 5,
      fontSize: 14,
    },
  })
);
