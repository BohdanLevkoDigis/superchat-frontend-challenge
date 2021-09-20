import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() =>
  createStyles({
    card: {
      width: 320,
      height: "620px",
      margin: "40px auto",

      color: "white",
    },
    cardBody: {
      display: "block",
      height: "350px",
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
    cardRepositoryTitle: {},
    cardRepositoryDescription: {},
    cardRepositoryStars: {
      display: "flex",
      alignItems: "center",
    },
    cardRepositoryContributors: {
      padding: 0,
    },
    cardSubText: {
      marginLeft: 5,
      fontStyle: "italic",
    },
    cardRepositoryRating: {
      marginLeft: 5,
      fontSize: 16,
    },
  })
);
