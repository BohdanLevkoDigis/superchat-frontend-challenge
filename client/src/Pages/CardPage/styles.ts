import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() =>
  createStyles({
    card: {
      width: 320,
      margin: "40px auto",

      color: "white",
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
    cardRepositoryList: {
      padding: 0,
    },
    cardRepositoryStars: {
      display: "flex",
      alignItems: "center",
      marginTop: 10,
    },
    cardRepositoryContributors: {
      marginTop: 10,
      padding: 0,
    },
    cardTitleText: {
      fontWeight: "bold",
      marginLeft: 5,
      fontStyle: "italic",
    },
    cardSubText: {
      marginLeft: 5,
      fontStyle: "italic",
    },
    cardRepositoryRating: {
      marginLeft: 5,
      fontSize: 16,
    },
    cardRepoNotFound: {
      marginTop: 15,
      textAlign: "center",
    },
  })
);
